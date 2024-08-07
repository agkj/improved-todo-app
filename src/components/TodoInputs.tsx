import { useState } from "react";

export default function TodoInputs(props) {
  const { handleAddTodoList, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        placeholder="Enter a todo..."
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleAddTodoList(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
