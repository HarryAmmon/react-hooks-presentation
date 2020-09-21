import { Flex, H1, Hr } from "@tpr/core";
import { ArrowButton } from "@tpr/layout";
import React from "react";
import { Link } from "react-router-dom";
import UseReducerFunctionalComponent from "../Components/UseReducerFunctionalComponent";

const UseReducerPage = () => {
  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H1>useReducer</H1>
      <UseReducerFunctionalComponent />
      <Hr />
      <Flex cfg={{ justifyContent: "flex-end" }}>
        <Link to="/useContext">
          <ArrowButton iconSide="right" title="next" pointsTo="right" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default UseReducerPage;
