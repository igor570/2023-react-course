import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      The Happy React Pizza Co. ❤️ {new Date().toLocaleTimeString()}
    </footer>
  )
}

export default Footer
