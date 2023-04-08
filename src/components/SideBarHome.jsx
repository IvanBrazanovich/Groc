import {
  CodesandboxLogo,
  FolderDashed,
  Gear,
  GridFour,
  Heart,
  Plus,
  Table,
  UsersFour,
  UsersThree,
  WaveSawtooth,
} from "@phosphor-icons/react";
import React from "react";
import { Accordion, Container, Stack } from "react-bootstrap";
import styles from "../styles/components/SideBarHome.module.scss";

const workspaces = ["Primero", "Segundo", "Tercero", "Cuarto"];

const SideBarHome = () => {
  return (
    <Container>
      <Stack className={styles.stackWrapper} gap={1}>
        <div>
          <Table /> Projects
        </div>
        <div>
          <FolderDashed /> Templates
        </div>
        <div>
          <WaveSawtooth /> Home
        </div>
      </Stack>

      <div className={styles.projects}>
        <p className={styles.project__header}>
          Workspaces
          <span>
            <Plus />
          </span>
        </p>

        <Accordion flush>
          {workspaces.map((item, index) => {
            return (
              <Accordion.Item
                key={index}
                eventKey={index}
                className={styles.accordionItem}
              >
                <Accordion.Header className={styles.accordionItem__header}>
                  <div>
                    <CodesandboxLogo /> <p>{item}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Stack className={styles.stackWrapper} gap={1}>
                    <div>
                      <Table /> Projects
                    </div>
                    <div>
                      <Heart /> Favourites
                    </div>
                    <div>
                      <GridFour /> Views
                    </div>
                    <div>
                      <UsersThree /> Users
                    </div>
                    <div>
                      <Gear /> Settings
                    </div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
};

export default SideBarHome;
