import React from 'react'

interface FlashCardProps {
  id?: number
  question: string
  answer: string
}

const FlashCards = ({ id, question, answer }: FlashCardProps) => {
  //TODO: Manage state in this component to render either question or answer depending on click (swapping boolean)
  return (
    <div key={id}>
      {question} {answer}
    </div>
  )
}

export default FlashCards
