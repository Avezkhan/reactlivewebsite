import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    LionsHeartDesc : `Lion's Heart - Teen Volunteers and Leaders is a non-profit that connects teen members (ages 11-17) with age-appropriate volunteer opportunities in their area through a digital platform that also helps them track service hours, earn awards (including the President's Volunteer Service Award),interact with peers.`,
    LionsHeartGithub : "https://github.com/Avezkhan",
    LionsHeartWebsite : "https://lionsheartservice.org/",

    OMGDesc : "OMG - “WFH ALL IN WALL”: The World’s First Truly 5-In-1 Home Gym with an App Based Online WFH COACH.",
    OMGGithub : "https://github.com/Avezkhan",
    OMGWebsite : "https://play.google.com/store/apps/details?id=com.wfh_app",

    MrPrAndCoDesc : `Is a platform other than our core expertise that allows people to explore the unexplored. It is one of a kind spot for people who love to hunt new stuff. Whatever your need is, you'll find a solution here. From food reviews, to travel tips, guidance for health and fitness, app reviews, suggestions for music or movies, and much more. We strive to entertain and inspire with a variety of snackable content.`,
    MrPrAndCoGithub : "https://github.com/Avezkhan",
    MrPrAndCoWebsite : "https://mrprandco.com/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox