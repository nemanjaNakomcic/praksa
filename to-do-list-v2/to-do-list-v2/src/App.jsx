import { useEffect, useState, useRef } from "react";
import Loader from "./components/UI/Loader";
import Filter from "./components/Todo/TodoFilter";
import Button from "./components/UI/Button";
import "./styles/main.scss";

import {
  getTasks,
  toggleTaskCompletedById,
  deleteTask,
  addTask,
  updateTask,
} from "./services/todoService";

import TodoList from "./components/Todo/TodoList";
import TodoFormModal from "./components/Todo/TodoFormModal";

function App() {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const [taskBeingEdited, setTaskBeingEdited] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const idRef = useRef(1);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);

      const delay = new Promise((resolve) => setTimeout(resolve, 1000));
      const dataPromise = getTasks();

      const [data] = await Promise.all([dataPromise, delay]);

      setTasks(data);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const onEdit = (task) => {
    setTaskBeingEdited(task);
    setModalOpen(true);
  };
  const onComplete = async (id) => {
    const updatedTask = await toggleTaskCompletedById(id);
    if (!updatedTask) return;

    setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
  };
  const onDelete = async (id) => {
    const success = await deleteTask(id);
    if (!success) return;

    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "inactive") return task.completed;
    return true;
  });

  const handleAddTask = async ({ title, priority }) => {
    const newTask = {
      title,
      priority,
      completed: false,
    };

    const saved = await addTask(newTask);
    if (saved) {
      setTasks((prev) => [...prev, saved]);
    }
  };

  const handleEditTask = async ({ title, priority }) => {
    const updated = {
      ...taskBeingEdited,
      title,
      priority,
    };

    const saved = await updateTask(updated);
    if (saved) {
      setTasks((prev) => prev.map((t) => (t.id === saved.id ? saved : t)));
      setTaskBeingEdited(null);
    }
  };

  return (
    <div className="main-container">
      <div className="wrapper">
        <div>
          <Button onClick={() => setModalOpen(true)}>Add New Task</Button>
        </div>
        {modalOpen && (
          <TodoFormModal
            onClose={() => {
              setModalOpen(false);
              setTaskBeingEdited(null);
            }}
            onSave={taskBeingEdited ? handleEditTask : handleAddTask}
            initialData={taskBeingEdited}
          />
        )}

        <Filter value={filter} onChange={setFilter} />
        {loading ? (
          <Loader />
        ) : (
          <TodoList
            tasks={filteredTasks}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
