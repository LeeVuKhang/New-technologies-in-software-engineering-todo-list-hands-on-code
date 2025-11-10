import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./styles.css"; // Import file CSS

export default function App() {
  // State cho danh sách các todo
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React Components", completed: true },
    { id: 2, text: "Học Props", completed: true },
    { id: 3, text: "Học State và useState", completed: false },
  ]);

  // State cho nội dung đang gõ trong input
  const [input, setInput] = useState("");

  // Hàm xử lý khi nhấn nút "Add"
  const addTodo = () => {
    if (input.trim() === "") return; // Bỏ qua nếu input rỗng

    const newTodo = {
      id: Date.now(), // Dùng timestamp làm ID đơn giản
      text: input,
      completed: false,
    };

    // Cập nhật state: tạo một mảng mới
    setTodos([...todos, newTodo]);
    setInput(""); // Xóa nội dung trong input
  };

  // Hàm xử lý khi check/uncheck checkbox
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo List Pro</h1>
      <div className="add-todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? addTodo() : null)}
          placeholder="Bạn cần làm gì?"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
