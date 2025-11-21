import React from "react";

export default function About(){
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/images/about-img.png" alt="Deepanshu's Pic" />
            </div>
            <div className="about-text">
                <span className="h-line"><i class="ri-shining-2-line"></i>About Me</span>
                <h2>More <span> About Me</span></h2>
                <h5>Hello! I'm Deepanshu Kumar, a multidisciplinary Software Engineer 
                    and Web Developer based in India. I'm very passionate about the 
                    work that I do.
                </h5>
                <p>
                    I wonder if I've been changed in the night? Lets me think. Was I 
                    the same when I got up this morning? I almost think I can 
                    remember feeling a little different. Butt if I'm not the same, 
                    the next question is 'Who in the world am I?' Ah, that's the 
                    great puzzle! <br /> <br/> never imagine yourself not to be 
                    otherwise than what it might appear to others that what you were.
                </p>
                <div className="h-btn" style={{marginTop: '20px'}}>
                    <a className="btn1" href="https://wa.me/+917834868865?text=Hello%20Deepanshu%2C%20I%20want%20to%20hire%20you">Hire Me<i class="ri-arrow-right-s-line"></i></a>
                    <a className="btn2" href="/Resume.pdf">Download CV<i class="ri-download-2-line"></i></a>
            </div>
            </div>
        </section>
    );
}
