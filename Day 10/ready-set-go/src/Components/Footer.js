import { useContext } from "react";
import { ItemsContext } from "../itemsContext";

function Footer() {
	const items = useContext(ItemsContext);

	const totalItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const percentage =
		totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

	let message;

	if (totalItems === 0) {
		message =
			"🤔 Your suitcase looks lonely. Add some items to get the party started!";
	} else if (packedItems === 0) {
		message =
			"🧐 It looks like you're just getting started. Time to pack those items!";
	} else if (percentage === 100) {
		message = "🎒 All packed and ready to rock! Time for adventure! 🚀";
	} else {
		message = `🎉 Woo-hoo! You've packed ${packedItems} out of ${totalItems} items. That's ${percentage}% of the packing party complete! 🥳`;
	}

	return (
		<footer className="footer">
			<div className="progress-bar">
				<div
					className="progress-bar-fill"
					style={{ width: `${percentage}%` }}
				></div>
			</div>
			<em>{message}</em>
		</footer>
	);
}

export default Footer;
