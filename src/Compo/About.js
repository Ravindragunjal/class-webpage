import React from "react";
import './About.css';
import about from '../Images/about.png';

function About (){
    return(
        <>
             <div className="aboutback">
                <center><h1 className="head">About Us</h1></center>
                <div className="underline"></div>
             </div>
             <div className="photos">
                <img src={about} alt="photo" className="photo"/>
             </div>

             <div className="about">
                <p>Pentagonspace would be the focal point for the people who wants to master the future with niche
                     technologies and the client who are in search of resources can be deployed from the fist day of work.
                </p>
                <p>we are a team of passionate developers who love creating awesome appps.</p>
                <p>our mission is to make the world a better place through Technology</p>

             </div>

        </>

    );
} export default About;
