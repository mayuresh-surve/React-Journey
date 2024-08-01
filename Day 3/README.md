# 🚀 React Learning Journey: Day 3 🚀

On Day 3 of my React Learning Journey, I focused on understanding the basics of JSX, the differences between JSX and HTML, and how to create and use both functional and class components in React. Here's a summary of what I learned:

### **1. Understanding JSX**

#### **What is JSX?**

-   **JavaScript XML (JSX):** JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes writing React components more intuitive by allowing you to structure the UI components using HTML-like syntax.

#### **Syntax and Usage**

-   **Embedding Expressions:**

    -   You can embed any JavaScript expression within curly braces `{}` in JSX.

    ```jsx
    const name = "World";
    const element = <h1>Hello, {name}!</h1>;
    ```

-   **Children:**
    -   JSX elements can contain children, including text, other elements, or a combination of both.
    ```jsx
    const element = (
    	<div>
    		<h1>Hello, World!</h1>
    		<p>This is a paragraph.</p>
    	</div>
    );
    ```

#### **Differences Between JSX and HTML**

-   **Attribute Naming:**

    -   JSX uses camelCase for attribute names (e.g., `className` instead of `class`, `onClick` instead of `onclick`).

-   **Self-Closing Tags:**

    -   JSX requires self-closing tags for elements without children, such as `<img />` or `<input />`.

### **2. Components**

#### **What are Components?**

-   **Building Blocks:** Components are the building blocks of a React application. They allow you to split the UI into reusable and independent pieces.

-   **Types of Components:** There are two main types of components in React: Functional Components and Class Components.

##### **Functional Components**

-   **Definition:**

    -   Functional components are JavaScript functions that return JSX.
    -   They can accept props as arguments.

-   **Example:**

    ```jsx
    function Welcome(props) {
    	return <h1>Hello, {props.name}!</h1>;
    }
    ```

##### **Class Components**

-   **Definition:**

    -   Class components are ES6 classes that extend `React.Component`.
    -   They have a `render()` method that returns JSX.

-   **Example:**

    ```jsx
    class Welcome extends React.Component {
    	render() {
    		return <h1>Hello, {this.props.name}!</h1>;
    	}
    }
    ```

-   **State and Lifecycle:**
    -   Class components can manage their own state and lifecycle methods.

### **3. Hands-On: Create Your First React Component**

#### **Step 1: Create a Functional Component**
1. **Define the functional component:**

    ```jsx
    // src/Welcome.js

    import React from "react";

    function Welcome(props) {
    	return <h1>Hello, {props.name}!</h1>;
    }

    export default Welcome;
    ```

2. **Use the component in `App.js`:**

    ```jsx
    // src/App.js

    import React from "react";
    import Welcome from "./Welcome";

    function App() {
    	return (
    		<div>
    			<Welcome name="Alice" />
    			<Welcome name="Bob" />
    			<Welcome name="Charlie" />
    		</div>
    	);
    }

    export default App;
    ```

3. **Result:**

    <img src="https://i.imgur.com/B7Fel8R.png" title="source: imgur.com" alt="Output"/>

#### **Step 2: Create a Class Component**

1. **Create a new file:** In the `src` directory, create a new file called `Greeting.js`.

2. **Define the class component:**

    ```jsx
    // src/Greeting.js

    import React, { Component } from "react";

    class Greeting extends Component {
    	render() {
    		return <h1>Welcome, {this.props.name}!</h1>;
    	}
    }

    export default Greeting;
    ```

3. **Use the component in `App.js`:**

    ```jsx
    // src/App.js

    import React from "react";
    import Greeting from "./Greeting";

    function App() {
    	return (
    		<div>
    			<Greeting name="Diana" />
    			<Greeting name="Edward" />
    			<Greeting name="Fiona" />
    		</div>
    	);
    }

    export default App;
    ```

4. **Result:**

    <img src="https://i.imgur.com/CeO3jkA.png" title="source: imgur.com" alt="Output"/>


### **4. Developer Profile Card Project**

As a practice, I developed a Developer Profile Card to better understand the concepts.
You can find the code inside `App.js` file. This project helped reinforce my understanding of JSX, components, and props in React.

- **Developer Profile Card**

    <img src="https://i.imgur.com/0TbwAJF.png" title="source: imgur.com" alt="Developer Profile Card"/>
