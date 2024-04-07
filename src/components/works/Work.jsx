/* eslint-disable no-template-curly-in-string */
import React from 'react'
import "./work.scss"
import {useState} from "react";

function Work() {
  const [currentSlide, setCurrentSlide] =  useState(0)
  const data = [
    {
      id:1,
      icon:"assets/smartphone.png",
      title:"featured",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
      img:"assets/html.png",
    },
    {
      id:2,
      icon:"assets/smartphone.png",
      title:"mobile",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
      img:"assets/html.png",
    },
    {
      id:3,
      icon:"assets/smartphone.png",
      title:"web",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
      img:"assets/html.png",
    },
    {
      id:4,
      icon:"assets/smartphone.png",
      title:"branding",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
      img:"assets/html.png",
    },
  ]

  const handleClick = (way) => {
  way === "left" ? setCurrentSlide(currentSlide > 0? currentSlide - 1: 2) :
  setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
   }
  return (
    <div className='works' id='works'>
       <div className = "slider" style = {{ transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) =>( 
          <div className="container">
            <div className = 'item'>
              <div className="left">
                 <div className="leftContainer">
                  <div className="imgContainer">
                      <img src={d.icon} alt=''/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                 </div>
              </div>
              <div className="right">
                  <img src="assets/html.png" alt="" />
              </div>
            </div>
          </div>))}
       </div>
       <img src = "assets/arrow.png" className = "arrow left" alt = "" onClick = {() => handleClick("left")}/>
       <img src = "assets/arrow.png" className = "arrow right" alt = "" onClick = {() => handleClick()}/>
    </div>
  )
}

export default Work