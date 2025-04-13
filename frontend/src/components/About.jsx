 import React from 'react'
 import {HiOutlineArrowRight} from "react-icons/hi"
import {Link} from "react-router-dom"
 const About = () => {
   return (
    <>
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum praesentium impedit, amet fuga sequi exercitationem quia iure quod voluptatibus et accusantium laboriosam ipsa repudiandae id distinctio nobis magni, sapiente delectus sunt earum officia dignissimos. Ad pariatur maiores illum. Laboriosam, ex.
                </p>
                <Link to={"/"}>Explore Menu{" "}
                <span>
                    <HiOutlineArrowRight></HiOutlineArrowRight>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="about.png" alt="about" />
            </div>
        </div>
    </section>
    </>
   )
 }
 
 export default About
 