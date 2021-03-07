import axios from "axios";
import React, { useState, useEffect } from "react";
import { Client_ID, Client_SECRET } from "../../keys";
import Chart from "../../utils/Chart/Chart";
import Profile from "../../utils/Profile/Profile";
import "./Detail.css";
import GhPolyglot from "gh-polyglot";
import Repositories from "../../utils/Repositories/Repositories";

const Detail = ({ history, match }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading1, setLoading1] = useState(true);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const getLangData = (username) => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
        setError(err);
      }
      console.log(stats);
      setLangData(stats);
    });
  };

  const getRepoData = (username) => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setRepoData(json);
      })
      .catch((error) => {
        setError({ active: true, type: 200 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.id}?client_id=${Client_ID}&client_secret=${Client_SECRET}`
      )

      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        setLoading1(false);
      })
      .catch((err) => {
        console.log(err);
        setError("No user found with the username");
        setLoading1(false);
      });
    getLangData(match.params.id);
    getRepoData(match.params.id);
  }, [match.params.id]);
  return (
    <div className="detail-screen">
      <div className="detail-screen-profile pt-5 pb-5">
        {loading1 ? (
          <div className="loading-text">
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : error.length > 0 ? (
          <div className="error-text">{error}</div>
        ) : (
          user && (
            <Profile
              image={user.avatar_url}
              name={user.name}
              login={user.login}
              url={user.html_url}
              date={user.created_at}
              followers={user.followers}
              following={user.following}
              repos={user.public_repos}
            />
          )
        )}
      </div>
      <div className="detail-screen-chart">
        {langData && repoData && <Chart langs={langData} repos={repoData} />}
      </div>
      {repoData && (
        <div className="detail-screen-repo mt-5">
          <div className="container">
            <div className="detail-screen-repo-heading">Top Repositories</div>
            <Repositories repos={repoData} />
          </div>
        </div>
      )}
    </div>
  );

  // return loading ? (
  //   <div class="spinner-border text-success" role="status">
  //     <span class="sr-only">Loading...</span>
  //   </div>
  // ) :error.length>0 ? (
  //   <div>Error</div>
  // ):(<div>no error</div>);
};

export default Detail;
