import React from "react";
import "./Transcription.css";

function Transcription() {
  return (
    <div className="section active">
      <h2>Transcript</h2>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role dispatcher">Dispatcher</span>
          <span className="timestamp">(0:02 - 0:06)</span>
        </div>
        <div className="dialogue-content">911, what's your emergency?</div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role caller">Caller</span>
          <span className="timestamp">(0:07 - 0:08)</span>
        </div>
        <div className="dialogue-content">
          I need help! My house is on fire! The smoke is getting worse!
        </div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role caller">Caller</span>
          <span className="timestamp">(0:09 - 0:15)</span>
        </div>
        <div className="dialogue-content">
          Please help me, I think my grandparents are inside and cannot come
          out.
        </div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role dispatcher">Dispatcher</span>
          <span className="timestamp">(0:25 - 0:27)</span>
        </div>
        <div className="dialogue-content">
          Don't worry, we have tracked your location. We will send the fire team
          quickly. In the meantime, try to stay calm and move to a safe area
          away from the fire.
        </div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role caller">Caller</span>
          <span className="timestamp">(0:42 - 0:44)</span>
        </div>
        <div className="dialogue-content">
          Please send someone quickly. My grandparents are in danger.
        </div>
      </div>
      <div className="dialogue-box">
        <div className="dialogue-header">
          <span className="role dispatcher">Dispatcher</span>
          <span className="timestamp">(0:50 - 0:54)</span>
        </div>
        <div className="dialogue-content">Yes. Help is on the way, ma'am.</div>
      </div>
    </div>
  );
}

export default Transcription;
