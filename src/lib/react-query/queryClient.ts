import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  // defaultOptions: {
  //   mutations: {
  //     onError(error, variables, context) {
  //       console.error(error);
  //     },
  //   },
  //   queries: {
  //     onError(error, variables, context) {
  //       console.error(error);
  //     }
  //   }
  // }
});