import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/projects";
import Contact from "../components/Contact";

export default function HomePage() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    );
}
