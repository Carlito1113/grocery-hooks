import useLocalStorageState from './useLocalStorageState'
import { v4 as uuidv4 } from 'uuid'

export default initialList => {
  const [list, setList] = useLocalStorageState('list' ,initialList)

  return {
    list,
    addList: newListText => {
      setList([...list, { id: uuidv4(), item: newListText, completed: false }])
    },
    removeItem: itemId => {
      // filter out removed item
      const updatedList = list.filter(item => item.id !== itemId)
      // Call setList with new list array
      setList(updatedList)
    },
    toggleItem: itemId => {
      const updatedItems = list.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
      setList(updatedItems)
    },
    editItem: (itemId, newItem) => {
      const updatedItems = list.map(item =>
        item.id === itemId ? { ...item, item: newItem } : item
      )
      setList(updatedItems)
    },
  }
}
