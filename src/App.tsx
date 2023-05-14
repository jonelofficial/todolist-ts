import { useEffect, useState } from "react";
import "./App.css";
import TodoLists from "./components/TodoLists";
import { Todos } from "./model/Todos";
import TodoService from "./services/TodoService";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const response = await TodoService.getTodos();
    sortState(response);
  };

  const removeTodo = async (id: string) => {
    const response = await TodoService.removeTodo(id);
    sortState(todos.filter((todo) => todo.id !== response.id));
  };

  const submitForm = async (e: React.FormEvent, todo: string) => {
    e.preventDefault();
    if (todo) {
      const response = await TodoService.createTodo({
        todo: todo,
        status: true,
      });
      setTodos((prevState) => [response, ...prevState]);
    }
  };

  const updateTodo = async (id: string, status: boolean) => {
    const response = await TodoService.updateTodo(id, status);
    sortState(
      todos.map((todo) => {
        if (todo.id === response.id)
          return { ...todo, status: response.status };
        return todo;
      })
    );
  };

  const sortState = (array: Todos[]) => {
    setTodos(
      array.sort((a: Todos, b: Todos): number => {
        if (a.status && !b.status) {
          return -1;
        } else if (!a.status && b.status) {
          return 1;
        }

        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        return dateB - dateA;
      })
    );
  };
  return (
    <>
      <TodoForm onSubmitForm={submitForm} />
      <TodoLists
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </>
  );
}

export default App;
