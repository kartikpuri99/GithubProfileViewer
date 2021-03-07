import React, { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "./Chart.css";

const Chart = (props) => {
  const labels = props.langs.map((lang) => lang.label);
  const data = props.langs.map((lang) => lang.value);
  const colors = props.langs.map((lang) => lang.color);
  const backgroundColor = props.langs.map(
    ({ color }) =>
      `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
  );

  const [starChartData, setStarChartData] = useState({});

  const pieState = {
    labels: labels,
    datasets: [
      {
        label: "Top Languages",
        backgroundColor: backgroundColor,
        hoverBackgroundColor: colors,
        data: data,
      },
    ],
  };

  const barState = {
    labels: starChartData.label,
    datasets: [
      {
        label: "Most starred",
        backgroundColor: backgroundColor,
        hoverBackgroundColor: colors,
        data: starChartData.data,
      },
    ],
  };

  useEffect(() => {
    if (props.repos.length > 0) {
      const LIMIT = 5;
      const sortProperty = "stargazers_count";
      const mostStarredRepos = props.repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b[sortProperty] - a[sortProperty])
        .slice(0, LIMIT);
      const labels2 = mostStarredRepos.map((repo) => repo.name);
      const data = mostStarredRepos.map((repo) => repo[sortProperty]);
      setStarChartData({ label: labels2, data: data });
    }
  }, [props.repos.length, props.repos]);

  return (
    <div className="chart-screen">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="language-card">
              <div className="language-card-heading">Top Languages</div>
              <Pie
                data={pieState}
                options={{
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="language-card">
              <div className="language-card-heading">Most Starred</div>
              <Bar data={barState} options={{legend:{
                display:false
              }}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
