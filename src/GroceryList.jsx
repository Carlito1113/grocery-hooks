import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Item from './Item'

const GroceryList = ({ groceries, removeItem, toggleItem }) => {
  return (
    <Paper>
      <List>
        {groceries.map(grocery => (
          <Item
            id={grocery.id}
            item={grocery.item}
            key={grocery.id}
            completed={grocery.completed}
            removeItem={removeItem}
            toggleItem={toggleItem}
          />
        ))}
      </List>
    </Paper>
  )
}

export default GroceryList
