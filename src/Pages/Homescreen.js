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

import money_preview from '../Assets/img/musk-money_preview.webp';
import redesign_preview from '../Assets/img/redesign_preview.jpg';
import iterative_preview from '../Assets/img/iterative-design_preview.png';
import rustc4_preview from '../Assets/img/rustc4_preview.png';

export default function Homescreen() {
    const description_text = "I'm interested in low-level computing, security, and performance. I'm currently a Junior at Brown University studying Computer Science.";
    const website_speed_text = "This is placeholder text, I'm not quite sure what to write here, so maybe some dashingly-smart UI/UX student will give me ideas. (Should there even be text here?)";
    const linkedin = "https://www.linkedin.com/in/profjeffhuang";
    const email_addr = "mailto:fake_email@brown.edu";
    const github = "corrosive_chicken"; //unused rn
    const source_code_link = "http://www.github.com";
    const tiny_bottom_copyright = "Copyright 2022 Mona Lisa"

    const parallax = useRef(null);

    const scrollDown = () => {
        parallax.current.scrollTo(1.1)
    }

    function redirect_from_to(from, to){
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace(from, to);
        window.location = newUrl;
    }
    
    function redirect_offsite_to(url) {
        window.open(url, '_blank').focus();
    }

    const tiles = [
        {
            title: 'Development: Spend Musk\'s Money',
            backgroundImage: money_preview,
            onClick: () => {
                redirect_from_to("/home","/musk-money");
            }
        },
        {
            title: 'Responsive Redesign: Berkshire Hathaway',
            backgroundImage: redesign_preview,
            onClick: () => {
                redirect_offsite_to("https://corrosivechicken747.github.io/CS1300-ResponsiveRedesign/");
            }
        },
        {
            title: 'Iterative Design: Marathon Education',
            backgroundImage: iterative_preview,
            onClick: () => {
                redirect_offsite_to("https://rockyraccoon111.github.io/uiux-assign4/");
            }
        },
        {
            title: 'Connect-4 in Rust',
            backgroundImage: rustc4_preview,
            onClick: () => {
                //alert('Tile 3 clicked!')
            }
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
                                        <h1 className="hello-text">Hi, I'm Mona</h1>
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
                        <div className="vspace-pad"></div>
                        <h1 className="centered">Check out my past projects:</h1>
                        <TileGrid tiles={tiles}/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.55} speed={0}>
                <div className="bottom-text white">
                    <h2>find me on <a href={linkedin}>Linkedin</a> or send me an <a href={email_addr} >email</a></h2>
                    <h3>This website is handmade, with sourcode available <a href={source_code_link}>Here</a></h3>
                    <h6>{tiny_bottom_copyright}</h6>
                </div>
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}