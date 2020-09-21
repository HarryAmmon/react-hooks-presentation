import { Button, Flex, H2, P } from "@tpr/core";
import { FFInputText, Form } from "@tpr/forms";
import React from "react";
import { AppContext } from "../Views/UseContextPage";

export default class ContextClassComponent extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <Flex cfg={{ flexDirection: "column" }}>
            <H2>Context Class Component</H2>
            <Form
              onSubmit={(values) => {
                context.setDriverId(values.driverId);
                context.setDriverName(values.driverName);
                context.setCurrentTeam(values.teamName);
              }}
              initialValues={{
                driverId: context.driverId,
                driverName: context.driverName,
                teamName: context.currentTeam,
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FFInputText name="driverId" label="Driver ID" />
                  <FFInputText name="driverName" label="driverName" />
                  <FFInputText name="teamName" label="Team Name" />
                  <Button type="submit">Update</Button>
                </form>
              )}
            </Form>
          </Flex>
        )}
      </AppContext.Consumer>
    );
  }
}
