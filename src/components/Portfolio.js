import React from "react";

function Portfolio() {
    return (
        <div className="card port-card">
            <div className="img-container">
                <img></img>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {}
                    </li>
                    <li>
                        <strong>Project:</strong> {}
                    </li>
                    <li>
                        <strong>Demo:</strong> {}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Portfolio;