import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard2.css'
const ProjectCard2=({project}) => {
    const {id,projectName, summary,technology, client, server, live, img, points}=project;
    const thumbImg=img[3];
    return (
        <div>
<div className="d-flex justify-content-center align-items-center">
<div class="card mb-3 card-container">
    <div className="row ">
              <div className="col-md-5 col-12 single-team ">
                <div className="d-flex align-items-center">
           <a href={live} target="_blank"><img className='card-img img-fluid' src={thumbImg} alt="" /> </a></div>
                <div className="team-text">
                  <a href={live}><h2>{projectName}</h2></a>

                  <h4 className='techno'>Technology used: {technology}</h4>
                </div>
                </div>
  <div class="card-body col-md-6">
                <h5 class="card-title fs-3 fw-bold">{projectName}</h5>
                <div className="row container g-3">
                <a href={live} className='col-lg-4' target="_blank"><button className='button-34 mx-3'>Preview</button></a>
                <a href={client} className='col-lg-4' target="_blank"><button className='button-34 mx-3'>Client Side Code</button></a>
                <a href={server} className='col-lg-4' target="_blank"><button className='button-34 mx-3'>Server Side Code</button></a></div>
                <br />
    <p class="card-text summary my-4">{summary}</p>
    <Link to={`/project/${id}`}> <button className='button-29 w-25'>Read More</button> </Link>
  </div></div>
</div></div>
</div>


    );
};

export default ProjectCard2;