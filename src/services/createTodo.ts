import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseAxios } from "~/lib/axios/baseAxios";
import { Todo } from "~/types";

type CreateTodoArgs = {
  data: Omit<Todo, 'id'>;
}

export const createTodo = async (arg: CreateTodoArgs): Promise<Todo> => {
  const { data: createdTodo } = await baseAxios.post<Todo>('/todos', arg.data);
  return createdTodo;
}

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSettled(data, error, variables, context) {
      queryClient.invalidateQueries(['todos']);
    },
  });

  return [mutation.mutateAsync, mutation] as const;
}