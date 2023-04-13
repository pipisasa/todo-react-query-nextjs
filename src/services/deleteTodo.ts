import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseAxios } from "~/lib/axios/baseAxios";
import { Todo } from "~/types";

type DeleteTodoArgs = {
  id: number;
}

export const deleteTodo = async (arg: DeleteTodoArgs): Promise<Todo> => {
  const { data: deletedTodo } = await baseAxios.delete<Todo>(`/todos/${arg.id}`);
  return deletedTodo;
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onSettled(data, error, variables, context) {
      queryClient.invalidateQueries(['todos']);
    },
  });

  return [mutation.mutateAsync, mutation] as const;
}