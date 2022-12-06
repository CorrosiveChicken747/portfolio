import { Navigate } from 'react-router-dom';

export default function RedirectHome() {
    return (
        <div className="redirectHome">
            <Navigate to="/home" />
        </div>
    )
}