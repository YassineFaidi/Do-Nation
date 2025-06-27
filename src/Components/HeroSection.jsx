import React from 'react';
import { MAIN_EVENT_DATA } from './../constants';
import { MyButton } from './MyButton';
import './HeroSection.css';

const HeroSection = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    
    const { title, desc, event_don_link, event_more_link } = MAIN_EVENT_DATA;

    return (
        <section id="heroSection">
            <div className="heroSection-container">
                <div className="main-section">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className="btn-group">
                        <MyButton buttonStyle='donate-btn-green'>Faites un don!</MyButton>
                        <MyButton buttonStyle='learn-btn'>En savoir plus</MyButton>
                    </div>
                </div>
                <div className="buttom-section">
                    <div className="progress-section">
                        <div className="total-info">
                            <h3>Total des dons</h3>
                            <p>70%</p>
                        </div>
                        <div className="progress-bar">
                            <div className="progress">
                                <div className="progress-circle"></div> {/* Circle indicating the progress point */}
                            </div>
                        </div>

                        <div className="goal-info">
                            <span>Collecté: 1000 dh</span>
                            <span>Objectif: 1500 dh</span>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <div className="circle-indicators">
                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                {/* Triangles in one div separated by a vertical line */}
                <div className="triangle-container">
                    <div className="triangle left"></div>
                    <div className="separator"></div>
                    <div className="triangle right"></div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
