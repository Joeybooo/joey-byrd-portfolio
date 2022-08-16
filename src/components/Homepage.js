import React from "react";

function Homepage() {
    return (
        <div className="row row-home">
            <div className="col-4">
                <div className="card card-home">
                    <div  className="card-body">
                        <img></img>
                        <h5 className="card-title text-center">Full Webstack Developer</h5>
                        <p className="card-text text-center"> fill in short thing</p>
                        <a href="https://github.com/Joeybooo" className="ml-5">Github</a>
                        <a href="https://www.linkedin.com/in/joey-byrd-b227191a9/" className="ml-5">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;