import { Flex, H2 } from "@tpr/core";
import React, { useEffect, useState } from "react";
import RepositoryComponent from "./RepositoryComponent";
import axios from "axios";

const UseEffectFunctionalComponent = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/orgs/thepensionsregulator/repos").then(
      (response) => {
        console.log(response);
        setRepos(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Flex cfg={{ flexDirection: "column" }}>
      <H2>Use Effect Functional Component</H2>
      {repos.map((repo: any) => (
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
};

export default UseEffectFunctionalComponent;
