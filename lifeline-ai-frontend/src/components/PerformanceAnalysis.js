import React from "react";
import "./PerformanceAnalysis.css";

function PerformanceAnalysis() {
  return (
    <div className="section">
      <h2>Performance Analysis</h2>
      <div className="scores">
        <div className="score-box">
          <h3>8/10</h3>
          <p>Total Score</p>
        </div>
        <div className="score-box">
          <h3>7/10</h3>
          <p>Professionalism</p>
        </div>
        <div className="score-box">
          <h3>8/10</h3>
          <p>Responsiveness</p>
        </div>
      </div>
      <div>
        <h3>Strengths</h3>
        <ul>
          <li>Responded quickly to the emergency.</li>
        </ul>
        <h3>Weaknesses</h3>
        <ul>
          <li>Missed asking specific details about the grandparents' location.</li>
        </ul>
        <h3>Improvements</h3>
        <ul>
          <li>Include safety tips while waiting for responders.</li>
        </ul>
      </div>
    </div>
  );
}

export default PerformanceAnalysis;
