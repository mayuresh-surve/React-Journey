# 🚀 React Learning Journey: Day 8 🚀

Welcome to Day 8 of my React Learning Journey! Today, I dived deeper into the **state in React** and how it is tied to a position in the render tree. This understanding is crucial for effectively managing component state and behavior in a React application. Here’s what I learned:

## State and Render Tree

React builds render trees for the component structure in your UI. When you give a component state, the state doesn't live inside the component; instead, it is held inside React. React associates each piece of state it’s holding with the correct component by where that component sits in the render tree.

### Example: Counter Component

In the example below, a `Counter` component is rendered in two different positions within the `App` component. Each instance of the `Counter` maintains its own state independently.

```javascript
import { useState } from 'react';

export default function App() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Each `Counter` component operates independently because they are rendered at different positions in the tree, even though they are the same JSX tag.

### Isolated State

Each component on the screen has fully isolated state. For example, if you render two `Counter` components side by side, each will have its own independent state.

```javascript
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

When one counter is updated, only the state for that specific component is updated:

### State Persistence and Destruction

React will keep the state around for as long as you render the same component at the same position in the tree. If you remove a component, its state is destroyed. When the same component is rendered again, its state is initialized from scratch.

```javascript
import { useState } from 'react';

export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => setShowB(e.target.checked)}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

When you stop rendering the second counter, its state disappears. When you render it again, it starts from its initial state.

### Preserving State with Keys

To ensure a component maintains its state even when its position in the tree changes, you can use keys. Keys make React distinguish between different instances of the same component.

```javascript
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Here, switching between `Taylor` and `Sarah` does not preserve the state because they have different keys.

---

### Conclusion

Today's learning session deepened my understanding of how React handles state in relation to the render tree. This knowledge is fundamental for managing component state efficiently and understanding the lifecycle of React components. As I continue my React learning journey, I look forward to applying these concepts to build more interactive and dynamic applications.

Stay tuned for more updates as I dive deeper into React!

Connect with me on [LinkedIn](https://www.linkedin.com/in/mayuresh-surve/) to stay updated on my latest projects and insights!