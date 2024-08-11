# 🚀 React Learning Journey: Day 12 🚀

### Exploring `useReducer` in React: Enhancing State Management

Welcome to Day 12 of my React learning journey! Today, I immersed myself in the `useReducer` hook, discovering how it serves as a powerful alternative to `useState`, particularly for managing more complex state logic in React applications. I decided to refactor the code for my project, 'PackPal' (which I started on Day 10), to integrate `useReducer`. Here’s what I learned from the process, the benefits I noticed, and how it compares to `useState`.

---

#### Understanding `useReducer`

The `useReducer` hook caught my attention because it’s tailored for situations where state transitions involve multiple sub-values or when the next state depends heavily on the previous one. I found the basic syntax to be:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- **`reducer`**: A function that determines how the state changes based on an action.
- **`initialState`**: The starting state value.
- **`state`**: The current state value.
- **`dispatch`**: A function to send actions to the reducer.

#### Why I Chose to Explore `useReducer`

While `useState` has been my go-to for straightforward state updates, I realized that `useReducer` offers more control and structure, which is especially valuable for complex state logic. I noticed that it centralizes state management within a reducer function, making the code cleaner and easier to maintain.

#### Comparing `useState` and `useReducer`

Here’s what I observed during the comparison:

**Code Size**: Initially, `useState` felt more concise since I didn’t have to write a reducer or dispatch actions. However, as I refactored more of my code, I noticed that `useReducer` actually reduced code duplication, especially when several event handlers needed to modify state in similar ways.

**Readability**: I found `useState` easy to read for simple updates. But when the updates became more complex, the component started feeling bloated. `useReducer` helped me by separating the update logic (how state changes) from the event handlers (what happens), which made the code more organized.

**Debugging**: Tracking down bugs in state updates was sometimes tricky with `useState`. With `useReducer`, I could log every action and state update, making it much easier to pinpoint issues.

**Testing**: Since reducers are pure functions, I realized I could test them in isolation, outside of the component. This was particularly useful for complex state logic, as it allowed me to assert that a reducer produced the correct state for given inputs.

#### Writing Reducers Well

I learned some key points about writing reducers:

- **Reducers Must Be Pure**: This means they return the same output for the same input without causing side effects, which is crucial since reducers run during rendering.

- **Each Action Describes a Single User Interaction**: Even if an action leads to multiple state changes, encapsulating it in a single action made my code easier to debug and understand.

#### Refactoring with `useReducer`

Here’s a breakdown of how I refactored my code to use `useReducer`, replacing `useState`:

##### 1. Initializing State with `useReducer`

Initially, I managed a list of items using `useState`:

```javascript
const [items, setItems] = useState([]);
```

I refactored this to use `useReducer`:

```javascript
const [items, dispatch] = useReducer(itemsReducer, []);
```

Here, `items` holds the current state, and `dispatch` triggers actions that update the state.

##### 2. Handling Actions with `dispatch`

With `useReducer`, I learned to handle state updates by sending actions to the reducer via the `dispatch` function. Here’s how I approached it:

Previously, I used `useState`:

```javascript
function handleAddItem(item) {
    setItems((items) => [...items, item]);
}

function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
}

function handleToggleItem(id) {
    setItems((items) =>
    items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
    )
);
}

function handleClearList() {
    const confirm = window.confirm(
        "Are you sure you want to clear the list?"
    );

    if (confirm) setItems([]);
}
```

With `useReducer`, I switched to:

```javascript
function handleAddItem(item) {
    dispatch({ type: "add_item", item });
}

function handleDeleteItem(id) {
    dispatch({ type: "delete_item", id });
}

function handleToggleItem(id) {
    dispatch({ type: "toggle_item", id });
}

function handleClearList() {
    const confirm = window.confirm(
        "Are you sure you want to clear the list?"
    );

    if (confirm) dispatch({ type: "clear_items" });
}
```

##### 3. The Reducer Function

Here’s how my `itemsReducer` function ended up looking, handling all state transitions based on the dispatched actions:

```javascript
function itemsReducer(state, action) {
    switch (action.type) {
        case "add_item":
            return [...state, action.item];
        case "delete_item":
            return state.filter((item) => item.id !== action.id);
        case "toggle_item":
            return state.map((item) =>
                item.id === action.id
                    ? { ...item, packed: !item.packed }
                    : item
            );
        case "clear_items":
            return [];
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
```

---

#### Conclusion

Refactoring my code to use `useReducer` made my state management more organized and maintainable. While `useReducer` required more setup than `useState`, the benefits became clear when dealing with complex state logic. This experience showed me how introducing more structure with `useReducer` could potentially help avoid bugs and make the code easier to test and debug.

You can find the full code [here](https://github.com/mayuresh-surve/React-Journey/tree/main/Day%2010). I’m excited to keep learning and share more insights as I continue to explore React!
