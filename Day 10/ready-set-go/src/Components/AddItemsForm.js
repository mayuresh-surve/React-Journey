import { useState, useContext } from "react";
import { ItemsDispatchContext } from "../itemsContext";

function AddItemForm() {
	const [quantity, setQuantity] = useState(1);
	const [name, setName] = useState("");

	const dispatch = useContext(ItemsDispatchContext);

	function onFormSubmit(e) {
		e.preventDefault();

		const item = {
			quantity: quantity,
			name: name,
			id: Date.now(),
			packed: false,
		};

		// onAddItem(item);
		dispatch({ type: "add_item", item });

		setQuantity(1);
		setName("");
	}

	return (
		<form className="add-form" onSubmit={onFormSubmit}>
			<h3>What do you need to pack for your trip? 🧳</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
					<option value={i} key={i}>
						{i}
					</option>
				))}
			</select>
			<input
				placeholder="Item name..."
				value={name}
				type="text"
				onChange={(e) => setName(e.target.value)}
			></input>
			<button>Add</button>
		</form>
	);
}

export default AddItemForm;
