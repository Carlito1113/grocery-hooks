import React from 'react'
import useItemState from './hooks/useItemState'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import GroceryList from './GroceryList'
import GroceryForm from './GroceryForm'

const GroceryApp = () => {
  const initialList = [{ id: 1, item: 'Kefir', completed: false }]

  const { list, addList, removeItem, toggleItem, editItem } = useItemState(
    initialList
  )

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
          <GroceryList
            groceries={list}
            removeItem={removeItem}
            toggleItem={toggleItem}
            editItem={editItem}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroceryApp
