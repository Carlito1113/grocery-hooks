import React, { useEffect } from 'react'
import useItemState from './hooks/useItemState'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import GroceryList from './GroceryList'
import GroceryForm from './GroceryForm'
import { v4 as uuidv4 } from 'uuid'

const GroceryApp = () => {
  const initialList = JSON.parse(window.localStorage.getItem('list') || '[]')

  const { list, addList, removeItem, toggleItem, editItem } = useItemState(
    initialList
  )

  useEffect(() => {
    window.localStorage.setItem('list', JSON.stringify(list))
  }, [list])

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
