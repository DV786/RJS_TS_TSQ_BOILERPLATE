import { useMutation } from "@tanstack/react-query";
import type { IUpdateTask } from "@/types/task.interface";

const updateTask = async (task: IUpdateTask) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/update`, {
    method: 'PATCH',
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

export function useUpdateTask() {
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    }
  })
}