import { useMemo } from "react";
import { StatsProp } from "../../interfaces";

const Stats = ({ items } : StatsProp) => {
  //useMemo Happens after the Render. 
  //Stored in RAM and should be used only for expensive calculations
  //It will not render again if the value has not changed
  const packagedItems = useMemo(() => {
    //Guard clause
    if (items.length === 0) {
      return String(0);
    }
    //Storing all of the items that are marked packed from our item's state variable
    const packed =  items.filter(i => i.packed);
    return ((packed.length / items.length) * 100).toFixed(0)
  },[items])

  return (
    <footer className='stats'>
      {items.length === 0 
        ? <em>Start adding some items!</em>
        : <em>You have {items.length} items on your list, and you have packed {`${packagedItems}%`}</em>
      }
    </footer>
  )
}

export default Stats
