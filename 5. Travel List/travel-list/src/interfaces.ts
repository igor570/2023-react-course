export interface Item {
  id: number
  description: string
  quantity: number
  packed: boolean
}

export interface PackingListProp {
  items: Item[]
}

export interface FormProp {
  items: Item[]
}
