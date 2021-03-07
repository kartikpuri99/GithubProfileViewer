import React, { useState } from "react";
import Particles from "react-particles-js";
import "./Search.css";

const Search = ({ history, match }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/user/" + text);
  };
  return (
    <div className="search-screen">
      <Particles
        height="100vh"
        width="100%"
        className="particles-custom"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            color: { value: "#40916cff" },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="center-element">
        <div className="search-head-icon text-center">
          <i className="fab fa-github"></i>
        </div>
        <div className="search-heading m-3">Github Profile Viewer</div>
        <div className="search-bar">
          <form className="form-group d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Type Your Github Username"
            />
            <button
              type="submit"
              className="btn btn-success btn-rounded search-button"
            >
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
