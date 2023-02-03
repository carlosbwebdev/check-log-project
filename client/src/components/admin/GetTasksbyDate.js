import React from "react";
import styles from "../../styles/admin/NewTaskByDay.module.css";
import useFetchUsers from "../customHooks/useFetchUsers";

const GetTasksbyDate = () => {
  const [team, setTeam] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [tasksData, setTasksData] = React.useState([]);

  const { user } = useFetchUsers("http://localhost:4000/api/v1/register");

  // console.log(user);
  // fetch data from server using fetch api and get method and save response in data variable and log it in console for testing purpose only and set data to state variable tasksData for rendering purpose only and if data is not found then set tasksData to false for rendering purpose only and log error in console for testing purpose only

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(team, date);

    fetch(`http://localhost:4000/api/v1/EntryDataByDay/${date}/${team}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "fail") {
          // if data is not found then set tasksData to false for rendering purpose only
          setTasksData(false);
        } else {
          setTasksData(data); // set data to state variable tasksData for rendering purpose only
        }
      });
  };
  return (
    <>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        <form
          onSubmit={handleSubmitForm}
          style={{
            display: "flex",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <select onChange={(e) => setTeam(e.target.value)}>
            <option>Select Team</option>
            {user?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.username}
                </option>
              );
            })}
          </select>
          <input
            type="date"
            style={{ width: "100%" }}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Request Tasks</button>
        </form>
      </div>

      <div
        className={styles.tableSection}
        style={{ maxWidth: "900px", margin: "0 auto", paddingBottom: "2rem" }}
      >
        <h2 style={{ textAlign: "center" }}>Taks by Date & Team</h2>
        <table>
          <thead>
            <tr>
              <th width="90px">Team</th>
              <th width="fit-content">Task</th>
              <th width="fit-content">Description</th>
              <th width="fit-content">ByWhom</th>
            </tr>
          </thead>

          {/* // if tasksData is true then render data from tasksData otherwise render No Tasks Please insert a Valid Date  
           // it was needed to have 2 .map() because tasksData is an array of objects and todos is an array of objects inside tasksData array of objects and we need to map over both of them to get data from todos array of objects inside tasksData array of objects */}

          {tasksData ? (
            tasksData?.EntryData?.map((task) => {
              // map over tasksData and save data in task variable and return jsx
              const { team, todos } = task; // destructuring data from task variable and save it in team and todos variable
              return todos?.map((todo) => {
                // map over todos and save data in todo variable and return jsx below
                return (
                  <tbody key={todo._id}>
                    <tr>
                      <td>{team}</td>
                      <td style={{ textAlign: "center" }}>{todo.title}</td>
                      <td style={{ textAlign: "right" }}>{todo.description}</td>
                      <td>{todo.byWhom}</td>
                    </tr>
                  </tbody>
                );
              });
            })
          ) : (
            <tr>
              <td style={{ borderRight: "none" }}></td>
              <td style={{ borderRight: "none" }}>
                No Tasks Please insert a Valid Date
              </td>
              <td style={{ borderRight: "none" }}></td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
};

export default GetTasksbyDate;
