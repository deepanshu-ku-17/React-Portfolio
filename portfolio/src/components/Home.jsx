import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <section className="home" id="home">
        <div className="home-text">
            <span className="h-line"><i class="ri-shining-2-line"></i>This is Deepanshu Kumar</span>
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
                <a className="btn1" href="/projects">Projects<i class="ri-arrow-right-s-line"></i></a>
                <a className="btn2" href="/Resume.pdf">Download CV<i class="ri-download-2-line"></i></a>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/home-img.png" alt="Deepanshu's Pic" />
        </div>
        </section>
    );
}
