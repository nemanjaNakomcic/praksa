import TodoItem from "./TodoItem";
import styles from "../../styles/components/TodoList.module.scss"; // prilagodi putanju

const TodoList = ({ tasks, onComplete, onEdit, onDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Completed</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
