interface ItemProps {
  id?: number
  description: string
  quantity: number
  packed: boolean
}

const Item = ({ id, description, quantity, packed }: ItemProps) => {
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {description} {quantity}
      </span>
      <button>❌</button>
    </li>
  )
}

export default Item
