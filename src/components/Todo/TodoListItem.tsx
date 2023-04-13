import { Button } from "@mantine/core";
import { useDeleteTodo } from "~/services/deleteTodo";
import { Todo } from "~/types";

type Props = {
  data: Todo;
}

const TodoListItem = ({
  data,
}: Props) => {
  const [deleteTodo] = useDeleteTodo();

  return (
    <div>
      <h2
        style={{
          textDecoration: data.completed ? 'line-through' : 'none',
        }}
      >
        <span>#{data.id}</span> {data.title}
        <Button onClick={() => deleteTodo({ id: data.id })}>x</Button>
      </h2>
    </div>
  )
}

export default TodoListItem