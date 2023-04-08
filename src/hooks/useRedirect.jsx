import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeRedirect } from "../features/project/projectSlice";

const useRedirect = (toWhere, ...dependencies) => {
  const { redirectSuccess, alert } = useSelector((state) => state.projects);
  // React Router
  const navigateFunction = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (redirectSuccess && !Object.keys(alert).length) {
      navigateFunction(toWhere);
      dispatch(changeRedirect());
    }
  }, [redirectSuccess, ...dependencies]);
};

export default useRedirect;
