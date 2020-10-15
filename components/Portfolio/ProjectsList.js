import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => {
  return (
    <nav className='menu text-primary'>
      {projects.map((item) => (
        <ProjectItem key={item.id} item={item} projects={projects} />
      ))}
    </nav>
  );
};

export default Projects;
