import Item from "../Item/Item";
import { PackingListProp } from "../../interfaces";
import { useState } from "react";

const PackingList = ({
  items,
  onRemoveItem,
  onToggleItems,
  onClearItems,
}: PackingListProp) => {
  const [sortBy, setSortBy] = useState("input");

  //Handling the sorting of items
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <ul className="list">
        {sortedItems.map((item) => (
          //Passing object as props requires map function to iterate through the array
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onRemoveItem={onRemoveItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions list">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </>
  );
};

export default PackingList;
