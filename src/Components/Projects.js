import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={NewsletterImage} projectName="LionsHeart" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="OMG" />
        <ProjectBox projectPhoto={TindogImage} projectName="MrPrAndCo" />
      </div>

    </div>
  )
}

export default Projects