export const TaskItem = ({ task, toggleTask }) => {
  return (
    <div className="p-6 m-2 w-64 inline-block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {task.name}
      </h5>
      <div className="flex items-center mb-4">
        <input id={task.name} type="checkbox" checked={task.done} onChange={() => { toggleTask(task) }} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
        <label htmlFor={task.name} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
          Realizado
        </label>
      </div>
    </div>
  );
}