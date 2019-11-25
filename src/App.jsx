import React, { useEffect, useState } from 'react'
import TheYard from './components/TheYard'
import axios from 'axios'

const App = () => {
  // ------
  // Variables
  const [theBoard, setTheBoard] = useState([[]])
  const [gameState, setGameState] = useState()
  const [gameID, setGameID] = useState()
  const [poos, setPoos] = useState()
  // const [post, setPost] = useState({})

  // ------
  // Functions

  // Perform API call to get new game data
  const newGame = async () => {
    const resp = await axios.post(
      'https://minesweeper-api.herokuapp.com/games',
      { difficulty: 1 }
    )
    setTheBoard(resp.data.board)
    setGameID(resp.data.id)
    setGameState(resp.data.state)
    setPoos(resp.data.mines)
  }

  // Perform API call to send check move to API
  // POST/games/{id}/check
  const checkGame = async coords => {
    const resp = await axios.post(
      'https://minesweeper-api.herokuapp.com/games/' + gameID + '/check',
      { id: gameID, row: coords[0], col: coords[1] }
    )
    setTheBoard(resp.data.board)
    setGameID(resp.data.id)
    setGameState(resp.data.state)
    setPoos(resp.data.mines)
  }

  //Post Check when left clicked
  const leftClickSetPost = coords => {
    checkGame(coords)
  }

  // Check for won or lost
  const gameWonLost = () => {
    if (gameState === 'lost') {
      alert('You stepped in it!!!')
      newGame()
    } else if (gameState === 'won') {
      alert('You WON!!!')
      newGame()
    }
  }

  //Execute on render
  useEffect(() => {
    newGame()
  }, [])

  return (
    <>
      {console.log(theBoard, gameState, gameID, poos)}
      {gameWonLost()}
      <heading>
        <h1>
          <i class="fas fa-poop"></i> Don't Step In It!{' '}
          <i class="fas fa-poop"></i>{' '}
        </h1>
      </heading>
      <main className="main-poo">
        <section className="main-section">
          <table className="the-table">
            <tbody>
              {/* <TheYard /> */}
              {theBoard.map((row, index) => {
                return (
                  <TheYard
                    handleLeftClick={leftClickSetPost}
                    key={index}
                    index={index}
                    row={row}
                  />
                )
              })}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}
export default App
