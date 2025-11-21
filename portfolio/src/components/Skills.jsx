import React from "react";
import { Link } from "react-router-dom";


export default function Skills(){
    return (
        <section className="skills" id="skills">
            <div className="skill-content">
                <span className="skill-h-line"><i class="ri-shining-2-line"></i>Skills</span>
                <div className="learned">
                    <h2>What I <span>learned</span></h2>
                    <div className="skill-row">
                        <div className="skill-box"><img src="src/public/images/Java.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/Python.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/php.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/js.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/React.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/Power Bi.png" alt="skill" /></div>
                    </div>
                </div>
                <div className="learned">
                    <h2>What I'm <span>learning</span></h2>
                    <div className="skill-row">
                        <div className="skill-box"><img src="src/public/images/mern.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/Solidity.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/Web3.png" alt="skill" /></div>
                        <div className="skill-box"><img src="src/public/images/Blockchain.com_.png" alt="skill" /></div>
                    </div>
                </div>
            </div>
            <div class="certificate">
                <h2>Here Are My <span>certificate</span></h2>
                <div class="h-btn">
                <Link to="/certificates" className="btn1">
                    certificate
                    <i class="ri-arrow-right-s-line"></i>
                </Link>
                <a href="src/public/Resume.pdf" class="btn2">
                    Download CV
                    <i class="ri-download-2-line"></i>
                </a>
            </div>
        </div>
        </section>
    );
}
