import "../global.css"
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function PersistentHomecorner(props) {

    if (props.show_self === false) {
        return null;
    }
    //alert("Showin");
    return (
        <div className="homecorner">
            <Link to={"/home"}><AwesomeButton type="primary">Home</AwesomeButton></Link>
        </div>
    );
}