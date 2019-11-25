import React from 'react'
import PooEmoji from './images/Poo.png'

const TheCell = props => {
  console.log(props)

  const handleClick = coordsID => {
    const coords = coordsID.split(',')
    props.handleLeftClick(coords)
  }

  const handleOnContextMenu = event => {
    event.preventDefault()
  }

  let cellClassName = 'td-cell '
  let cellValue = ''
  let cellCoords = props.rowIndex.toString() + ',' + props.index
  // Set classes of cell elements based on returned cell value, set cell value
  if (props.cell === ' ') {
    cellClassName = cellClassName + ' unrevealed-cell'
  } else if (props.cell === '_') {
    cellClassName = cellClassName + ' empty-revealed-cell'
  } else if (props.cell === '*') {
    cellClassName = cellClassName + ' poo-cell'
    // cellValue = '<i class="fas fa-poop"></i>'
    cellValue = '💣'
  } else if (props.cell === 'F') {
    cellClassName = cellClassName + ' flagged-cell'
  } else if (props.cell === '@') {
    cellClassName = cellClassName + ' flagged-poo-cell'
    cellValue = '@'
  } else {
    cellClassName = cellClassName + ' revealed-cell-' + props.cell
    cellValue = props.cell
  }
  return (
    <td>
      <div
        className={cellClassName}
        id={cellCoords}
        onClick={e => handleClick(e.target.id)}
        onContextMenu={e => handleOnContextMenu(e.target)}
      >
        {/* Value to be displayed */}
        {cellValue}
        {/* <i class="fas fa-poop"></i> */}
        {/* <img src={PooEmoji} class="stepped-in-it" alt={cellValue} /> */}
      </div>
    </td>
  )
}

export default TheCell
