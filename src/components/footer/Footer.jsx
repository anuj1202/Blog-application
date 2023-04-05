import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./footer.css"
export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p> All right reserved - Design & Developed by Apex, Inc</p>
          <div className='social'>
            <a href="https://www.facebook.com/"><BsFacebook className='icon' /></a>
            <a href="https://www.instagram.com/"><RiInstagramFill className='icon' /></a>
            <a href="https://twitter.com/login?lang=en"><AiFillTwitterCircle className='icon' /></a>
            <a href="https://www.linkedin.com/login"><AiFillLinkedin className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
