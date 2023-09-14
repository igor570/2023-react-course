import './FoodItem.scss'

type FoodItemProps = {
  itemName?: string
  ingredients?: string
  price: number
  photo: string
  soldOut: boolean
}

const FoodItem = ({
  itemName,
  ingredients,
  price,
  photo,
  soldOut,
}: FoodItemProps) => {
  return (
    <>
      <div className='foodItemContainer'>
        <div className='foodName'>{itemName}</div>
        <div className='ingredients'>{ingredients}</div>
        <div className={`price ${!soldOut ? null : 'priceSoldOut'}`}>
          {!soldOut ? '£' + price : 'Sold Out!'}
        </div>
        <img src={photo} alt='pizzas' className='img' />
      </div>
    </>
  )
}

export default FoodItem
