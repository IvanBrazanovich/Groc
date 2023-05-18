import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import FormCreate from "./projectComponents/FormCreate";
import { FORMULARIO } from "../options/componentOptions";

const optionsComponent = {
  [FORMULARIO]: FormCreate,
};

const ProjectInCreation = () => {
  // state
  const [gridWidth, setGridWidth] = useState(100);

  // React Redux
  const { project } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const divChange = useRef(null);
  // On resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(project);

  const handleResize = () => {
    const computedStyle = getComputedStyle(divChange.current);
    const elementWidth = divChange.current.clientWidth; // width with padding

    const contentWidth =
      elementWidth -
      (parseFloat(computedStyle.paddingLeft) +
        parseFloat(computedStyle.paddingRight));
    setGridWidth(contentWidth);
  };

  const changeLayout = (e) => {
    console.log(e);
    if (!e.length) return;

    if (e[e.length - 1].i === "__dropping-elem__") return;
    dispatch(layoutShift(e));
  };

  return (
    <div ref={divChange}>
      <GridLayout
        className="layout"
        layout={project?.layout}
        rowHeight={30}
        width={1200}
        allowOverlap={false}
      >
        {project?.components?.map((component) => {
          const FuncionComponente = optionsComponent[component.componentType];
          return (
            <div key={component.id} style={{ overflow: "hidden" }}>
              <FuncionComponente />
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default ProjectInCreation;
