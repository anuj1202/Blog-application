import React, { useContext, useState } from "react"
import logo from "../../assets/images/apex-1.png"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"

export const Header = () => {
  const { user } = useContext(Context)

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='120px' />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
             {
                user && user.username == "Admin"?(
              <li><Link to={"admin"}>Admin</Link></li>):null
              }
            </ul>
          </nav>
          
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header> 
    </>
  )
}





