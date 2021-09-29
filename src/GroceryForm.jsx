import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'

const GroceryForm = ({ addList }) => {
  const [value, handleChange, reset] = useInputState('')

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          addList(value)
          reset()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Item"
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default GroceryForm
