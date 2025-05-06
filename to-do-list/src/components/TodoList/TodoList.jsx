import styles from './TodoList.module.scss'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({tasks, onMarkDone, onDelete}){
    return(
        <div className={styles.list}>
            {tasks.map(task => (
                <TodoItem
                    key = {task.id}
                    task = {task}
                    onMarkDone={onMarkDone}
                    onDelete={onDelete} 
                />
            ))}
        </div>
    )
}

export default TodoList;