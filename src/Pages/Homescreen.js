import './Homescreen.css';
import '../global.css'
import profilepic from '../Assets/img/lisa_headshot.png';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect'
import { AwesomeButton } from 'react-awesome-button';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import "react-awesome-button/dist/styles.css";
import DownArrow from '../Components/DownArrow';
import TileGrid from '../Components/TileGrid';

export default function Homescreen() {
    const description_text = "I'm a programmer, blah blah here is some powerful statement";
    const website_speed_text = "I love efficiency and performance, so instead of using a template, I decided to build my own website from the ground up. Try it, it's fast.";
    
    const parallax = useRef(null);

    const scrollDown = () => {
        parallax.current.scrollTo(1.1)
    }

    function redirect_from_to(from, to){
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace(from, to);
        window.location = newUrl;
    }

    const tiles = [
        {
            title: 'Spend Musk\'s Money',
            backgroundImage: null,
            onClick: () => {
                redirect_from_to("/home","/musk-money");
            }
        },
        {
            title: 'Tile 2',
            backgroundImage: null,
            onClick: () => alert('Tile 2 clicked!')
        },
        {
            title: 'Tile 3',
            backgroundImage: null,
            onClick: () => alert('Tile 3 clicked!')
        },
        {
            title: 'Tile 4',
            backgroundImage: null,
            onClick: () => alert('Tile 4 clicked!')
        },
        
        // ...
    ];
    
    return (
        <div className="Homescreen">
            <Parallax pages={2.75} ref={parallax} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={-0.15} style={{ backgroundColor: '#01112B' }}>
                    <div className="landing">
                        <div className="landing-about">
                            <div className="landing-picture-hello">
                                <img src={profilepic} alt="Headshot of Oren Kohavi smiling" className="profilepic not-selectable"/>
                                <div className="intro-text-container">
                                    <span>
                                        <h1 className="hello-text">Hi, I'm Lisa</h1>
                                        <h1 className='hello-text tilt-hover smiley'>:)</h1>
                                    </span>
                                    <h2 className="hello-text-small">{description_text}</h2>
                                </div>
                            </div>
                            <div className="landing-details">
                                <br className='not-selectable'></br>
                                <h2 className="landing-details-text">
                                    {website_speed_text}
                                </h2>
                            </div>
                            <div className="vspace"></div>
                            <div className="landing-arrow-div">
                                <br></br>
                                <br></br>
                                <DownArrow onClick={scrollDown} className="landing-arrow"/>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.1}>
                    <div className="projects-landing centered">
                        <h1 className="centered">Making projects is cool, see all my projects here!</h1>
                        <TileGrid tiles={tiles}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.5} speed={0}>
                <div className="bottom-text white">
                    <h2>This website was coded from scratch in React</h2>
                    <span>Code is available </span> <a href="https://github.com/OrenKohavi/OrenKohavi.github.io">Here</a>
                </div>
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}