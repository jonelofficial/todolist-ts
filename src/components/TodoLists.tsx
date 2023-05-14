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
              }}
            >
              <p
                style={{ cursor: "pointer", display: "inline" }}
                onClick={() => onUpdateTodo(id, !status)}
              >
                {todo} {"  -  "}
                {new Date(createdAt).toDateString()}
              </p>

              {!status && (
                <button
                  style={{ marginLeft: "1em" }}
                  onClick={() => onRemoveTodo(id)}
                >
                  Remove
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoLists;
