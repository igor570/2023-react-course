import { useState } from 'react'

const Form = () => {
  const [description, setDescription] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!description) return //Guard clause
    const newItem = { id: Date.now(), description, quantity, packed: false } //Storing the data from the form!
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 💖</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Add a new item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default Form
