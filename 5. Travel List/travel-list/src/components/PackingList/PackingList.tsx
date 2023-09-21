import Item from '../Item/Item'

const PackingList = () => {
  const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ]
  return (
    <ul className='list'>
      {initialItems.map((items) => (
        //Passing object as props requires map function to iterate through the array
        <Item
          key={items.id}
          description={items.description}
          quantity={items.quantity}
          packed={items.packed}
        />
      ))}
    </ul>
  )
}

export default PackingList
