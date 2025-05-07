import styles from "../../styles/components/TodoItem.module.scss";
import Button from "../UI/Button";

const TodoItem = ({ task, onDelete, onComplete, onEdit }) => {
  return (
    <tr className={styles.row}>
      <td
        className={`${styles.title} ${task.completed ? styles.completed : ""}`}
      >
        {task.title}
      </td>
      <td>{task.priority}</td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
      </td>
      <td>
        <Button onClick={() => onEdit(task)}>Edit</Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TodoItem;
