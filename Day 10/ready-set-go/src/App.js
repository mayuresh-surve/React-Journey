import { useState, useReducer } from "react";
import "./App.css";
import Logo from "./Components/Logo";
import AddItemForm from "./Components/AddItemsForm";
import ItemsList from "./Components/ItemsList";
import Footer from "./Components/Footer";
import itemsReducer from "./ItemsReducer";

function App() {
	// const [items, setItems] = useState([]);

	const [items, dispatch] = useReducer(itemsReducer, []);

	function handleAddItem(item) {
		// setItems((items) => [...items, item]);
		dispatch({ type: "add_item", item });
	}

	function handleDeleteItem(id) {
		// setItems((items) => items.filter((item) => item.id !== id));
		dispatch({type: "delete_item", id });
	}

	function handleToggleItem(id) {
		// setItems((items) =>
		// 	items.map((item) =>
		// 		item.id === id ? { ...item, packed: !item.packed } : item
		// 	)
		// );
		dispatch({type: "toggle_item", id});
	}

	function handleClearList() {
		const confirm = window.confirm(
			"Are you sure you want to clear the list?"
		);

		if (confirm) dispatch({ type: "clear_items" });
			// setItems((items) => []);
	}

	return (
		<div className="app">
			<Logo />
			<AddItemForm onAddItem={handleAddItem} />
			<ItemsList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				OnClearList={handleClearList}
			/>
			<Footer items={items} />
		</div>
	);
}

export default App;
