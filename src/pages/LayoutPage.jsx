import React from "react";
import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import FormCreate from "../components/projectComponents/FormCreate";
import SideLayoutPage from "../components/SideLayoutPage";

const LayoutPage = () => {
  return (
    <Container xs={3}>
      <Col>
        <SideLayoutPage />
      </Col>
      <Col xs={9}>
        <FormCreate />
      </Col>
    </Container>
  );
};

export default LayoutPage;
