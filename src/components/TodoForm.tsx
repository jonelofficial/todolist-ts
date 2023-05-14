import { useState } from "react";

interface TodoFormProps {
  onSubmitForm: (e: React.FormEvent, todo: string) => void;
}

const TodoForm = ({ onSubmitForm }: TodoFormProps) => {
  const [todo, setTodo] = useState("");
  return (
    <form
      onSubmit={(e) => {
        onSubmitForm(e, todo);
        setTodo("");
      }}
      method="post"
    >
      <label htmlFor="todo">Todo Text</label>
      <input
        type="text"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
