import './Homescreen.css';
import '../global.css'
import profilepic from '../Assets/headshot.png';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import DownArrow from '../Components/DownArrow';

export default function Homescreen() {
    const description_text = "I'm a programmer, blah blah here is some powerful statement";
    const website_speed_text = "I love efficiency and performance, so instead of using a template, I decided to build my own website from the ground up. Try it, it's fast.";
    
    var scrollDown = () => {
        //Scroll down to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    return (
        <div className="Homescreen">
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
                    <div className="landing-arrow-div">
                        <br></br>
                        <br></br>
                        <DownArrow onClick={scrollDown} className="landing-arrow"/>
                    </div>
                </div>
            </div>
            {/*<div className='blue-white-blend'></div>*/}
            <div className="whitebg" style={{backgroundColor : 'white'}}>
                <div className="projects-landing centered">
                    <h1 className="centered">Making projects is cool, see all my projects here!</h1>
                    <Link to={"/projects"}><AwesomeButton type="primary">Projects</AwesomeButton></Link>
                </div>
                <div className="sourceCodeDisplay centered">
                    <p>This website was coded from scratch in React</p>
                    <span>Code is available </span> <a href="https://github.com/OrenKohavi/OrenKohavi.github.io">Here</a>
                </div>
            </div>
            
        </div>
    )
}