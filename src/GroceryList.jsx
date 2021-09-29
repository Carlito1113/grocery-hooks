import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core'

const GroceryList = ({ groceries }) => {
  return (
    <Paper>
      <List>
        {groceries.map(grocery => (
          <>
            <ListItem>
              <ListItemText>{grocery.item}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default GroceryList
