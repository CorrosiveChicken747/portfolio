import './Homescreen.css';
import '../global.css'
import profilepic from '../Assets/img/lisa_headshot.png';
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
    const website_description = "I'm determined to use technology to make the world a better place by highlighting inequities today, and intentionally designing for a better tomorrow.";
    const linkedin = "https://www.linkedin.com/in/profjeffhuang";
    const email_addr = "mailto:fake_email@brown.edu";
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
                alert("This project isn't done yet, but it's coming soon!")
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
                                <div className="profile-div">
                                    <img src={profilepic} alt="Headshot of Mona Lisa smiling" className="profilepic not-selectable"/>
                                </div>
                                <div className="intro-text-container">
                                    <span>
                                        <h1 className="hello-text">Hi, I'm Mona</h1>
                                        <h1 className='hello-text tilt-hover smiley'>:)</h1>
                                    </span>
                                    <h2 className="hello-text-small">
                                        <ul>
                                            <li>
                                                Junior at Brown University studying CS
                                            </li>
                                            <li>
                                                Stong focus on privacy, security, and low-level performance
                                            </li>
                                            <li>
                                                Real-world experience in collaborative environments
                                            </li>
                                        </ul>
                                    </h2>
                                </div>
                            </div>
                            <div className="landing-details">
                                <br className='not-selectable'></br>
                                <h2 className="landing-details-text">
                                    {website_description}
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
                    <h4 style={{margin: "0", marginTop: "-15px"}}>(Links will be replaced with real links once I deploy this on my personal github)</h4>
                    <h6>{tiny_bottom_copyright}</h6>
                </div>
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}