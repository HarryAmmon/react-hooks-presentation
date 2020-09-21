import { Button, Flex, H2 } from "@tpr/core";
import { FFInputText, Form } from "@tpr/forms";
import React, { useContext } from "react";
import { AppContext } from "../Views/UseContextPage";

const ContextFunctionalComponent = () => {
  const context = useContext(AppContext);

  const onSubmit = (values: any) => {
    context.setDriverId(values.driverID);
    context.setDriverName(values.driverName);
    context.setCurrentTeam(values.teamName);
  };
  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H2>Context Functional Component</H2>
      <Form
        onSubmit={(values) => onSubmit(values)}
        initialValues={{
          driverID: context.driverId,
          driverName: context.driverName,
          teamName: context.currentTeam,
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FFInputText label="Driver ID" name="driverID" />
            <FFInputText label="Driver Name" name="driverName" />
            <FFInputText label="Team Name" name="teamName" />
            <Button type="submit">Update</Button>
          </form>
        )}
      </Form>
    </Flex>
  );
};

export default ContextFunctionalComponent;
