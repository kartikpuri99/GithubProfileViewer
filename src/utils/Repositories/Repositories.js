import React from "react";
import "./Repositories.css";
import langColors from "../langColors";

const Repositories = (props) => {
  return (
    <div className="row mt-5">
      {props.repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
        .slice(0, 8)
        .map((repo) => (
          <div className="col-lg-3 col-md-6 mb-4" key={repo.id}>
            <div className="repo-card">
              <a href={repo.html_url} className="repo-card-link">
                <div className="repo-card-heading">
                  <i className="far fa-bookmark"></i> {repo.name}
                </div>
                <div className="repo-card-description mt-2">
                  {repo.description}
                </div>
                <div className="repo-card-extras mt-3">
                  <div className="repo-card-icons">
                    <div>
                      <i className="fas fa-star"></i>{" "}
                      {repo.stargazers_count.toLocaleString()}
                    </div>
                    <div className="px-3">
                      <i className="fas fa-code-branch"></i>{" "}
                      {repo.forks.toLocaleString()}
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="language"
                        style={{ backgroundColor: langColors[repo.language] }}
                      />
                      {repo.language}
                    </div>
                  </div>
                  <div className="spacer"></div>
                  <div className="repo-card-size">
                    {repo.size.toLocaleString()} KB
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Repositories;
