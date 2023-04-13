import TodoForm from "~/components/Todo/TodoForm";
import TodoList from "~/components/Todo/TodoList";
import { useCreateTodo } from "~/services/createTodo";
import { useFetchTodos } from "~/services/fetchTodos";

export default function Home() {
  const [todos] = useFetchTodos();
  const [createTodo] = useCreateTodo();

  return (
    <main className="">
      <TodoForm onSubmit={data => createTodo({ data })} />

      <TodoList data={todos} />
    </main>
  )
}
