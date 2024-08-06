import "./App.css";
import { useState } from "react";

function App() {
	const [show2, setShow2] = useState(true);

	return (
		<>
			<div className="container">
				<Counter />
				{show2 && <Counter />}
			</div>
			<label >
				<input
					type="checkbox"
					checked={show2}
					onChange={(e) => {
						setShow2(e.target.checked);
					}}
				/>{" "}
				Render counter 2
			</label>
		</>
	);
}

function Counter() {
	const [value, setValue] = useState(0);

	function handleIncrement() {
		setValue(value + 1);
	}

	function handleDecrement() {
		if (value > 0) setValue(value - 1);
	}

	return (
		<div className="counter">
			<h2>{value}</h2>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
}

export default App;
