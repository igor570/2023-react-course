//Interfaces have a different syntax to objects
//While it is the blueprint of an object, an interface is not an object.
export interface Item {
  id: number
  description: string
  quantity: number
  packed: boolean
}

export interface PackingListProp {
  items: Item[],
  //Interface[' '] is dynamic
  // Function Contract
  onRemoveItem: (id: Item['id']) => void,
  onToggleItems: (id: Item['id']) => void;
}


export interface FormProp {
  items: Item[]
}

export interface ToggleItemProp {
  items: Item[]

}

export interface StatsProp {
  items: Item[]
}
