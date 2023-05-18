import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideLayoutPage from "../components/SideLayoutPage";
import ProjectInCreation from "../components/ProjectInCreation";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getProject, getProjects } from "../features/project/projectSlice";
import MyAlert from "../components/MyAlert";
import useRedirect from "../hooks/useRedirect";

const LayoutPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useRedirect("/app");

  useEffect(() => {
    const call = async () => {
      await dispatch(getProjects());
      console.log(params);
      dispatch(getProject(params.token));
    };
    call();
  }, []);

  return (
    <Container>
      <Row>
        <MyAlert />
        <Col xs={2}>
          <SideLayoutPage />
        </Col>
        <Col xs={10}>
          <ProjectInCreation />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutPage;
