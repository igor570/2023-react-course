import './App.css'
import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const [step, setStep] = useState<number>(1)

  const handleStepDecrement = () => {
    if (step > 1 && step <= 3) {
      setStep((prevStep) => prevStep - 1)
    }
  }

  const handleStepIncrement = () => {
    if (step > 0 && step < 3) {
      setStep((prevStep) => prevStep + 1)
    }
  }

  return (
    <>
      <div className='steps'>
        <div className='numbers'>
          <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
        <p className='message'>
          Step {step}: {messages[step - 1]}
        </p>
        <div className='buttons'>
          <button
            onClick={handleStepDecrement}
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
          >
            Previous
          </button>
          <button
            onClick={handleStepIncrement}
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
