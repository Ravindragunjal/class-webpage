import React from "react";
import './Courses.css';
import java from '../Images/java.png';
import python from '../Images/python.jfif';
import software from '../Images/software.png';

function Courses(){
    return(
        <>
        <div className="aboutback">
            <center>
                <h1 className="head">Our Unified Courses</h1>
            </center>
            <div className="underline"></div>
               

        </div>
        <div className="course-details">
               
               <div className="center">
                <img src={java} alt="photo" className="java-img"/>
                <h1>Java Full Stack </h1>
               </div>
        </div>
        <br></br>
        <div className="course-details">
            <div className="center">
            <img src={python} alt="photo" className="java-img"/>
                <h1>Python Full Stack </h1>


            </div>
        </div>
        <br>
        </br>
        <div className="course-details">
            <div className="center">
            <img src={software} alt="photo" className="java-img"  style={{width:'100px', height:'100px'}} />
                <h1>Software Testing </h1>

            </div>
        </div>
        <br></br>
                  <div></div>       
        </>
    );
}export default Courses;