import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

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
