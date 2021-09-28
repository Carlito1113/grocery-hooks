import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import GroceryList from './GroceryList'

const GroceryApp = () => {
  const initialList = [
    { id: 1, item: 'Kefir', completed: false },
    { id: 2, item: 'Popcorners', completed: false },
    { id: 3, item: 'Face wash', completed: false },
  ]
  const [list, setList] = useState(initialList)

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
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit"> Grocery list with hooks</Typography>
        </Toolbar>
      </AppBar>
      <GroceryList groceries={list} />
    </Paper>
  )
}

export default GroceryApp
