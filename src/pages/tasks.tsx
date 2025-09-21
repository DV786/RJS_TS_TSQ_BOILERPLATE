import { type FC, type ReactElement } from 'react'
import { TasksCounter } from '@/components/TasksCounter/TasksCounter';
import { TaskCard } from '@/components/TaskCard/TaskCard';
import { TaskSideBar } from '@/components/TaskSideBar/TaskSideBar';
import { useFetchTasks } from '@/hooks/fetchTask.hook';
import type { ITask } from '@/types/task.interface';

export const Tasks: FC = (): ReactElement => {
  const { data } = useFetchTasks({});
  return (
    <section className='flex flex-row w-full p-4 gap-8'>
      <section className='flex basis-2/3 justify-center'>
        <div className='flex flex-col w-4/5 p-4'>
          <h1 className='text-white font-bold text-2xl mb-8'>
            Task as on: Saturday, 1 Mar 2025
          </h1>
          <div className='flex justify-around mb-12'>
            <TasksCounter
              status='todo'
              count={
                data &&
                  data.meta &&
                  data.meta &&
                  'todoTasks' in data.meta ? data.meta.todoTasks as number : 0
              } />
            <TasksCounter
              status='inProgress'
              count={
                data &&
                  data.meta &&
                  data.meta &&
                  'inProgressTasks' in data.meta ? data.meta.inProgressTasks as number : 0
              }
            />
            <TasksCounter
              status='completed'
              count={
                data &&
                  data.meta &&
                  data.meta &&
                  'completedTasks' in data.meta ? data.meta.completedTasks as number : 0
              }
            />
          </div>
          {
            data &&
            Array.isArray(data.data) &&
            data.data.every(
              (item): item is ITask =>
                "_id" in item &&
                "title" in item &&
                "status" in item &&
                "priority" in item &&
                "dueDate" in item
            ) &&
            data.data.map((task) => (
              <TaskCard
                key={task._id}
                _id={task._id}
                title={task.title}
                description={task.description}
                status={task.status}
                priority={task.priority}
                dueDate={task.dueDate}
              />
            ))
          }
        </div>
      </section>
      <section className='flex basis-1/3'>
        <TaskSideBar />
      </section>
    </section>
  );
};


