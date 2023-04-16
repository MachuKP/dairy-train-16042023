import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const storageData = localStorage.getItem("ITEMS")
    if (storageData === null) return []
    return JSON.parse(storageData)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function onSubmit(title) {
    setTodos((currentList) => {
      return [
        ...currentList,
        { id: crypto.randomUUID(), title, complete: false },
      ];
    });
  }

  function toggleTodo(id, complete) {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          //complete ชื่อเดียวกัน ตัด key ออกได้
          return { ...todo, complete };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={onSubmit} />
      <div className="header">To Do List</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
