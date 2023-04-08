import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateProject from "./CreateProject";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={(e) => setShow(true)}>Add Project</Button>

      {show && <CreateProject show={show} setShow={setShow} />}
    </div>
  );
};

export default Projects;
