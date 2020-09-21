import { Button, Flex, H2, Hr, P } from "@tpr/core";
import { FFInputNumber, FFInputText, Form } from "@tpr/forms/";
import React, { useReducer } from "react";

type Car = {
  color: string;
  numOfDoors: number;
  currentFuel: number;
  maxFuel: number;
};

type Actions =
  | { type: "CHANGE_COLOR"; color: string }
  | { type: "LOSE_DOOR" }
  | { type: "FIX_CAR" }
  | { type: "REFUEL"; amount: number }
  | { type: "GO_RACING" };

const reducer = (originalCar: Car, action: Actions) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      originalCar.color = action.color;
      return { ...originalCar };
    case "LOSE_DOOR":
      --originalCar.numOfDoors;
      return { ...originalCar };
    case "FIX_CAR":
      originalCar.numOfDoors = 3;
      originalCar.currentFuel = 500;
      return { ...originalCar };
    case "REFUEL":
      originalCar.currentFuel += action.amount;
      return { ...originalCar };
    case "GO_RACING":
      originalCar.currentFuel = 10;
      --originalCar.numOfDoors;
      return { ...originalCar };
    default:
      return { ...originalCar };
  }
};

const initialCar: Car = {
  color: "red",
  numOfDoors: 3,
  currentFuel: 100,
  maxFuel: 500,
};

const UseReducerFunctionalComponent = () => {
  const [state, dispatcher] = useReducer(reducer, initialCar);
  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H2>Use Reducer Functional Component</H2>
      <Hr />
      <P>Car Color: {state.color}</P>
      <P>Number of doors: {state.numOfDoors}</P>
      <P>Fuel remaining: {(state.currentFuel / state.maxFuel) * 100}%</P>
      <Flex cfg={{ flexDirection: "column" }}>
        <Form
          onSubmit={(values: any) =>
            dispatcher({ type: "REFUEL", amount: values.fuel })
          }
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Flex cfg={{ alignItems: "flex-end" }}>
                <FFInputNumber label="Fuel amount" name="fuel" />
                <Button cfg={{ ml: 2 }} type="submit">
                  Refuel
                </Button>
              </Flex>
            </form>
          )}
        </Form>
        <Form
          onSubmit={(values: any) =>
            dispatcher({ type: "CHANGE_COLOR", color: values.color })
          }
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Flex cfg={{ alignItems: "flex-end" }}>
                <FFInputText label="new color" name="color" />
                <Button cfg={{ ml: 2 }} type="submit">
                  Change color
                </Button>
              </Flex>
            </form>
          )}
        </Form>
        <Flex cfg={{ my: 2 }}>
          <Button
            type="button"
            onClick={() => {
              dispatcher({ type: "GO_RACING" });
            }}
          >
            Go racing
          </Button>
        </Flex>
        <Flex>
          <Button
            type="button"
            onClick={() => {
              dispatcher({ type: "FIX_CAR" });
            }}
          >
            REPAIR
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UseReducerFunctionalComponent;
