import { useState, useEffect } from 'react';
import { ListTask } from './components/ListTask/ListTask';
import { TaskCreator } from './components/TaskCreator/TaskCreator'


function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find(task => task.name === taskName)) {
      const newTask = {
        name: taskName,
        done: false
      };

      setTaskItems([...taskItems, newTask]);
    } else {
      alert('La tarea ya existe')
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    );
  }

  const changeShow = () => {
    setShowCompleted(!showCompleted);
    localStorage.setItem('showCompleted', !showCompleted);
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  // useEffect(() => {
  //   localStorage.setItem('showCompleted', showCompleted);
  // }, [showCompleted]);

  return (
    <div className="App ">
      <h1 className="text-3xl font-bold text-center">
        Listado de Tareas
      </h1>
      <div className="sm:w-full md:w-1/2 border-black mx-auto my-5 px-3 justify-center">
        <TaskCreator createNewTask={createNewTask} />
      </div>
      <hr />
      <div className="sm:w-full md:w-3/4 border-black mx-auto my-5 px-3 justify-center">
        <ListTask tasks={taskItems} toggleTask={toggleTask} show={false} title="Tareas Pendientes" />

        <div>
          <input type="checkbox" onChange={(e) => changeShow()} key="ckeckShowCompleted" checked={showCompleted} />
          <label> Show Task Done </label>
        </div>

        {
          showCompleted === true && (
            <ListTask tasks={taskItems} toggleTask={toggleTask} show={true} title="Tareas Completadas" />
          )
        }

      </div>
    </div>
  );
}

export default App;