import './App.css'
import { useState } from 'react'

const oneDay = 60 * 1000 * 1440

function App() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  } //or as const

  const [step, setStep] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())

  const incrementStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const decrementStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1)
    }
  }

  const incrementCount = () => {
    if (step > 0) {
      setCount((prevCount) => prevCount + step)
      setDate((d) => new Date(d.getTime() + oneDay * step))
    } else {
      setCount((prevCount) => prevCount + 1)
      //Read up on Class Object being passed by reference and why this works
      // setDate((date) => new Date(date.setDate(date.getDate() + 1))) - This is bad practice because its mutating the class object in state
      setDate((d) => new Date(d.getTime() + oneDay))
    }
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
    }
    return
  }

  console.log(date)

  return (
    <div className='app'>
      <div className='Container'>
        <button className='btn' onClick={decrementStep}>
          -
        </button>
        <div style={{ color: 'white' }}>Step: {step}</div>
        <button className='btn' onClick={incrementStep}>
          +
        </button>
      </div>

      <div className='Container'>
        <button className='btn' onClick={decrementCount}>
          -
        </button>
        <div style={{ color: 'white' }}>Count: {count}</div>
        <button className='btn' onClick={incrementCount}>
          +
        </button>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '3rem',
        }}
      >
        {date.toLocaleDateString('en-GB', options)}
      </div>

      <button
        className='btn'
        onClick={() => {
          setCount(0)
          setStep(0)
        }}
      >
        ?
      </button>
    </div>
  )
}

export default App
