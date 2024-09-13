import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AddTask from './components/AddTask'
import ToggleTheme from './components/ToggleTheme';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import { useEffect, useState } from 'react';
import PageNotFound from './components/PageNotFound';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [tasks]);

  const filterTasks = (priority, doneStatus = false) => {
    return tasks.filter(task => task.priority === priority && task.isdone === doneStatus);
  };

  return (
    <>
      <Router>
        <div className='min-h-screen bg-white text-black dark:bg-black '>
          <div className='dark:text-white w-4/5 sm:w-2/3 mx-auto py-4 items-center'>
            <header className='py-4 flex justify-between'>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold"> Task List App</h1>
              </div>
              <ToggleTheme />
            </header>
            <Routes>
              <Route index path="/" element={<TaskList tasks={tasks.filter(task => !task.isdone)} />} />
              <Route path='/all' element={<Navigate to='/' />} />
              <Route path="/high" element={<TaskList tasks={filterTasks("high")} />} />
              <Route path="/medium" element={<TaskList tasks={filterTasks("medium")} />} />
              <Route path="/low" element={<TaskList tasks={filterTasks("low")} />} />
              <Route path="/done" element={<TaskList tasks={tasks.filter(task => task.isdone)} />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/edit-task/:id" element={<EditTask />} />
              <Route path="/delete-task/:id" element={<DeleteTask />} />
              <Route path="/edit-task/" element={<PageNotFound />} />
              <Route path='*' element={<Navigate to='/page-not-found' />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
