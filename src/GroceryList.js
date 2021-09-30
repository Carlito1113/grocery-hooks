import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Item from './Item'

const GroceryList = ({ groceries, removeItem, toggleItem, editItem }) => {
  if (groceries.length) {
    return (
      <Paper>
        <List>
          {groceries.map((grocery, index) => (
            <>
              <Item
                id={grocery.id}
                item={grocery.item}
                key={grocery.id}
                completed={grocery.completed}
                removeItem={removeItem}
                toggleItem={toggleItem}
                editItem={editItem}
              />
              {index < groceries.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    )
  } 
  return null
}

export default GroceryList
