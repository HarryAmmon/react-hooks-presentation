import { Flex, H1, H2, Hr, P } from "@tpr/core";
import { ArrowButton } from "@tpr/layout";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H1>React Hooks Presentation</H1>
      <Hr />
      <H2>What are React Hooks?</H2>
      <P>
        Hooks are functions that can be used inside functional components that
        allow you to access features of React.
      </P>
      <Hr />
      <Flex cfg={{ justifyContent: "flex-end" }}>
        <Link to="/usestate">
          <ArrowButton pointsTo="right" iconSide="right" title="Next" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomePage;
