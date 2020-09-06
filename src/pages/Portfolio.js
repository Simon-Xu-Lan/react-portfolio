// dependencies
import React, {useEffect, useState} from "react";
import axios from "axios";

// components
import Project from "../components/Project";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        axios.get("https://api.github.com/users/Simon-Xu-Lan/repos")
            .then(res => {
                setProjects(res.data)
                console.log(res.data)})
            .catch(err => console.log(err))
    }, []);

    return(
        <div className="row">
            {projects.map((project, index) => {
                return (
                    <Project
                        key={index}
                        project={project}
                    />
                )
             })}
        </div>
    )
}

export default Portfolio;