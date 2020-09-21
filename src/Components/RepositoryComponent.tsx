import { Flex, H3, P } from "@tpr/core";
import React from "react";

const RepositoryComponent = (props: any) => (
  <Flex cfg={{ flexDirection: "column", bg: "neutral.2", p: 2, my: 2 }}>
    <H3>{props.repoName}</H3>
    <P>{props.repoDescription}</P>
    <P>Stars: {props.stars}</P>
    <P>Watchers: {props.watchers}</P>
  </Flex>
);

export default RepositoryComponent;
