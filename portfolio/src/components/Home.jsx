import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";



export default function Home() {
    return (
        <section className="home" id="home">
        <div className="home-text">
            <span className="h-line"><i className="ri-shining-2-line"></i>This is Deepanshu Kumar</span>
            <h1 className="hero-title">Software Engineer</h1>
            <div className="typed-wrapper">
            <span className="typed-text">
                <ReactTyped strings={["Web Developer.","Web Designer.","Java Developer.","Python Developer.","PHP Full Stack."]} typeSpeed={120} backSpeed={70} loop />
            </span></div>
            <h4>MBA (I.T Management) Pursuing & B.Tech Graduated</h4>
            <div className="social-icons" style={{marginTop: '18px'}}>
                <a href="https://github.com/deepanshu-ku-17" aria-label="github"><i className='bx bxl-github'></i></a>
                <a href="http://www.linkedin.com/in/deepanshu-kumar-5604b1239" aria-label="linkedin"><i className='bx bxl-linkedin'></i></a>
                <a href="mailto: dipanshuroy584@gmail.com" aria-label="mail"><i className='bx bx-envelope'></i></a>
                <a href="https://www.instagram.com/17_deepanshu/" aria-label="linkedin"><i className='bx bxl-instagram'></i></a>
            </div>
            <div className="h-btn" style={{marginTop: '20px'}}>
                <Link className="btn1" to="/projects">
                    Projects <i className="ri-arrow-right-s-line"></i>
                </Link>
                <a className="btn2" href="/Resume.pdf">Download CV<i className="ri-download-2-line"></i></a>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/home-img.png" alt="Deepanshu's Pic" />
        </div>
        </section>
    );
}
