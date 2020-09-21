import { Button, Flex, H3, P } from "@tpr/core";
import React from "react";

interface IState {
  count: number;
}

export default class UseStateClassComponent extends React.Component<
  {},
  IState
> {
  constructor(props: any) {
    super(props);
    this.state = { count: 101 };
  }

  render() {
    return (
      <Flex cfg={{ flexDirection: "column" }}>
        <H3>Class Component Example</H3>
        <Flex cfg={{ justifyContent: "space-between" }}>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count - 100,
              }))
            }
          >
            -100
          </Button>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count - 10,
              }))
            }
          >
            -10
          </Button>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count - 1,
              }))
            }
          >
            -1
          </Button>
          <P tag="b">Count value:</P>
          <P>{this.state.count}</P>
          <Button
            onClick={() => this.setState((previousState) => ({ count: 0 }))}
          >
            Reset
          </Button>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count + 1,
              }))
            }
          >
            +1
          </Button>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count + 10,
              }))
            }
          >
            +10
          </Button>
          <Button
            onClick={() =>
              this.setState((previousState) => ({
                count: previousState.count + 100,
              }))
            }
          >
            +100
          </Button>
        </Flex>
      </Flex>
    );
  }
}
