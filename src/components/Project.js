import React from "react";

const Project = ({project}) => {
    return (
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{project.name}</span>
                        <p>{project.description}</p>
                        </div>
                        <div class="card-action">
                        <a href={project.html_url}>Github page</a>
                        <a href={project.homepage}>Demo</a>
                    </div>
                </div>
            </div>
    )
}

export default Project;