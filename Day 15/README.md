# 🚀 React Learning Journey: Day 15 🚀

## Building a Tip Calculator with React

Another day, another project! Today, I dove into building a Tip Calculator using the knowledge I've gathered so far in my React learning journey. Although this project was small, it provided a great opportunity to refine my understanding of React’s core concepts, specifically focusing on keeping components pure, efficiently using the Context API, and leveraging reducers for state management.

### Keeping Components Pure

One of my primary goals with this project was to maintain pure components. A pure component is a component that renders the same output for the same props and state, without causing any side effects. This predictability makes debugging easier and ensures that my components are more reusable and easier to test.

Here’s one of the example how I kept the `BillInput` component pure:

```javascript
function BillInput() {
	const state = useContext(TipCalculatorStateContext);
	const dispatch = useContext(TipCalculatorDispatchContext);

	return (
		<div>
			<label>How much was the bill?</label>
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
			/>
		</div>
	);
}
```

This component is solely responsible for capturing the bill amount and doesn't concern itself with tip calculation or other logic. By doing so, I ensured that `BillInput` is predictable and reusable in different contexts.

### Using the Children Prop Effectively

Another key takeaway from this project was how I used the `children` prop to pass data between components. The `children` prop in React allows me to pass any node as a child of a component, which I utilized to keep my components flexible and reusable.

For example, in the `SelectPercentage` component, I used the `children` prop to customize the label text:

```javascript
function SelectPercentage({ children, actionType }) {
	const state = useContext(TipCalculatorStateContext);
	const dispatch = useContext(TipCalculatorDispatchContext);

	const percentage =
		actionType === "set_percentage1"
			? state.percentage1
			: state.percentage2;

	return (
		<div>
			<label>{children}</label>
			<select
				value={percentage}
				onChange={(e) =>
					dispatch({
						type: actionType,
						payload: Number(e.target.value),
					})
				}
			>
				<option value="0">Dissatisfied (0%)</option>
				<option value="5">It was okay (5%)</option>
				<option value="10">It was good (10%)</option>
				<option value="20">Absolutely amazing! (20%)</option>
			</select>
		</div>
	);
}
```

By passing different labels as children, I reused the `SelectPercentage` component for both the user’s and their friend’s tip percentage inputs. This approach kept the code DRY and made it easier to manage.

### Efficient State Management with Context API

Managing multiple pieces of state efficiently can be challenging in a React application, especially as it scales. To tackle this, I utilized the Context API to share state across multiple components without the need to pass props down through every level of the component tree.

Here’s how I set up the Context API:

```javascript
// Create contexts
const TipCalculatorStateContext = createContext();
const TipCalculatorDispatchContext = createContext();

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
```

This setup allowed me to centralize state management and make the state accessible across the entire component tree. The `TipCalculatorProvider` wraps the `TipCalculator` component, ensuring that all child components can easily access and update the shared state.

### Updating State with Reducer

Finally, I implemented a reducer to manage the state updates. Using a reducer not only made the state transitions more predictable but also allowed me to handle more complex state logic with ease.

Here’s the reducer function:

```javascript
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
```

Each action in the reducer is responsible for updating a specific part of the state, making the code easier to reason about. For instance, the `set_bill` action updates the bill amount, while the `reset` action clears all fields.

### Conclusion

This project, though small, was a valuable exercise in reinforcing the concepts I've learned. By focusing on pure components, leveraging the `children` prop, and efficiently managing state with the Context API and a reducer, I was able to create a clean and maintainable React application. As I continue my React learning journey, these foundational skills will undoubtedly play a crucial role in building more complex and scalable applications.

Looking forward to the next challenge!
