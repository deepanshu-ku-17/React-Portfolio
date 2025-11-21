import React from "react";

export default function Portfolio() {
    return (
        <section className="portfolio" id="projects">
            <div className="mid-text">
                <span className="h-line"><i className="ri-shining-2-line"></i> Projects</span>
                <h2>My <span>Work</span></h2>
            </div>
            <div className="portfolio-content">
                <div className="p-card">
                    <div className="p-img">
                        <img src="src/public/images/Blockaid.jpg" alt="BlockAid" />
                    </div>
                    <div className="p-info">
                        <div className="p-left">
                            <h3>BlockAid</h3>
                            <h6>Blockchain-Based NGO Funding Transparency System.</h6>
                        </div>
                        <div className="p-right">
                            <a href="https://github.com/deepanshu-ku-17/NGO">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-card">
                    <div className="p-img">
                        <img src="src/public/images/e waste.jpg" alt="E-Waste" />
                    </div>
                    <div className="p-info">
                        <div className="p-left">
                            <h3>Cycle Sustain Now</h3>
                            <h6>Website help you find best E-Waste recycling stations according to your waste.</h6>
                        </div>
                        <div className="p-right">
                            <a href="https://github.com/deepanshu-ku-17/e-waste-recycle">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-card">
                    <div className="p-img">
                        <img src="src/public/images/elearning.png" alt="Syntax Sphere" />
                    </div>
                    <div className="p-info">
                        <div className="p-left">
                            <h3>Syntax Sphere</h3>
                            <h6>Website contain Learning material.</h6>
                        </div>
                        <div className="p-right">
                            <a href="https://github.com/deepanshu-ku-17/E-Learning-Platform">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
