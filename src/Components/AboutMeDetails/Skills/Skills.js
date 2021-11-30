import React from 'react';
import './Skills.css'
const Skills=() => {
    return (
        <div className='my-5'>
            <h1 className='my-5 projects-title' >Skill Highlights</h1>
    <div className="d-flex container justify-content-center align-items-center">
<div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>HTML</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Javascript</span>
      </div>
      <div class="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>React</span>
      </div>
      <div class="progress-line python">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Mongo DB</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div></div>
  </div>


        </div>
    );
};

export default Skills;