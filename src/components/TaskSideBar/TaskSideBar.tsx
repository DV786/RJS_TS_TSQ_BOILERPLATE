import type { FC, ReactElement } from "react"
import { Card } from '@/components/ui/card';
import { UserProfile } from "@/components/UserProfile/UserProfile";
import { NewTask } from "@/components/NewTask/NewTask";
import { Logout } from "@/components/Logout/Logout";
import style from './style.module.css';

export const TaskSideBar: FC = (): ReactElement => {
  return (
    <section className={`fixed top-4 right-4 ${style.sidebarHeight}`}>
      <Card className="flex flex-col w-full h-full p-6 justify-between">
        <UserProfile firstName="Mark" />
        <NewTask />
        <Logout />
      </Card>
    </section>
  )
}
