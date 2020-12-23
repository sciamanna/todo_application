import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import Task from './components/Task/Task';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: "Buy cat food", completed: false, date: "2019-09-18", id: '001'},
    { text: "Wash dishes", completed: true, date: "2019-10-24", id: '002'},
    { text: "Make oat milk", completed: false, date: "2019-11-27", id: '003' }, 
    { text: "Go for a walk", completed: true, date: "2020-01-31", id: '004' },
    { text: "Go to sleep", completed: false, date: "2020-02-24", id: '005' },
    { text: "Wake up", completed: false, date: "2020-03-30", id: '006' }
  ])

const deleteTask = id => {
  const updatedTasks = tasks.filter(task => task.id !== id)
  setTasks(updatedTasks)
}

const incompleteTasks = tasks.filter(task => !task.completed)
const completeTasks = tasks.filter(task => task.completed)
  return (
    <div className="App">
      <Header taskCount={incompleteTasks.length}/>
      <main className="all-tasks">
      <TaskList deleteTask={ deleteTask} tasks={ incompleteTasks } status="incomplete"/>
      <TaskList deleteTask={ deleteTask} tasks={ completeTasks } status="complete"/>
      </main>
    </div>
  );
} 

export default App;
   