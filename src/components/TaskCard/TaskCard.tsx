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

export const TaskCard: FC = (): ReactElement => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">
          Title of the task
        </CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">1 mar, 2025</Badge>
          <Badge className="bg-sky-800" variant="outline">normal</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>This is the description of the tasks</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Switch id="in-progress" />
          <Label className="ml-4" htmlFor="in-progress">In Progress</Label>
        </div>
        <Button variant="outline">Completed</Button>
      </CardFooter>
    </Card>
  )
}
