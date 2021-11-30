import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css'
const ProjectCard=({project}) => {
    const {id,projectName, summary, client, server, live, img, points}=project;
    const thumbImg=img[3];
    return (
        <div className='project-container container'>
            <div className="blog-post d-flex align-items-center p-5">
                <div className="blog-post-img">
                    <img className='thumb-img w-100' src={thumbImg} alt="" />
                </div>
                <div className="blog-post-info">
                    <div className="blog-post-date links text-start">
                        <span>Live Site Preview</span>
                    </div>
                    <h1 className='blog-post-title text-start'>{projectName}</h1>
                    <p className='blog-post-text text-start'>{summary}</p>
                    <Link to={`/project/${id}`}> <button className='blog-post-cta'>Read More</button> </Link>


                </div>

            </div>

        </div>
    );
};

export default ProjectCard;