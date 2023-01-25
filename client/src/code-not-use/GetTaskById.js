import React from "react";
import useFetchTaskId from "../components/customHooks/useFetchTaskId";

const GetTaksById = (props) => {
  const { task: data } = useFetchTaskId(
    `http://localhost:4000/api/v1/tasks/${props.taskID}`
  );

  return (
    <div>
      {data?.task.title !== undefined ? ` task: ${data?.task.title}` : ""}
    </div>
  );
};

export default GetTaksById;
