import { useState } from 'react'
import { Item } from './interfaces'
import './App.css'
import Form from './components/Form/Form'
import Logo from './components/Logo/Logo'
import PackingList from './components/PackingList/PackingList'
import Stats from './components/Stats/Stats'

function App() {
  const [items, setItems] = useState<Item[]>([])

  const handleAddItems = (item : Item) => {
    setItems((items) => [...items, item])
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} />
      <Stats />
    </>
  )
}

export default App
