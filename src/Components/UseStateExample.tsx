import React, { useState } from "react";
import { Button, Flex, H3, P } from "@tpr/core";

const UseStateExample = () => {
  const [count, setCount] = useState<number>(101);

  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H3>Functional Component Example</H3>
      <Flex cfg={{ justifyContent: "space-between" }}>
        <Button onClick={() => setCount((prevCount) => prevCount - 100)}>
          -100
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 10)}>
          -10
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -1
        </Button>
        <P tag="b">Count value:</P>
        <P>{count.toString()}</P>
        <Button onClick={() => setCount(0)}>0</Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +1
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 10)}>
          +10
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 100)}>
          -100
        </Button>
      </Flex>
    </Flex>
  );
};

export default UseStateExample;
