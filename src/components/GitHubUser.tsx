import React, { useEffect, useState } from "react";
import axios from "axios";
import { GitHubProfile } from "../model/GitHubProfile";
import { useParams } from "react-router-dom";

type GitHubResponse = {
  login: string;
  public_repos: number;
  url: string;
};

type RouteParams = {
  userId: string;
};

const GitHubUser: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile>(
    new GitHubProfile("", 0, "")
  );

  const params = useParams<RouteParams>();

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get<GitHubResponse>(
        `https://api.github.com/users/${params.userId}`
      );
      const { login, public_repos, url } = response.data;
      setProfile(new GitHubProfile(login, public_repos, url));
    };
    getProfile();
    return () => {
      console.log("Perform some cleanup");
    };
  }, [params.userId]);

  if (profile.login) {
    return (
      <div>
        <p>Login Name: {profile.login}</p>
        <p>Repository Count: {profile.repos}</p>
        <p>Repository URL:{profile.url}</p>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default GitHubUser;
