# 🚀 React Learning Journey: Day 13 🚀

### Diving into React Context: Passing Data from Parent to Child Components

Welcome to Day 13 of my React learning adventure! Today, I took a deep dive into the React Context API, an essential tool for managing global data and passing it through the component tree without the hassle of prop drilling. In this post, I’ll share what I learned about Context, why it’s so powerful, and walk you through a hands-on example that helped me grasp the concept.

---

#### What is React Context?

React Context is a feature that allows data to be shared across components without needing to pass props explicitly through every level of the component tree. This is especially useful when you have data that multiple components need to access, like themes, user information, or language settings.

#### Why Context Matters

As we will start working on more complex React projects, we will encounter a common issue: **prop drilling**. Prop drilling happens when you pass data through several layers of components, even though many of those components don’t need to use the data themselves—they’re just passing it along to deeper components.

This is where Context comes in. By using Context, we can avoid prop drilling entirely. I learned that Context is perfect for managing global data that needs to be accessed by many components at different levels of the tree.

#### Setting Up Context: A Hands-On Example

To really understand how Context works, I decided to implement it in a simple project where I needed to pass theme data (light or dark mode) from a parent component to multiple child components.

##### Step 1: Creating the Context

First, I created a Context object for the theme:

```javascript
import { createContext } from "react";

// Create a context with 'light' as the default value
const ThemeContext = createContext("light");

export default ThemeContext;
```

This step was pretty straightforward. The `createContext` function generates a context object that I could use to share the theme value across components.

##### Step 2: Providing Context in the Parent Component

Next, I set up a parent component (`App`) to provide the theme value to its children:

```javascript
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemedButton from "./ThemedButton";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ThemedButton />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
```

In this component, the `ThemeContext.Provider` wraps the part of the component tree that needs access to the theme data. By using the `value` prop on the `Provider`, I could control the data that’s shared with child components.

##### Step 3: Consuming Context in a Child Component

The next step was to create a child component (`ThemedButton`) that consumes the theme data:

```javascript
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            I am a {theme} themed button
        </button>
    );
}

export default ThemedButton;
```

Here, I used the `useContext` hook to access the current theme value directly in the `ThemedButton` component. This allowed me to dynamically style the button based on whether the theme was set to "light" or "dark."

##### Step 4: Putting It All Together

Finally, I tested the implementation by running the app. The `App` component controls the theme, and the `ThemedButton` component changes its appearance accordingly. The toggle button allows me to switch between light and dark themes seamlessly.

---

#### Key Takeaways

Today’s exploration of React Context has been incredibly enlightening. Here’s what I took away from the experience:

- **Context Simplifies Global Data Sharing**: I realized how much cleaner and more maintainable my code became by using Context to avoid prop drilling. Instead of passing props down multiple levels, I could simply wrap my components in a `Provider` and consume the context value wherever needed.

- **`useContext` is Powerful and Intuitive**: The `useContext` hook made it incredibly easy to access context values in any component.

- **Context is Ideal for Specific Use Cases**: While Context is great for certain scenarios, like theming or managing user authentication state, I also learned that it’s not a replacement for all prop passing. It’s important to use Context judiciously to keep my React apps performant and manageable.

I’m excited to keep building on this knowledge as I continue my React journey. Next, I’m looking forward to exploring even more advanced concepts and seeing how Context can be applied in larger, more complex applications.

Stay tuned for more updates, and feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/mayuresh-surve/). 

Onward to more React adventures!
