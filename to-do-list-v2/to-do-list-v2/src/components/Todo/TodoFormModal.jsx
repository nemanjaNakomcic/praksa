import { useState } from "react";
import styles from "../../styles/components/TodoFormModal.module.scss";
import Button from "../UI/Button";
import Input from "../UI/Input";

const TodoFormModal = ({ onClose, onSave, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [priority, setPriority] = useState(initialData?.priority || "Low");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({ title, priority });
    onClose();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>{initialData ? "Edit Task" : "Add New Task"}</h2>
        <form onSubmit={onSubmit}>
          <Input
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={priority === "Low"}
                onChange={() => setPriority("Low")}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={priority === "Medium"}
                onChange={() => setPriority("Medium")}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="High"
                checked={priority === "High"}
                onChange={() => setPriority("High")}
              />
              High
            </label>
          </div>

          <div className={styles.actions}>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoFormModal;
