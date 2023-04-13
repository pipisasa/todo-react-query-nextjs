import { useQuery } from "@tanstack/react-query";
import { baseAxios } from "~/lib/axios/baseAxios";
import { Todo } from "~/types";



export const fetchTodos = async (): Promise<Todo[]> => {
  const { data: todos } = await baseAxios.get<Todo[]>('/todos');
  return todos;
}

export const useFetchTodos = () => {
  const query = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos'],
    initialData: []
  });

  return [query.data, query] as const;
}