import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

function MyAlert({}) {
  const { alert } = useSelector((state) => state.projects);

  const variant = alert.error ? "danger" : "success";
  if (alert.msg === "" || !alert.msg) return null;
  return (
    <Alert variant={variant}>
      <p className="m-0 ">{alert.msg} </p>
    </Alert>
  );
}

export default MyAlert;
