import React from 'react'
import TheCell from './TheCell'

const TheYard = props => {
  // Pass coordinates to parent on click
  const handleLeftClick = coords => {
    props.handleLeftClick(coords)
  }
  return (
    <>
      {/* <i class="fas fa-poop"></i> */}
      <tr className={props.index}>
        {props.row.map((cell, index) => {
          return (
            <TheCell
              key={index}
              index={index}
              cell={cell}
              rowIndex={props.index}
              // handleLeftClick={() => handleLeftClick()}
              handleLeftClick={handleLeftClick}
            />
          )
        })}
      </tr>
    </>
  )
}

export default TheYard
