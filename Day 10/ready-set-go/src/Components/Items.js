import { useContext } from "react";
import { ItemsDispatchContext } from "../itemsContext";

function Item({ item, onToggleItem, onDeleteItem }) {
	const dispatch = useContext(ItemsDispatchContext);
	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				onChange={() => dispatch({type: "toggle_item", id: item.id})}
			></input>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.name}
			</span>
			<button onClick={() => dispatch({type: "delete_item", id: item.id})}>❌</button>
		</li>
	);
}

export default Item;