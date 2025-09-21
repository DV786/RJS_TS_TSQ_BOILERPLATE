import { z } from 'zod';

export const CreateTaskSchema = z.object({
  title: z.string({
    message: 'Title is required'
  }).max(100, { message: 'Title must be maximum 100 chars' }),
  dueDate: z.date({ message: 'Due Date is mandatory' }),
  description: z.string({
    message: 'Description is required'
  }).max(500, {
    message: 'Description must be max 500 chars'
  }),
  status: z.enum(["todo", "inProgress", "completed"], {
    message: 'Status is required'
  }),
  priority: z.enum(["low", "normal", "high"], {
    message: 'Priority is required'
  }),
});