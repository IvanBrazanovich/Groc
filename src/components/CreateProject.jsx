import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProject,
  setAlertWithTimeOut,
} from "../features/project/projectSlice";
import useRedirect from "../hooks/useRedirect";
import ModalApp from "./ModalApp";
import MyAlert from "./MyAlert";

const CreateProject = ({ show, setShow }) => {
  const [projectName, setProjectName] = useState("");
  const [redirectId, setRedirectId] = useState("");

  useRedirect(`new-layout/${redirectId}`);

  const dispatch = useDispatch();

  const handleCreateProject = async () => {
    if (projectName.length < 4) {
      // string is valid
      return dispatch(
        setAlertWithTimeOut({
          msg: "Must be at least 4 characters long",
          error: true,
        })
      );
    }

    const response = await dispatch(addProject(projectName));

    setRedirectId(response.payload.id);
  };

  const inputStyles = {
    width: "100%",
    outline: "none",
    borderRadius: "0.3rem",
    padding: "0.4rem ",
  };
  return (
    <ModalApp
      handleCreateProject={handleCreateProject}
      show={show}
      setShow={setShow}
    >
      <MyAlert />
      <input
        type="text"
        style={inputStyles}
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
    </ModalApp>
  );
};

export default CreateProject;
