import React, { useReducer, createContext, useContext } from "react";
import "./App.css";

// Create contexts
const TipCalculatorStateContext = createContext();
const TipCalculatorDispatchContext = createContext();

// Tip calculator reducer function
function tipCalculatorReducer(state, action) {
	switch (action.type) {
		case "set_bill":
			return { ...state, bill: action.payload };
		case "set_percentage1":
			return { ...state, percentage1: action.payload };
		case "set_percentage2":
			return { ...state, percentage2: action.payload };
		case "reset":
			return { bill: "", percentage1: 0, percentage2: 0 };
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
}

// Context provider component
function TipCalculatorProvider({ children }) {
	const [state, dispatch] = useReducer(tipCalculatorReducer, {
		bill: "",
		percentage1: 0,
		percentage2: 0,
	});

	return (
		<TipCalculatorStateContext.Provider value={state}>
			<TipCalculatorDispatchContext.Provider value={dispatch}>
				{children}
			</TipCalculatorDispatchContext.Provider>
		</TipCalculatorStateContext.Provider>
	);
}

export default function App() {
	return (
		<TipCalculatorProvider>
			<div className="container">
				<h1 className="heading">Tip Calculator</h1>
				<TipCalculator />
			</div>
		</TipCalculatorProvider>
	);
}

function TipCalculator() {
	const state = useContext(TipCalculatorStateContext);
	const dispatch = useContext(TipCalculatorDispatchContext);

	const { bill, percentage1, percentage2 } = state;
	const tip = bill * ((percentage1 + percentage2) / 2 / 100);

	function handleReset() {
		dispatch({ type: "reset" });
	}

	return (
		<div>
			<BillInput />
			<SelectPercentage
				percentage={percentage1}
				actionType="set_percentage1"
			>
				How did you like the service?
			</SelectPercentage>
			<SelectPercentage
				percentage={percentage2}
				actionType="set_percentage2"
			>
				How did your friend like the service?
			</SelectPercentage>

			{bill > 0 && (
				<>
					<Output bill={bill} tip={tip} />
				</>
			)}
			<Reset onReset={handleReset} isDisabled={bill > 0 ? false : true} />
		</div>
	);
}

function BillInput() {
	const state = useContext(TipCalculatorStateContext);
	const dispatch = useContext(TipCalculatorDispatchContext);

	return (
		<div>
			<label className="label">How much was the bill?</label>
			<input
				type="text"
				placeholder="Bill value"
				value={state.bill}
				onChange={(e) =>
					dispatch({
						type: "set_bill",
						payload: Number(e.target.value),
					})
				}
				className="input"
			/>
		</div>
	);
}

function SelectPercentage({ children, actionType }) {
	const state = useContext(TipCalculatorStateContext);
	const dispatch = useContext(TipCalculatorDispatchContext);

	const percentage =
		actionType === "set_percentage1"
			? state.percentage1
			: state.percentage2;

	return (
		<div>
			<label className="label">{children}</label>
			<select
				value={percentage}
				onChange={(e) =>
					dispatch({
						type: actionType,
						payload: Number(e.target.value),
					})
				}
				className="select"
			>
				<option value="0">Dissatisfied (0%)</option>
				<option value="5">It was okay (5%)</option>
				<option value="10">It was good (10%)</option>
				<option value="20">Absolutely amazing! (20%)</option>
			</select>
		</div>
	);
}

function Output({ bill, tip }) {
	return (
		<h3 className="output">
			You pay ${bill + tip} (${bill} + ${tip} tip)
		</h3>
	);
}

function Reset({ onReset, isDisabled }) {
	return (
		<button
			disabled={isDisabled}
			onClick={onReset}
			className="reset-button"
		>
			Reset
		</button>
	);
}
