import type { FC, ReactElement } from "react"
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

export const TaskCard: FC<ITask> = ({
  title,
  description,
  priority,
  dueDate,
  status
}): ReactElement => {
  const formattedDate = new Date(dueDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

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
          <Switch id="in-progress" checked={status === 'inProgress'} />
          <Label className="ml-4" htmlFor="in-progress">In Progress</Label>
        </div>
        <Button variant="outline">Completed</Button>
      </CardFooter>
    </Card>
  )
}
