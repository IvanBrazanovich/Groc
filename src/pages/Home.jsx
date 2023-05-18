import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBarApp from "../components/NavBarApp";
import Projects from "../components/Projects";
import SideBarHome from "../components/SideBarHome";
import { useDispatch } from "react-redux";
import { getProjects } from "../features/project/projectSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

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
