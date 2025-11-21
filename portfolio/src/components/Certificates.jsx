import React from "react";

const certificates = [
    { id:1, file: "/certificates/1.jpg", title: "Internship Certificate" },
    { id:2, file: "/certificates/2.jpg", title: "Internship Certificate" },
    { id:3, file: "/certificates/3.jpg", title: "BootCamp Certificate" },
    { id:4, file: "/certificates/4.jpg", title: "Coding Certificate" },
    { id:5, file: "/certificates/5.jpg", title: "Sports Certificate 1" },
    { id:6, file: "/certificates/6.jpg", title: "Sports Certificate 2" },
    { id:7, file: "/certificates/7.jpg", title: "Sports Certificate 3" }
];

export default function Certificates(){
    return (
        <div style={{padding: '50px',
            background: 'var(--bg-color)', 
            minHeight: '100vh',
            marginTop:'120px'}}>
            <h1 style={{textAlign:'center', marginBottom: '40px'}}>My Certificates</h1>
            <div className="certificate-grid">
                {certificates.map(c => (
                <a key={c.id} className="certificate-box" href={c.file} target="_blank" rel="noreferrer">
                    <img src="/certificates/doc.png" alt={c.title} />
                    <div className="certificate-title">{c.title}</div>
                </a>
                ))}
            </div>
        </div>
    );
}
