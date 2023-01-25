import React from "react";
import useFetchUserTask from "../components/customHooks/useFetchUserTaks";
import GetTaskById from "./GetTaskById";

const GetUserTasks = (props) => {
  const { user: data } = useFetchUserTask(
    `http://localhost:4000/api/v1/register/${props.userId}`
  );

  return (
    <div>
      {data?.tasks.map((task) => {
        return (
          <div key={task._id}>
            <GetTaskById taskID={task} />
          </div>
        );
      })}
    </div>
  );
};

export default GetUserTasks;
