# 🚀 React Learning Journey: Day 4 🚀

## Exploring List Rendering and Conditional Rendering in React

Welcome to Day 5 of my React Learning Journey! Today, I delved into some fundamental concepts of React that are crucial for building dynamic and interactive applications: **rendering lists** and various techniques for **conditional rendering**. These concepts are essential for managing how components are displayed based on data and user interactions. Here’s what I learned:

### Rendering Lists

In React, rendering lists involves iterating over an array of data and creating components for each item in the array. This is commonly done using the JavaScript `map` method. Here's an example using a list of pizza items:

Given below is the list of pizzas:

```javascript
const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with Italian olive oil and rosemary",
		price: 6,
		photoName: "https://imgur.com/C3Ca4BS.png",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozzarella",
		price: 10,
		photoName: "https://imgur.com/lipmW8F.png",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "https://imgur.com/APdaPZR.png",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozzarella, mushrooms, and onion",
		price: 12,
		photoName: "https://imgur.com/dPpvWzM.png",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozzarella, and pepperoni",
		price: 15,
		photoName: "https://imgur.com/9dtZJNE.png",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
		price: 18,
		photoName: "https://imgur.com/jii9M6S.png",
	},
];
```

Pizza component is written as follows:

```javascript
function Pizza({ pizzaObj }) {
	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
			</div>
		</li>
	);
}
```

We can render list using `map` array function as:

```javascript
<ul className="pizzas">
	{pizzas.map((pizza) => (
		<Pizza pizzaObj={pizza} key={pizza.name} />
	))}
</ul>
```

<img src="https://imgur.com/EBHZKZJ.png" alt="List Rendering">

#### Key Points

-   **Iteration**: The `map` method is used to iterate over the `pizzaData` array, creating a `Pizza` component for each pizza object.
-   **Props**: Each pizza object is passed to the `Pizza` component via props for rendering.
-   **Unique Keys**: A unique `key` prop is provided to each `Pizza` component, which is crucial for helping React identify and manage components efficiently during re-renders.

### Conditional Rendering Techniques

Conditional rendering in React allows you to dynamically display elements based on certain conditions. Today, I explored several common techniques for conditional rendering:

#### 1. Conditional Rendering with `&&` Operator

The `&&` operator is used for conditional rendering when you want to display an element only if a certain condition is true.

##### Example: Footer Component

```javascript
function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="footer">
			{isOpen && (
				<p>
					We're happy to welcome you between {openHour}:00 and{" "}
					{closeHour}:00.
				</p>
			)}
		</footer>
	);
}
```

This example uses the `&&` operator to conditionally render a message if the current time is within operating hours.

<img src="https://imgur.com/vmf8N6N.png" alt="&& operator render">

#### Example: Menu Component

```javascript
function Menu() {
	const pizzas = [];

	return (
		<>
			<h1>Our Menu</h1>

			{pizzas.length > 0 && (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)}
		</>
	);
}
```

In this example, the list of pizzas is rendered only if there are items in the `pizzas` array. 

<img src="https://imgur.com/BcB1bWt.png" alt="Pizza list with &&">

### 2. Conditional Rendering with Ternary Operator

The ternary operator is useful when you have two possible outcomes based on a condition.

#### Example: Menu Component

```javascript
function Menu() {
	const pizzas = [];

	return (
		<>
			<h1>Our Menu</h1>

			{pizzas.length > 0 ? (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>
					We're still working on our menu. Please come back later :)
				</p>
			)}
		</>
	);
}
```

This example uses the ternary operator to decide whether to render the pizza list or a message indicating that the menu is being prepared.

<img src="https://imgur.com/sYw6321.png" alt="Ternary conditional rendering">

#### Example: Footer Component

```javascript
function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<footer className="footer">
			{isOpen ? (
				<p>
					We're open from {openHour}:00 to {closeHour}:00. Come visit
					us or order online.
				</p>
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and{" "}
					{closeHour}:00.
				</p>
			)}
		</footer>
	);
}
```

In this example, the ternary operator is used to render different messages depending on whether the restaurant is open.

<img src="https://imgur.com/D7N75C4.png">

### 3. Conditional Rendering with Multiple Returns

Using multiple return statements allows you to exit a component early based on a condition.

#### Example: Footer Component

```javascript
function Footer() {
	const hour = new Date().getHours();
	const openHour = 13;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	if (!isOpen) {
		return <h1>CLOSED</h1>;
	}

	return (
		<footer className="footer">
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us
				or order online.
			</p>
		</footer>
	);
}
```

Here, if the restaurant is closed, the function returns early with a `CLOSED` message, otherwise, it continues to render the open hours message.

<img src="https://imgur.com/kfuaWZp.png">

#### Example: Pizza Component

```javascript
function Pizza({ pizzaObj }) {
	if (pizzaObj.soldOut) {
		return null;
	}

	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
			</div>
		</li>
	);
}
```

<img src="https://imgur.com/H6nbrV0.png">

In this example, if a pizza is sold out, the component returns `null`, which means nothing is rendered for that pizza.

### Key Takeaways

-   **Efficiency**: Conditional rendering allows for efficient rendering of components, ensuring only the necessary elements are displayed based on the current state or data.
-   **Flexibility**: Each technique provides different levels of flexibility and readability, making it easier to choose the most appropriate method for your specific use case.

### Conclusion

Today’s learning journey has equipped me with the skills to manage list rendering and conditional rendering effectively in React. These techniques form the backbone of creating interactive and data-driven user interfaces. I look forward to applying these concepts as I continue my React learning journey.

Stay tuned for more updates as I dive deeper into React!
