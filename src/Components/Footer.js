import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Avez Pathan</h4>
      <h4>Copyright &copy; 2023 AP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Avezkhan" target='_blank'><FaGithub/></a>
        <a href="https://in.linkedin.com/in/avez-pathan-aba636204" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:avezkhan8027@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/i_m_avezkhan/" target="_blank"><AiFillInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer