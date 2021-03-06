/**
 * Created by akaimo on 2016/08/27.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../actions'

let AddTodo = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>

      <button onClick={e => {
        e.preventDefault()
        dispatch(deleteTodo())
        input.value = ''
      }}>
        Delete
      </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
