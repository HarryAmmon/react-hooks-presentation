import { Flex, H1, Hr, P } from "@tpr/core";
import { ArrowButton } from "@tpr/layout";
import React from "react";
import { Link } from "react-router-dom";
import UseStateClassComponent from "../Components/UseStateClassComponent";
import UseStateExample from "../Components/UseStateExample";

const UseStatePage = () => (
  <Flex cfg={{ flexDirection: "column" }}>
    <H1>useState</H1>
    <Hr />
    <P>
      The useState hook adds state to a functional component. It allows us to
      access and update the state of an object.
    </P>
    <UseStateExample />
    <Hr />
    <UseStateClassComponent />
    <Hr />
    <Flex cfg={{ justifyContent: "flex-end" }}>
      <Link to="/useReducer">
        <ArrowButton title="next" pointsTo="right" iconSide="right" />
      </Link>
    </Flex>
  </Flex>
);

export default UseStatePage;
