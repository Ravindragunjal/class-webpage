import React from 'react';
import './Gallery.css';
import image1 from  '../Images/image1.jfif';
import image2 from  '../Images/image2.jfif';
import image3 from  '../Images/image3.jfif';
import image4 from  '../Images/image4.jfif';
import image5 from  '../Images/image5.jfif';
import image6 from  '../Images/image6.jfif';
import image7 from  '../Images/image7.jfif';
import image8 from  '../Images/image8.jfif';

function Gallery(){
return(
    <>
    <div className='aboutback'>
       <center><h1 className='head'>Gallery</h1></center>
        <div className='underline'></div>
    </div>
    <div class='gallery'>
        <div class="img-container">
            <img src={image1} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image2} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image3} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image4} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image5} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image6} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image7} alt="photo" className='photo' />
        </div>

        <div class="img-container">
            <img src={image8} alt="photo" className='photo' />
        </div>


    </div>
    </>
);
}export default Gallery;