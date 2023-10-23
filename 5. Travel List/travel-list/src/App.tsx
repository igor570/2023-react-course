import { useState } from "react";
import { Item } from "./interfaces";
import "./App.css";
import { PackingListProp } from "./interfaces";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItems = (item: Item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem: PackingListProp["onRemoveItem"] = (id) => {
    //Make a new array with all the ids NOT found. The id that's found will be deleted.
    //Standard way of deleting elements from arrays
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem: PackingListProp["onToggleItems"] = (id) => {
    //Toggling the Packed state by updating the packed value in state object
    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems: PackingListProp["onClearItems"] = () => {
    setItems([]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
