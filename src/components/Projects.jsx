import React from 'react'
import ai from "../assets/AI-Journal.webp"
import sorting from "../assets/Sorting.webp"
import cli from "../assets/CLI.webp"

const projects = [
  {
      projectName : "AI Journal App",
      tags : ["Next.js","Open AI API","Prisma", "NeonDB", "Tailwind CSS"],
      src : ai,
      description : "Developed a web application allowing users to add daily journals and leverage AI to analyze journal content, providing insights into user mood and other metrics.",
      githubLink : "https://github.com/Lovepreet013/AI-Journal-App",
      liveLink : "https://ai-journal-app-blond.vercel.app/"
  },
  {
      projectName : "Sorting Algorithms Vizualizer",
      tags : ["HTML","CSS", "JavaScript"],
      src : sorting,
      description : "Developed a web application that visualizes various sorting algorithms, enhancing user understanding of algorithms.",
      githubLink : "https://github.com/Lovepreet013/sorting-algo-visualizer",
      liveLink : "https://sorting-algo-visualizer-nine.vercel.app/"
  },
  {
      projectName : "CLI Note Taking App",
      tags : ["Node.js"],
      src : cli,
      description : "Developed a note-taking app enabling users to perform CRUD operations in the terminal.",
      githubLink : "https://github.com/Lovepreet013/CLI-Note-Taking-App",
  }
]

const Projects = () => {
  return (
    <section className="max-w-[62rem] mx-auto my-16 z-40" id="projects">
      <div className="flex justify-between md:flex-row md:justify-between mx-4 md:mx-3">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 md:mt-0">
          <a
            href="https://github.com/Lovepreet013?tab=repositories"
            className="hover:underline"
          >
            View all projects
          </a>
        </p>
      </div>
      <p className="my-2 mx-4 md:mx-3">Some of the projects I've built:</p>
      <div className="flex flex-wrap justify-between gap-4 md:mx-3">
        {projects.map((project) => (
          <Card key={project.projectName} {...project} />
        ))}
      </div>
    </section>
  );
};
const Card = ({
  src,
  tags,
  projectName,
  liveLink,
  githubLink,
  description,
}) => {
  return (
    <div className="mx-4 md:mx-0 w-full md:w-[27rem] h-[30rem] md:h-[30rem] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border mt-2 relative">
      <img
        src={src}
        alt={projectName}
        className="w-full h-48 md:h-auto object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <div>
          <div className="tags flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-black font-semibold bg-gray-200 px-2 py-1 mr-2 mb-2 text-[12px] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-lg font-semibold mt-3">{projectName}</h4>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex mt-4">
          {liveLink ? (
            <a
              href={liveLink}
              className="mr-5 bg-black text-white px-4 py-2 md:absolute md:bottom-3 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          ) : null}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className={`${liveLink ? 'bg-black text-white px-4 py-2 md:absolute md:bottom-3 rounded left-32' : 'bg-black text-white px-4 py-2 md:absolute md:bottom-3 rounded'}`}>Github</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;

// className = `${liveLink ? 'bg-black text-white px-4 py-2 absolute bottom-2 rounded left-32' : ''}`