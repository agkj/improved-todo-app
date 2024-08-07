export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleUpdateTodoList } = props;

  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button onClick={() => handleUpdateTodoList(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDeleteTodo(index)}
          ></i>
        </button>
      </div>
    </li>
  );
}
