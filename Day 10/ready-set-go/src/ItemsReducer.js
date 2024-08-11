export default function itemsReducer(items, action) {
	switch (action.type) {
		case "add_item": {
			return [...items, action.item];
		}
		case "delete_item": {
			return items.filter((item) => item.id !== action.id);
		}
		case "toggle_item": {
			return items.map((item) =>
				item.id === action.id ? { ...item, packed: !item.packed } : item
			);
		}
		case "clear_items": {
            return []
		}
		default:
			throw new Error("Unknown action" + action.type);
	}
}
