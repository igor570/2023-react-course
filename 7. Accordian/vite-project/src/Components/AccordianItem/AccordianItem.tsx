import { AccordianItemProps } from '../../interfaces'

const AccordianItem = ({ num, title, text, icon }: AccordianItemProps) => {
  return (
    <>
      <p className='number'>{num}</p>
      <p className='text'>{title}</p>
      <p className='icon'></p>
      <div className='content-box'>{text}</div>
    </>
  )
}

export default AccordianItem
