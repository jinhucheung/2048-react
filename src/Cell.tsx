import React from 'react'
import './Cell.css'

interface CellProps {
  value: number
}

interface CellState {}

export default class Cell extends React.Component<CellProps, CellState> {
  render () {
    return (
      <div className={`cell cell-${this.props.value}`}>
        {this.props.value}
      </div>
    )
  }
}