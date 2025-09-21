import { useState, type FC, type ReactElement } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"


export const NewTask: FC = (): ReactElement => {
  const [date, setDate] = useState<Date>()

  return (
    <div>
      <h2 className="text-xl mb-4">Create a new task</h2>
      <form>
        <div className="py-2">
          <Input type="text" placeholder="Task Title" />
        </div>
        <div className="flex flex-row justify-between py-2">
          <div className="w-full mr-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">Todo</SelectItem>
                <SelectItem value="inProgress">In-Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full ml-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!date}
                className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="py-2">
          <Textarea placeholder="Task Description" />
        </div>
        <div className="py-2 flex justify-end">
          <Button>Create Task</Button>
        </div>
      </form>
    </div>
  )
}
