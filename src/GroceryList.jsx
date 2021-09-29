import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Item from './Item'

const GroceryList = ({ groceries }) => {
  return (
    <Paper>
      <List>
        {groceries.map(grocery => (
          <>
            <Item
              item={grocery.item}
              key={grocery.id}
              completed={grocery.completed}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default GroceryList
