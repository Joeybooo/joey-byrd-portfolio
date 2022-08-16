import React from "react";
import Portfolio from "../Portfolio";
import projects from "../../assets/projectsInfo.json";


// can add more projects later
function ProjectsInfo() {
    return (
        <div>
            <div className="container portfolio-container">
                <h1>Projects</h1>
                <div className="row">
                    <Portfolio 
                        name={projects[0].name}
                        image={projects[0].image}
                        project={projects[0].project}
                        location={projects[0].location}
                    />
                    <Portfolio
                        name={projects[1].name}
                        image={projects[1].image}
                        project={projects[1].project}
                        location={projects[1].location}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectsInfo;