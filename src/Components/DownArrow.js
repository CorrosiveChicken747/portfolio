import './DownArrow.css';

export default function DownArrow(props) {
    //Taken (with slight modifications) from ManelRoig's codepen: https://codepen.io/manelroig/pen/rJMVRO
    return (
        <div className="down-arrow-div">
            <button className="down-arrow-button" onClick={props.onClick}>
                <div className="center-con">
                    <div className="round">
                        <div id="cta">
                            <span className="arrow primera next "></span>
                            <span className="arrow segunda next "></span>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}