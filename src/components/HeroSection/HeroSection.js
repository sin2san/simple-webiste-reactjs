import React from 'react';

import Button from '../Button/Button';

import '../../App.css';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container" style={{
            backgroundImage: "url(" + "'./images/img-home.jpg'" + ")",
        }}>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
            </div>
        </div >
    )
}

export default HeroSection
