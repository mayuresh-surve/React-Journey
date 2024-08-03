# 🚀 React Learning Journey: Day 4 🚀

## Props and States

On Day 4 of my React Learning Journey, I focused on learning how to pass data to components using props and understanding how to define prop types and default props. Also, understanding how to manage state in class components and functional components using the `useState` hook. Here's a summary of what I learned:

### 1. Understanding Props

#### What are Props?

Props, short for "properties," are a mechanism for passing data from parent components to child components in React. They are read-only, meaning they cannot be modified by the child component. Props help create dynamic and reusable components by allowing you to pass different data to the same component.

#### Pass props to the child component

In the traditional way, props are passed to child components using the props object. Here's how it looks:

```jsx
function Avatar(props) {
	return (
		<div className="user-info">
			<div className="avatar">
				<img src={props.photo} alt="Profile" />
			</div>
			<div className="user-details">
				<h3 className="user-name">{props.name}</h3>
				<p className="user-email">{props.email}</p>
			</div>
		</div>
	);
}
```

In this example, the `Avatar` component receives props and accesses them using `props.propertyName`.

#### Read props inside the child component 

To make the code cleaner and more readable, we can destructure the props object directly in the function signature:

```jsx
function Avatar({ name, email, photo }) {
	return (
		<div className="user-info">
			<div className="avatar">
				<img src={photo} alt="Profile" />
			</div>
			<div className="user-details">
				<h3 className="user-name">{name}</h3>
				<p className="user-email">{email}</p>
			</div>
		</div>
	);
}
```

By destructuring the props object, we can access the properties directly without using the `props` keyword.

#### Forwarding Props with the JSX Spread Syntax

Props can also be forwarded using the JSX spread syntax, which allows us to pass all the properties of an object as props to a component:

```jsx
function Profile(props) {
	return (
		<>
			...

			<Avatar {...props} />
		</>
	);
}
```

In this example, all the properties of `props` are passed to the `Avatar` component using `{...props}`.

#### Assigning Default Props

We can define default values for props by using the `defaultProps` property on a component. This is useful when a prop might not be provided:

```jsx
  Avatar.defaultProps = {
    name: "Abby Ken",
};
```
OR

```jsx
  function Avatar({name="Abby Ken"}) {
    //...
  }
```

In this case, if no `name` prop is passed to the `Avatar` component, it will default to "Abby Ken."

#### Defining Prop Types
Using the `prop-types` library, you can specify the expected data types for props. This helps catch bugs and ensures that components receive the correct types of data:

```jsx
  import PropTypes from "prop-types";

  Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo: PropTypes.string,
  };
```
Here, `name` and `email` are required string props, while `photo` is an optional string prop.

<a href="https://imgur.com/Nx6MxYn"><img src="https://i.imgur.com/Nx6MxYn.png" title="source: imgur.com" /></a>

### 2. Managing State

#### Managing State in Class Components

In class components, state is managed using a `constructor` and the `setState` method. Let's break down a simple counter component using class syntax:

#### 1. Initializing State

State is initialized in the `constructor` of the class component. You set the initial state value by assigning an object to `this.state`.

```jsx
class CounterClass extends Component {
  constructor(props) {
    super(props);
    // Declare default state value
    this.state = {
      count: 0,
    };
  }
  ...
}
```

##### 2. Changing State

To update the state, use the `setState` method, which takes an object or a function that returns an object. This method schedules an update to the component's state and tells React to re-render the component with the updated state.

```jsx
increment = () => {
	// Use setState to change state
	this.setState((prevState) => ({
		count: prevState.count + 1,
	}));
};

decrement = () => {
	this.setState((prevState) => ({
		count: prevState.count - 1,
	}));
};
```

##### 3. Using State in JSX

You can use the state value in your JSX by referencing `this.state.propertyName`.

```jsx
render() {
  return (
    <div>
      <h2>Count: {this.state.count}</h2>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  );
}
```

#### useState Hook in Functional Components

With functional components, state management is simplified using the `useState` hook. Here's how to break down the implementation of a functional counter component:

##### 1. Declaring State

Use the `useState` hook to declare state in a functional component. This hook returns an array with two elements: the current state value and a function to update it.

```jsx
const [count, setCount] = useState(0);
```

##### 2. Changing State

To change the state, call the state updater function returned by `useState`.

```jsx
const increment = () => {
	setCount((prevCount) => prevCount + 1);
};

const decrement = () => {
	setCount((prevCount) => prevCount - 1);
};
```

##### 3. Using State in JSX

Use the state variable directly in your JSX.

```jsx
return (
	<div>
		<h2>Count: {count}</h2>
		<button onClick={increment}>Increment</button>
		<button onClick={decrement}>Decrement</button>
	</div>
);
```

**Usage in App.js:**

```jsx
// src/App.js

import React from "react";
import CounterFunction from "./CounterFunction";
import CounterClass from "./CounterClass";

function App() {
	return (
		<div>
            <CounterClass />
			<CounterFunction />
		</div>
	);
}

export default App;
```

### Key Takeaways

-   **Props** are used to pass data from a parent component to a child component. They are read-only and can be forwarded using the JSX spread syntax.
-   **State** is managed in class components using `setState` and in functional components using the `useState` hook.
-   The `useState` hook returns a state variable and a function to update it, enabling easier state handling in functional components.

<a href="https://imgur.com/64rEX7z"><img src="https://i.imgur.com/64rEX7z.png" title="source: imgur.com" /></a>
