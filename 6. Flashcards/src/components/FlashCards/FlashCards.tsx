import { useState } from 'react'
import './FlashCards.scss'

interface FlashCardProps {
  id?: number
  question: string
  answer: string
}

const FlashCards = ({ id, question, answer }: FlashCardProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const setClick = () => {
    //Swapping booleans!
    isClicked ? setIsClicked(false) : setIsClicked(true)
  }

  return (
    <div onClick={setClick} key={id} className='flashCard'>
      {!isClicked ? question : <strong>{answer}</strong>}
    </div>
  )
}

export default FlashCards
