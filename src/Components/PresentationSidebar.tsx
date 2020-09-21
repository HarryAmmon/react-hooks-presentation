import React from "react";
import { Sidebar } from "@tpr/layout";
import { useHistory, useLocation, matchPath } from "react-router-dom";

const PresentationSidebar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Sidebar
      history={history}
      location={location}
      matchPath={matchPath}
      title={"React Hooks Presentation"}
      titlePath={"/"}
      sections={[
        {
          title: "State Management",
          order: 1,
          links: [
            { name: "useState", path: "/useState", completed: true },
            { name: "useReducer", path: "/useReducer", completed: true },
            { name: "useContext", path: "/useContext", completed: true },
          ],
        },
        {
          title: "Lifecycle Management",
          order: 2,
          links: [{ name: "useEffect", path: "/useEffect", completed: true }],
        },
      ]}
    />
  );
};

export default PresentationSidebar;
