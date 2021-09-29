import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function Item({ item, completed, removeItem, toggleItem, id }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleItem(id)} />
      <ListItemText
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {item}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeItem(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Item
