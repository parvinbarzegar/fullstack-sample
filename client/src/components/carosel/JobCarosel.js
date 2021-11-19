
import React, { }  from "react";
import { Carousel } from 'antd';
import DefaultImage from "../../images/DefaultImage.jpg";


const JobCarosel = () => {
    const contentStyle = {
      //  height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      }
  return (
    <div className = "pb-3">
       <Carousel >
            <div>
                <img style={contentStyle} src = {DefaultImage} alt = " boat media"/>
            </div>
            <div>
                <img style={contentStyle} src = {DefaultImage} alt = " boat media"/>
            </div>
            
        </Carousel>
   </div>
  );
}

export default JobCarosel;