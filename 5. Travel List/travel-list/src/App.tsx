import './App.css'
import Form from './components/Form/Form'
import Logo from './components/Logo/Logo'
import PackingList from './components/PackingList/PackingList'
import Stats from './components/Stats/Stats'

function App() {
  const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ]
  return (
    <>
      <Logo />
      <Form />
      <PackingList items={initialItems} />
      <Stats />
    </>
  )
}

export default App
