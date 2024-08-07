import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todoList } = props;

  return (
    <>
      <ol className="main">
        {todoList.map((element: string, index: number) => {
          return (
            <TodoCard {...props} key={index} index={index}>
              <p>{element}</p>
            </TodoCard>
          );
        })}
      </ol>
    </>
  );
}
