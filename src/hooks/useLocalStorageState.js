import { useState, useEffect } from 'react'

function UseLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localstorage (or default)
  const [state, setState] = useState(() => {
    let val

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (error) {
      val = defaultVal
    }
    return val
  })

  // useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  
  return [state, setState]
}

export default UseLocalStorageState
