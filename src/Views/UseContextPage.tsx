import React, { useState } from "react";
import { Flex, H1, Hr } from "@tpr/core";
import ContextFunctionalComponent from "../Components/ContextFunctionalComponent";
import ContextClassComponent from "../Components/ContextClassComponent";
import { ArrowButton } from "@tpr/layout";
import { Link } from "react-router-dom";

export const AppContext = React.createContext({
  driverId: "1",
  setDriverId: (id: string) => {},
  driverName: "Alice",
  setDriverName: (name: string) => {},
  currentTeam: "Ferrari",
  setCurrentTeam: (name: string) => {},
});

const UseContextPage = () => {
  const [driverId, setDriverId] = useState("2");
  const [driverName, setDriverName] = useState("Bob");
  const [currentTeam, setCurrentTeam] = useState("McLaren");

  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <AppContext.Provider
        value={{
          driverId,
          setDriverId,
          driverName,
          setDriverName,
          currentTeam,
          setCurrentTeam,
        }}
      >
        <H1>UseContextPage</H1>
        <Hr />
        <ContextFunctionalComponent />
        <Hr />
        <ContextClassComponent />
        <Hr />
        <Flex cfg={{ justifyContent: "flex-end" }}>
          <Link to="/useEffect">
            <ArrowButton title="Next" iconSide="right" pointsTo="right" />
          </Link>
        </Flex>
      </AppContext.Provider>
    </Flex>
  );
};

export default UseContextPage;
