import React from 'react'
import "./testimonials.scss"

function Testimonials() {

  const data = [
    {
      id:1,
      name: "Kschur",
      title:"CEO Kschur clothes",
      img:"assets/kschur.jpg",
      icon:"assets/youtube.png",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
    },
    {
      id:2,
      name: "Tricial",
      title:"Senior software engineer",
      img:"assets/tricial.jpg",
      icon:"assets/twitter.png",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
      featured: true,
    },
    {
      id:3,
      name: "Ibrahimu",
      title:"Junior Software Developer",
      img:"assets/ibrah.jpg",
      icon:"assets/instagram.png",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Expedita alias, itaque culpa aliqum voluptate. ",
    },
  ]
  return (
    <div className='testimonials' id='testimonials'>
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className = "left" alt="" />
              <img src={d.img} className = "user" alt="" />
              <img src={d.icon} className = "right" alt="" />
            </div>
            <div className="center">
            {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials