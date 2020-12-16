import React, { useState } from 'react'
import BannerImg from '../../../../assets/banner.png'
import './style.css';

function Banner() {
   
    return (
        <div className="div-banner">
            <img alt="adocao" className="img-banner" fixed="top" src={BannerImg}></img>
        </div>
    )
}

export default Banner;