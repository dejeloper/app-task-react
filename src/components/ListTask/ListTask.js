import { TaskItem } from "../TaskItem/TaskItem"

export const ListTask = ({ tasks, toggleTask, show, title }) => {

  const taskListItem = (donevalue) => {
    return (
      tasks
        .filter(task => task.done === donevalue)
        .map(task => (
          <TaskItem task={task} key={task.name} toggleTask={toggleTask} />
        ))
    );
  }


  return (
    <div className="w-full text-center">
      <h2 className="text-2xl font-bold text-left">{title}</h2>
      {
        taskListItem(show)
      }
    </div>
  )
}