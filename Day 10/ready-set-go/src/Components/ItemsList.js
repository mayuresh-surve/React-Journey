import { useState, useContext } from "react";
import Item from "./Items";
import { ItemsContext, ItemsDispatchContext } from "../itemsContext";

function ItemsList() {
	const [sortBy, setSortBy] = useState("input");
	const items = useContext(ItemsContext);
	const dispatch = useContext(ItemsDispatchContext);

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

	function onClearList() {
		const confirm = window.confirm(
			"Are you sure you want to clear the list?"
		);

		if (confirm) dispatch({ type: "clear_items" });
	}

	return (
		<div className="list">
			<ul>
				{sortedList.map((item) => (
					<Item item={item} key={item.id} />
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
				<button onClick={onClearList}>clear list</button>
			</div>
		</div>
	);
}

export default ItemsList;
