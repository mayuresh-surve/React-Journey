import "./App.css";
import { useState } from "react";

function App() {
	return (
		<div className="container">
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	const addDaysToDate = (date, days) => {
		const result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	};

	const incrementCount = () => {
		setCount((s) => s + step);
		setDate(addDaysToDate(new Date(), count));
	};

	const decrementCount = () => {
		setCount((s) => s - step);
		setDate(addDaysToDate(new Date(), count));
	};

	const incrementStep = () => {
		setStep((s) => s + 1);
	};

	const decrementStep = () => {
		if(step > 1) setStep((s) => s - 1);
	};

	return (
		<>
			<>
				<Title date={date.toDateString()} count={count} />
				<Step
					step={step}
					incrementStep={incrementStep}
					decrementStep={decrementStep}
				/>
				<Count
					count={count}
					incrementCount={incrementCount}
					decrementCount={decrementCount}
				/>
			</>
		</>
	);
}

function Title({ date, count }) {
	let message;
	if (count < 0) {
		message = `${Math.abs(count)} days before today was ${date}`;
	} else if (count > 0) {
		message = `${count} days from today is ${date}`;
	} else {
		message = `Today is ${date}`;
	}
	return <h1>{message}</h1>;
}

function Step({ step, incrementStep, decrementStep }) {
	return (
		<div>
			<p>Step: {step}</p>
			<button onClick={incrementStep}>+</button>
			<button onClick={decrementStep}>-</button>
		</div>
	);
}

function Count({ count, incrementCount, decrementCount }) {
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={incrementCount}>+</button>
			<button onClick={decrementCount}>-</button>
		</div>
	);
}

export default App;
