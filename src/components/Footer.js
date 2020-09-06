import React from "react";
import { Link } from "react-router-dom"

const profile = {
    firstName: "Lan",
    middleName: "Simon",
    lastName: "Xu",
    fullName: "Lan Simon Xu",
    headline: "Enjoys hard work, action oriented and full of energy for the challenges",
    skills1: ["Javascript", "MySQL", "MongoDB"],
    skills2: ["Node", "Express", "React"],
    phone: "(720) 397-8719",
    email: "xulan20907@gmail.com",
    github: "https://github.com/Simon-Xu-Lan",
    linkedIn: "www.linkedin.com/in/lan-xu-b51997ba"
}


const Footer = () => {
    return (
        <footer className="page-footer blue darken-1">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">{profile.fullName}</h5>
                        <p className="grey-text text-lighten-4">{profile.headline}</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="white-text">Skills</h5>
                            </div>
                            <div className="col s3 m6 l4">
                                <ul>
                                    {profile.skills1.map((skill, index) => <li key={index}>{skill}</li> )}
                                </ul>
                            </div>
                            <div className="col s3 m6 l4">
                                <ul>
                                    {profile.skills2.map((skill, index) => <li key={index}>{skill}</li> )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="footer-copyright">
                    <div className="container">
                    © 2020 Copyright Text
                    </div>
                </div>
        </footer>        

    )
}

export default Footer;