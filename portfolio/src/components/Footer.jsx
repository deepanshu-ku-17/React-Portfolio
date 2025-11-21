import React from "react";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="copyright">© copyright Deepanshu Kumar All rights Reserved. {new Date().getFullYear()} Deepanshu Kumar</div>
            <div className="scroll-top"><a href="#"className="scroll-top"><i className='bx bx-up-arrow-alt'></i></a></div>
        </footer>
    );
}
