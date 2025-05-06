import { useState, useEffect, useRef } from 'react'
import './App.css'
import TodoItem from './components/TodoItem/TodoItem'
import TodoList from './components/TodoList/TodoList';
import { loadTasks, saveTasks } from './utils/localStorage';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [todoList, setToDoList] = useState([]);

  const idRef = useRef(1);


  useEffect(() => {
    const stored = loadTasks();
    setToDoList(stored);
  }, []);


  useEffect(() => {
    saveTasks(todoList); 
  }, [todoList]);


  const onDelete = (id) => {
    setToDoList(prev => prev.filter(task => task.id !== id));
  }

  const onMarkDone = (id) => {
    setToDoList(prev => 
      prev.map(task => 
        task.id === id
        ? {...task, completed: !task.completed }
        : task
      )
    )
  };

  const onAdd = (text) => {
    const newTask = {
      id: idRef.current,
      text,
      completed: false
    };

    setToDoList(prev => [...prev, newTask]);
    idRef.current += 1;
  }


  return (
    <div className='wrapper'>
      <TodoForm
        onAdd = {onAdd}
      />

      <TodoList
        tasks={todoList}
        onMarkDone={onMarkDone}
        onDelete={onDelete}
    />
    </div>
  )
}

export default App
