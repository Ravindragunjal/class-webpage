import React from "react";
import './Home.css';
import Homeback from '../Images/Homeback.png';

function Home(){
    return(
        <>
       <div style={{backgroundImage:'url(${Homeback})', height: '500px'}}>
            <div className="heading">
                <h1>
                    Mastering The Future </h1>
                <h4>Training And Placement Institute </h4>

            </div>
        </div>
        </>
    );
}
export default Home;
//<img src={about} alt="photo" />
// <div style={{backgroundImage:'url(${Homeback})', height: '500px'}}>
