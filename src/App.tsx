import { useState, useEffect } from "react";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodoList(newTodo: string) {
    if (newTodo.trim() !== "") {
      const newTodoList = setTodoList((tdl) => [...tdl, newTodo]);
    } else {
      window.alert("Empty todo!");
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = setTodoList(
      todoList.filter((element, i) => {
        return i !== index;
      })
    );
  }

  function handleUpdateTodoList(index) {
    setTodoValue(todoList[index]);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInputs
        handleAddTodoList={handleAddTodoList}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
      ></TodoInputs>
      <TodoList
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodoList={handleUpdateTodoList}
      ></TodoList>
    </>
  );
}

export default App;
