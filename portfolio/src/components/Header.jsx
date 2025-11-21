import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const onScroll = () => setSticky(window.scrollY > 130);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);
    return (
        <header className={sticky ? "sticky" : ""}>
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
        <ul className={menuOpen ? "menulist open" : "menulist"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="menu-right">
            <a className="menu-btn" href="https://wa.me/917834868865?text=Hello%20Deepanshu">Let's Talk<i className="ri-message-3-line"></i></a>
            <i
                id="menu-icon"
                className={menuOpen ? "bx bx-x" : "bx bx-menu"}
                onClick={() => setMenuOpen(prev => !prev)}
            />
        </div>
        </header>
    );
}
