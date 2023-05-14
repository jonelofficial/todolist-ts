import { useEffect, useState } from "react";
import "./App.css";
import TodoLists from "./components/TodoLists";
import { Todos } from "./model/Todos";
import TodoService from "./services/TodoService";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    (async () => {
      const response = await TodoService.getTodos();
      setTodos(response);
    })();

    return () => {};
  }, []);

  const removeTodo = async (id: string) => {
    const response = await TodoService.removeTodo(id);
    setTodos(todos.filter((todo) => todo.id !== response.id));
  };

  const submitForm = async (e: React.FormEvent, todo: string) => {
    e.preventDefault();
    const response = await TodoService.createTodo({ todo: todo, status: true });
    setTodos((prevState) => [response, ...prevState]);
  };
  return (
    <>
      <TodoForm onSubmitForm={submitForm} />
      <TodoLists todos={todos} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
