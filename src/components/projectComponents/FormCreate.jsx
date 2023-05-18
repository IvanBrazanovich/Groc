import React, { useState } from "react";
import {
  Button,
  Container,
  ListGroup,
  OverlayTrigger,
  Popover,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";

import styles from "../../styles/components/forms.module.scss";
import { DotsThree, DotsThreeCircleVertical } from "@phosphor-icons/react";

function FormCreate() {
  // initialize the form data with an empty array of fields
  const [formData, setFormData] = useState({ fields: [] });
  const [styleNumber, setStyleNumber] = useState(1);
  // function to add a new field to the form data
  const addField = (e) => {
    const elementType = e.target?.attributes?.type?.value;

    if (!elementType) {
      return;
    }

    setFormData({
      ...formData,
      fields: [
        ...formData.fields,
        {
          id: Date.now(),
          type: elementType,
          label: elementType,
        },
      ],
    });
  };

  // function to update a field in the form data
  const updateField = (id, fieldData) => {
    const updatedFields = formData.fields.map((field) => {
      if (field.id === id) {
        return { ...field, ...fieldData };
      }
      return field;
    });
    setFormData({ ...formData, fields: updatedFields });
  };

  // function to remove a field from the form data
  const removeField = (id) => {
    const updatedFields = formData.fields.filter((field) => field.id !== id);
    setFormData({ ...formData, fields: updatedFields });
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Choose type of input</Popover.Header>
      <Popover.Body>
        <Container
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onClick={(e) => addField(e)}
        >
          <Button type="date">Calendar</Button>
          <Button type="text">Text</Button>
          <Button type="email">Email</Button>
          <Button type="password">Password</Button>
        </Container>
      </Popover.Body>
    </Popover>
  );
  const popOverLabel = (props) => {
    const field = props.popper?.state?.options?.field;

    return (
      <Popover id="popover-basic" {...props}>
        <Popover.Header as="h3">Input settings</Popover.Header>
        <ListGroup className={styles.listSettings}>
          <ListGroup.Item onClick={() => removeField(field.id)}>
            Remove Field
          </ListGroup.Item>
        </ListGroup>
      </Popover>
    );
  };
  const popOverForm = (props) => {
    return (
      <Popover id="popover-basic" {...props}>
        <Popover.Header as="h3">Form settings</Popover.Header>
        <ListGroup className={styles.listSettings}>
          <ListGroup.Item onClick={(e) => setStyleNumber(1)}>
            Style 1
          </ListGroup.Item>
          <ListGroup.Item onClick={(e) => setStyleNumber(2)}>
            Style 2
          </ListGroup.Item>
          <ListGroup.Item onClick={(e) => setStyleNumber(3)}>
            Style 3
          </ListGroup.Item>
        </ListGroup>
      </Popover>
    );
  };

  // render the form fields based on the form data
  const formFields = formData.fields.map((field) => {
    return (
      <div key={field.id} className={styles.input__style}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            inputtype="label"
            placeholder="Change label..."
            type="text"
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                ...field,
                label: e.target.value,
              })
            }
          />
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popOverLabel}
            popperConfig={{ field }}
          >
            <DotsThreeCircleVertical
              weight="regular"
              style={{ cursor: "pointer" }}
            />
          </OverlayTrigger>
        </div>
        <input
          type={field.type === "password" ? "text" : field.type}
          placeholder="Change placeholder..."
          value={field.placeholder}
          onChange={(e) =>
            updateField(field.id, { ...field, placeholder: e.target.value })
          }
        />
      </div>
    );
  });
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button>Add Field</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popOverForm}>
          <div>
            Form settings <DotsThreeCircleVertical />
          </div>
        </OverlayTrigger>
      </div>
      <div
        className={`  ${styles.form__style} ${
          styles[`form__style--${styleNumber}`]
        } `}
      >
        {formFields}
        {formData?.fields?.length > 0 && <button>Submit</button>}
      </div>
    </div>
  );
}

export default FormCreate;
