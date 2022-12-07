import '../global.css';
import './TileGrid.css'
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import placeholder_bg from '../Assets/img/placeholder.jpg';

export default function TileGrid(props){
    let tiles = props.tiles;

    //Original author for tile tilting code is Aditya Agarwal:
    //https://codesandbox.io/u/itaditya (https://codesandbox.io/s/l2pqqzqmmq?file=/src/index.js:143-338)
    const calc = (x, y, elem) => {
        //const rect = elem.getBoundingClientRect();
        return [-(y - window.innerHeight / 2) / 75, (x - window.innerWidth / 2) / 75, 1.02]
    };
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    function Tile(title, bg_param, onClick) {
        const [animationDict, setAnimationDict] = useSpring(() => ({
          xys: [0, 0, 1],
          config: { mass: 5, tension: 350, friction: 40 }
        }));

        const ref = useRef();

        let bg = bg_param;
        if (bg == null){
            bg = placeholder_bg;
            //bg = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)";
        }
      
        return (
            <div>
            <animated.div
            className="tile"
            onMouseMove={({ clientX: x, clientY: y }) => setAnimationDict({ xys: calc(x, y, ref.current) })}
            onMouseLeave={() => setAnimationDict({ xys: [0, 0, 1] })}
            onClick={onClick}
            style={{ transform: animationDict.xys.interpolate(trans), backgroundImage: `url(${bg})`}}
            >
              <div>
                <div className="semicircle">
                  <h2 className="centered-text white" style={{fontSize: "1.5vw"}}>{title}</h2>
                </div>
              </div>
            </animated.div>
            </div>
        );
      }

    return (
        <div className="tile-grid">
          {tiles.map(tile => (
            Tile(tile.title, tile.backgroundImage, () => {
                //alert("Clique");
                tile.onClick()
            })
          ))}
        </div>
    );
}