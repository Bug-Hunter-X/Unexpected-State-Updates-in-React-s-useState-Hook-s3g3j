# Unexpected State Updates in React's useState Hook

This repository demonstrates a subtle bug in React related to updating state multiple times within a single event handler using the `useState` hook.  The issue arises because React batches state updates for performance reasons.  If you update the state multiple times in quick succession, only the final update might be reflected in the UI, causing unexpected behavior and potentially breaking other parts of your application that rely on the state value.

## Bug Description
The `MyComponent` component increments a counter using `setCount`. However, it calls `setCount` twice in quick succession. While it seems like the counter should increase by 2, it actually only increases by 1. This is because React batches state updates, and only the last update is reflected.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Click the "Increment" button. Observe that the counter increments by only 1, not 2.

## Solution
The provided `bugSolution.js` shows how to fix this issue by using a functional update approach with the `useState` hook.  The functional update uses the previous state value as an argument in the updating function. This ensures each update properly accounts for the previous state.