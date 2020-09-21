import { Flex, H2 } from "@tpr/core";
import axios from "axios";
import React from "react";
import RepositoryComponent from "./RepositoryComponent";

export default class UseEffectClassComponent extends React.Component<
  {},
  { repos: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { repos: [] };
  }
  componentDidMount() {
    axios.get("https://api.github.com/orgs/thepensionsregulator/repos").then(
      (response) => {
        this.setState({ repos: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <Flex cfg={{ flexDirection: "column" }}>
        <H2>Use Effect Class Component</H2>
        {this.state.repos.map((repo: any) => (
          <RepositoryComponent
            key={repo.id}
            repoName={repo.name}
            repoDescription={repo.description}
            stars={repo.stargazers_count}
            watchers={repo.watchers_count}
          />
        ))}
      </Flex>
    );
  }
}
