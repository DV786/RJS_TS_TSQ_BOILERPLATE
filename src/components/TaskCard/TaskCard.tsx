import { useEffect, useState, type FC, type ReactElement } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { ITask } from "@/types/task.interface"
import { useUpdateTask } from "@/hooks/updateTask.hook"

export const TaskCard: FC<ITask> = ({
  title,
  description,
  priority,
  dueDate,
  status,
  _id
}): ReactElement => {
  const { mutate, isSuccess } = useUpdateTask();
  const [progress, setProgress] = useState<boolean>(false);
  const formattedDate = new Date(dueDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  useEffect(() => {
    if (status === 'inProgress') {
      setProgress(true);
    }
  }, [status]);

  const handleProgressChange = (value: boolean): void => {
    setProgress(value);
    if (_id) {
      mutate({ _id, status: value ? 'inProgress' : 'todo' })
    }
  }

  const handleTaskCompleted = (): void => {
    if (_id) {
      mutate({ _id, status: 'completed' })
    }
  }

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">
          {title}
        </CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">{formattedDate}</Badge>
          <Badge className={`
            ${priority === 'normal' && 'bg-sky-800'}
            ${priority === 'low' && 'bg-green-800'}
            ${priority === 'high' && 'bg-red-800'}
            `} variant="outline">{priority}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Switch id="in-progress" checked={progress} onCheckedChange={handleProgressChange} />
          <Label className="ml-4" htmlFor="in-progress">In Progress</Label>
        </div>
        <Button variant="outline" onClick={handleTaskCompleted}>Completed</Button>
      </CardFooter>
    </Card>
  )
}
