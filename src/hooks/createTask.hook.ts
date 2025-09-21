import { useMutation } from "@tanstack/react-query";
import type { IResponse } from "@/types/response.interface";
import type { ITask } from "@/types/task.interface";

const createTask = async (task: ITask) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/create`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  if (!response.ok) {
    throw new Error('Network response not Ok');
  };

  return await response.json();
};

export function useCreateTask() {
  return useMutation({
    mutationFn: createTask,
    onSuccess: (res: IResponse<ITask>) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    }
  })
}