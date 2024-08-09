import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="error-div">
            <div className="error-div-title-btn">
                <h1>Error 404, Not Found</h1>
                <Link to="/" className="btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
