import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard2.css'
const ProjectCard2=({project}) => {
    const {id,projectName, summary, client, server, live, img, points}=project;
    const thumbImg=img[3];
    return (
        <div>
<div className="d-flex justify-content-center align-items-center">
<div class="card mb-3 card-container">
<div className="row justify-content-center align-items-center">
<img className='img-fluid col-md-4' src={thumbImg} alt="" />
  <div class="card-body col-md-7">
     <h5 class="card-title project-name fs-3 fw-bold">{projectName}</h5>
    <p class="card-text summary">{summary}</p>
    <Link to={`/project/${id}`}> <button className='button-71'>Read More</button> </Link>
  </div></div>
</div></div>
</div>


    );
};

export default ProjectCard2;