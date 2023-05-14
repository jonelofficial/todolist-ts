import { Todos } from "../model/Todos";

interface TodoListsProps {
  onRemoveTodo: (id: string) => void;
  onUpdateTodo: (id: string, status: boolean) => void;
  todos: Todos[];
}

const TodoLists = ({ onRemoveTodo, onUpdateTodo, todos }: TodoListsProps) => {
  return (
    <>
      <ul>
        {todos.map(({ todo, status, createdAt, id }: Todos, i) => {
          return (
            <li
              key={i}
              style={{
                textDecoration: !status ? "line-through" : "",
                cursor: "pointer",
              }}
              onClick={() => onUpdateTodo(id, !status)}
            >
              {todo}
              {"  -  "}
              {new Date(createdAt).toDateString()}
              <button onClick={() => onRemoveTodo(id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoLists;
