import { type FC, type ReactElement } from 'react'
import { TasksCounter } from '@/components/TasksCounter/TasksCounter';
import { TaskCard } from '@/components/TaskCard/TaskCard';
import { TaskSideBar } from '@/components/TaskSideBar/TaskSideBar';

export const Tasks: FC = (): ReactElement => {
  return (
    <section className='flex flex-row w-full p-4 gap-8'>
      <section className='flex basis-2/3 justify-center'>
        <div className='flex flex-col w-4/5 p-4'>
          <h1 className='text-white font-bold text-2xl mb-8'>
            Task as on: Saturday, 1 Mar 2025
          </h1>
          <div className='flex justify-around mb-12'>
            <TasksCounter status='todo' count={12} />
            <TasksCounter status='inProgress' count={10} />
            <TasksCounter status='completed' count={8} />
          </div>
          <TaskCard
            title='Test Title'
            description='Test Description'
            status='inProgress'
            priority='normal'
            dueDate='2025-01-01T12:00:00.00Z'
          />
          <TaskCard
            title='Test Title 2'
            description='Test Description'
            status='todo'
            priority='high'
            dueDate='2025-01-01T12:00:00.00Z'
          />
        </div>
      </section>
      <section className='flex basis-1/3'>
        <TaskSideBar />
      </section>
    </section>
  );
};


