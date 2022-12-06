import "../global.css"
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function PageNotFound() {
    return (
        <div className="PageNotFound centered">
            <h1>404 Page not found</h1>
            <h2>You probably tried to go to a page that doesn't exist</h2>
            <h2>Click here to head to the homepage :)</h2>
            <Link to={"/home"}><AwesomeButton type="primary">Home</AwesomeButton></Link>
        </div>
    )
}