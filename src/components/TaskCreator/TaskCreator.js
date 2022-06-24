import './TaskCreator.css'
import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  }

  return (
    <div className='task-creator'>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-100">
          <div className="w-3/4 ">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="mt-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
              placeholder='Digite la nueva tarea'
            />
          </div>
          <div className="w-1/4">
            <button
              type="submit"
              className="mt-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>

      </form >
    </div >
  )
}