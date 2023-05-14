import { Todos } from "../model/Todos";

interface TodoListsProps {
  onRemoveTodo: (id: string) => void;
  todos: Todos[];
}

const TodoLists = ({ onRemoveTodo, todos }: TodoListsProps) => {
  return (
    <>
      <ul>
        {todos.map(({ todo, status, createdAt, id }: Todos, i) => {
          return (
            <li
              key={i}
              style={{ textDecoration: !status ? "line-through" : "" }}
            >
              Todo: {todo}
              Date: {new Date(createdAt).toDateString()}
              {status ? (
                <>
                  <button onClick={() => onRemoveTodo(id)}>Done</button>
                  <button onClick={() => onRemoveTodo(id)}>Remove</button>
                </>
              ) : (
                <>
                  <button onClick={() => onRemoveTodo(id)}>Active</button>
                  <button onClick={() => onRemoveTodo(id)}>Remove</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoLists;
