export type TaskStatus = "not_started" | "in_progress" | "completed"

export type Task = {
  id: string
  title: string
  description: string
  category: "learning" | "practice" | "networking" | "reflection"
  status: TaskStatus
}
