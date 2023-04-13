import { Todo } from "~/types";
import TodoListItem from "./TodoListItem";

type Props = {
  data: Todo[];
}

const TodoList = ({
  data,
}: Props) => {
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <TodoListItem data={todo} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList