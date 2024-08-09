function Item({ item, onToggleItem, onDeleteItem }) {
	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			></input>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.name}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

export default Item;