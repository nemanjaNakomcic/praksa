const API_URL = "http://localhost:3001/tasks";

export const getTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Cant fetch tasks.");
    return await response.json();
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};

export const toggleTaskCompletedById = async (id) => {
  const current = await fetch(`${API_URL}/${id}`).then((res) => res.json());
  const updated = {
    completed: !current.completed,
  };

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  });

  return await response.json();
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    return true;
  } catch (err) {
    console.error("deleteTask error:", err);
    return false;
  }
};

export const addTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to add task");
    }

    return await response.json();
  } catch (err) {
    console.error("addTask error:", err);
    return null;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    return await response.json();
  } catch (err) {
    console.error("updateTask error:", err);
    return null;
  }
};
