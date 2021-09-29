import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'

const GroceryForm = ({ addList }) => {
  const [value, handleChange, reset] = useInputState('')

  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault()
          addList(value)
          reset()
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  )
}

export default GroceryForm
