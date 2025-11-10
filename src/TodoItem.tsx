import React from "react";
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 2. Định nghĩa "hình dạng" của các props mà component này nhận
type TodoItemProps = {
  todo: Todo; // Prop 'todo' phải có hình dạng của 'Todo'
  onToggleComplete: (id: number) => void; // Là 1 hàm nhận 'id' (number) và không trả về gì
};
// Đây là component con, nhận props từ App
// Nó không quản lý state của riêng mình
function TodoItem({ todo, onToggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
    </li>
  );
}

// React.memo giúp tối ưu hiệu suất,
// component này sẽ chỉ render lại khi props của nó thay đổi
export default React.memo(TodoItem);
