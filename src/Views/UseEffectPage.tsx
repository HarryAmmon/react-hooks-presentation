import { Flex, H1, Hr } from "@tpr/core";
import React from "react";
import UseEffectClassComponent from "../Components/UseEffectClassComponent";
import UseEffectFunctionalComponent from "../Components/UseEffectFunctionalComponent";

const UseEffectPage = () => {
  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H1>UseEffectPage</H1>
      <Hr />
      <UseEffectFunctionalComponent />
      <Hr />
      <UseEffectClassComponent />
      <Hr />
    </Flex>
  );
};

export default UseEffectPage;
