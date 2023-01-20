import React from "react";
import useFetchUsers from "../customHooks/useFetchUsers";

const AddTask = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sellected, setSellected] = React.useState("");

  const refreshPage = () => {
    window.location.reload(true);
  };

  const { user, loading, error } = useFetchUsers(
    "http://localhost:4000/api/v1/register"
  );
  //console.log(user);

  const handleSelect = (e) => {
    setSellected(e.target.value);
    //console.log(e.target.value);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        id: sellected,
      }),
    });
    const data = await response.json();
    //console.log(data);
    if (data) {
      console.log(`Task added successfully: ${(title, description)}`);
      setTitle("");
      setDescription("");
    } else {
      console.log("Error adding task");
    }
    refreshPage();
  };
  //console.log(sellected);
  return (
    <div>
      <br></br>
      <h3>Add Task</h3>
      <form onSubmit={handleAddTask}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br></br>
        <br></br>
        <select value={sellected} onChange={handleSelect}>
          <option>Selecionar utilizador</option>
          {user?.map((user) => {
            return (
              <option key={user?._id} value={user?._id}>
                {user?.username}
              </option>
            );
          })}
        </select>
        <br></br>
        <br></br>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
