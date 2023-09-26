import Item from '../Item/Item'
import { PackingListProp } from '../../interfaces'

const PackingList = ({ items }: PackingListProp) => {
  return (
    <ul className='list'>
      {items.map((item) => (
        //Passing object as props requires map function to iterate through the array
        <Item
          key={item.id}
          description={item.description}
          quantity={item.quantity}
          packed={item.packed}
        />
      ))}
    </ul>
  )
}

export default PackingList