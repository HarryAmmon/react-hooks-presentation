import React from "react";
import { Footer, Header } from "@tpr/layout";
import { AppWidth, DocWidth, Flex } from "@tpr/core";
import { Switch, Route } from "react-router-dom";
import PresentationSidebar from "./Components/PresentationSidebar";
import UseStatePage from "./Views/UseStatePage";
import UseReducerPage from "./Views/UseReducerPage";
import UseContextPage from "./Views/UseContextPage";
import HomePage from "./Views/HomePage";

function App() {
  return (
    <div className="App">
      <Header
        title={"React Hooks Presentation"}
        logoUrl={
          "https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-header.ashx"
        }
        onClickSchemeOptions={() => console.log("cant do that")}
        onClickLogout={() => console.log("cant do that")}
      />
      <DocWidth>
        <AppWidth>
          <Flex>
            <PresentationSidebar />
            <Flex cfg={{ p: 4 }}>
              <Switch>
                <Route exact path="/" component={() => <HomePage />} />
                <Route path="/useState" component={() => <UseStatePage />} />
                <Route
                  path="/useReducer"
                  component={() => <UseReducerPage />}
                />
                <Route
                  path="/useContext"
                  component={() => <UseContextPage />}
                />
              </Switch>
            </Flex>
          </Flex>
        </AppWidth>
      </DocWidth>
      <Footer
        logoUrl={
          "https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
        }
        onLinkClickHandler={(url) => console.log(`navigate to ${url}`)}
        links={[]}
      />
    </div>
  );
}

export default App;
