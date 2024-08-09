import { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo";
import AddItemForm from "./Components/AddItemsForm";
import ItemsList from "./Components/ItemsList";
import Footer from "./Components/Footer";

function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		const confirm = window.confirm(
			"Are you sure you want to clear the list?"
		);

		if (confirm) setItems((items) => []);
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
