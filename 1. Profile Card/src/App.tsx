import './App.scss'
import Badge from './components/Badge'

function App() {
  return (
    <>
      <div className='app'>
        <div className='cardContainer'>
          <img src='src/assets/image.jpg' alt='' className='image' />
          <span className='text headerText'>Igor Milosavljevic</span>
          <span className='text'>
            Junior Full Stack Developer that loves trying out new technologies
            and sinking time testing them. I love gaming, going to the gym, and
            I'm looking to start cooking and playing Guitar!
          </span>
          <Badge />
        </div>
      </div>
    </>
  )
}

export default App
