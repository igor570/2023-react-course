interface ItemProps {
  id: number
  description: string
  quantity: number
  packed: boolean
  onRemoveItem: (id: number) => void;
}

const Item = ({ id, description, quantity, packed, onRemoveItem }: ItemProps) => {
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {description} {quantity}
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  )
}

export default Item
