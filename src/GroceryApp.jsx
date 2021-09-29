import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import GroceryList from './GroceryList'
import GroceryForm from './GroceryForm'
import { v4 as uuidv4 } from 'uuid';

const GroceryApp = () => {
  const initialList = [
    { id: 1, item: 'Kefir', completed: false },
    { id: 2, item: 'Popcorners', completed: false },
    { id: 3, item: 'Face wash', completed: false },
  ]

  const [list, setList] = useState(initialList)

  const addList = newListText => {
    setList([...list, { id: uuidv4(), item: newListText, completed: false }])
  }

  const removeItem = itemId => {
    // filter out removed item
    const updatedList = list.filter(item => item.id !== itemId)
    // Call setList with new list array
    setList(updatedList)
  }

  const toggleItem = (itemId) => {
    const updatedItems = list.map(item => item.id === itemId ? {...item, completed: !item.completed} : item)
    setList(updatedItems)
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '6vh' }}>
        <Toolbar>
          <Typography color="inherit"> Grocery list with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <GroceryForm addList={addList} />
          <GroceryList groceries={list} removeItem={removeItem} toggleItem={toggleItem} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroceryApp
