import React, { useEffect, useState } from "react";
import styles from "../../styles/getAllTasks.module.css";

const GetAllTaks = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getAllTasks = async () => {
      const response = await fetch("http://localhost:4000/api/v1/tasks");
      const data = await response.json();
      setTasks(data.tasks);
    };
    getAllTasks();
  }, []);

  return (
    <section className={styles.todoSection}>
      {tasks.map((task) => {
        return (
          <form key={task._id} className={styles.todoList}>
            <h4>{task.title}</h4>
            <input type="checkbox" size="30" />
          </form>
        );
      })}
    </section>
  );
};

export default GetAllTaks;
