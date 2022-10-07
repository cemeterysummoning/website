import styles from "../styles/Projects.module.css"
import Icon from "./Icon";
import github from "../public/github.svg"

function ProjectThumbnail({ name, description, gitlink }) {
    return <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Icon href={gitlink} path={github} />
    </div>;
}

export default ProjectThumbnail