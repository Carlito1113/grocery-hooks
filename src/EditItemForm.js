import React from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@material-ui/core'

const EditItemForm = ({ editItem, id, item, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(item)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      editItem(id, value)
      reset()
      toggleEditForm()
    }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  )
}

export default EditItemForm
