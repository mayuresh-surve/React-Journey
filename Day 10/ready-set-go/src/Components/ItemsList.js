import { useState } from "react";
import Item from "./Items";

function ItemsList({ items, onDeleteItem, onToggleItem, OnClearList }) {
	const [sortBy, setSortBy] = useState("input");

	let sortedList;

	if (sortBy === "input") sortedList = items;
	else if (sortBy === "description") {
		sortedList = items.slice().sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === "status") {
		sortedList = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	} else {
		sortedList = items.slice();
	}

	return (
		<div className="list">
			<ul>
				{sortedList.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						key={item.id}
					/>
				))}
			</ul>
			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">SORT BY INPUT ORDER</option>
					<option value="status">SORT BY PACKED STATUS</option>
					<option value="description">SORT BY ITEM NAME</option>
				</select>
				<button onClick={OnClearList}>clear list</button>
			</div>
		</div>
	);
}

export default ItemsList;
