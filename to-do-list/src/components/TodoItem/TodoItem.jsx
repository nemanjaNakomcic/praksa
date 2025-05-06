import styles from './TodoItem.module.scss';

import Button from '../Button/Button'; 


function TodoItem({task, onMarkDone, onDelete}){
    return (
        <div className={styles.item} onClick={() => onMarkDone(task.id)}>
            <span className={task.completed ? styles.done : ''}>{task.text}</span>

    <Button
      onClick={() => onDelete(task.id)}
      variant="danger"
    >
      Delete
    </Button>
        </div>
    );
}

export default TodoItem;