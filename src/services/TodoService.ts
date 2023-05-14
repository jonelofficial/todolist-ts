import axios from "axios";
import { Todos } from "../model/Todos";

const http = axios.create({
  baseURL: "https://6460676ffe8d6fb29e303c8f.mockapi.io",
});

const TodoService = {
  getTodos: async () => {
    const response = await http.get<Todos[]>("/Id");
    return response.data;
  },
  createTodo: async (obj: { todo: string; status: boolean }) => {
    const response = await http.post("/Id", obj);
    return response.data;
  },
  removeTodo: async (id: string) => {
    const response = await http.delete(`/Id/${id}`);
    return response.data;
  },
  updateTodo: async (id: string) => {
    const response = await http.put(`/Id/${id}`);
    return response.data;
  },
};

export default TodoService;
