import React from 'react'
import Cell from './Cell'
import './Cells.css'

interface CellsProps {
  cells: number[]
}

interface CellsState {}

export default class Cells extends React.Component<CellsProps, CellsState> {
  render () {
    return (
      <div className="cells">
        {
          this.cellGroups().map((cells: number[], groupIndex: number) => {
            return (
              <div key={groupIndex} className="cells-row">
                {
                  cells.map((cell: number, cellIndex: number) => {
                    return <Cell key={groupIndex * 4 + cellIndex} value={cell} />
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }

  cellGroups () {
    let groups : any[] = []

    this.props.cells.forEach((value: number, index: number) => {
      let groupIndex : number = Math.floor(index / 4)
      groups[groupIndex] = groups[groupIndex] || []
      groups[groupIndex].push(value)
    })

    return groups
  }
}