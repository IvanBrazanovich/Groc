import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBarApp from "../components/NavBarApp";
import Projects from "../components/Projects";
import SideBarHome from "../components/SideBarHome";

const Home = () => {
  return (
    <main>
      <NavBarApp />

      <Container className="mt-3">
        <Row>
          <Col className="d-none d-sm-flex" sm={3}>
            <SideBarHome />
          </Col>
          <Col sm={9}>
            <Projects />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
