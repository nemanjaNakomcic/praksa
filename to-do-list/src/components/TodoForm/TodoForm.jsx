import Button from '../Button/Button';
import styles from './TodoForm.module.scss'
import { useState } from 'react';

const TodoForm = ({onAdd}) => {

    const [text, setText] = useState("");

    return (
        <div className={styles.form}>
            <input className={styles.input}
            type="text" value={text}
            onChange={(e) => setText(e.target.value)}/>
            <Button
                onClick={() => {
                    if(text.trim() === "") return;
                    onAdd(text);
                    setText("");
                }}
            >Add</Button>
        </div>
    );
}

export default TodoForm;