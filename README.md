# 🟦 React Mini Edit Demo

This is a **minimal React demo** that demonstrates a basic "edit mode" for a list of tasks.  
It is part of my learning exercises for React CRUD functionality.

## 🔹 Features

- Display a list of tasks
- Click **Edit** to switch a task into an input field (edit mode)
- Uses **React state** and **conditional rendering**
- Simple and clean UI

## 🔹 Concepts Learned

- `useState` for multiple pieces of state
- Rendering lists with `.map()`
- Conditional rendering using `? :`
- Basic controlled components (input fields)
- Handling IDs for list items

## 🔹 How It Works

1. The `tasks` state holds the list of tasks (each task has an `id` and `text`).
2. The `editingId` state tracks which task is currently in edit mode.
3. When you click **Edit**, the corresponding task switches from a `<span>` to an `<input>`.

> Note: This is the **first step** in creating full edit functionality.  
> Saving the changes and updating the list will be added in the next steps.

## 🔹 Tech Stack

- React
- JavaScript
- CSS

- Live Demo:
  https://codesandbox.io/p/sandbox/pdk9vr?file=%2Fsrc%2Fstyles.css%3A1%2C1-45%2C1
