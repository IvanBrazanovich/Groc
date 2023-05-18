import { Plus, PlusCircle } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addComponentToProject } from "../features/project/projectSlice";
import arrayComponents from "../options/componentOptions";

const SideLayoutPage = () => {
  const [type, setType] = useState(false);

  const dispatch = useDispatch();

  const addComponent = (item) => {
    dispatch(addComponentToProject(item));
  };
  return (
    <aside>
      <h4>Add Component</h4>
      <ListGroup>
        {arrayComponents?.map((item) => {
          return (
            <ListGroup.Item key={item}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => addComponent(item)}
              >
                {item}
                <PlusCircle weight="regular" size={25} />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </aside>
  );
};

export default SideLayoutPage;
