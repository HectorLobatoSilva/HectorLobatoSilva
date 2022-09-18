import React from "react";

// Server
import fs from "fs/promises";
import Head from "next/head";
import Icon from "@components/Icon";

type Props = {
    projects: Array<Project>;
};

type Project = {
    name: string;
    url: string;
    isMovile: boolean;
    description: string;
    images: Array<string>;
    skills: Array<string>;
};

const Side = ({ projects }: Props) => {
    return (
        <>
            <Head>
                <title>Hector Lobato Silva: Side projects</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="container mx-auto">
                <h1 className="text-[#6FFFE9] text-5xl text-center lg:text-8xl mb-10 font-bold">Side Projects</h1>
                <div className="cards_container">
                    {projects.map((project: Project) => (
                        <div
                            className="project-card group"
                            style={{ backgroundImage: `url('${project.images[0]}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                            key={`project-${project.name}`}
                        >
                            {/* <Image src={project.images[0]} alt={project.images[0]} width="25%" height="25%" layout="responsive" objectFit="cover" className="absolute" /> */}
                            <div className="project-card__content">
                                <h2 className="project-card__title">{project.name}</h2>
                                <p className="project-card__description">{project.description}</p>
                                <div>
                                    <h3 className="text-2xl font-bold">Skills</h3>
                                    <div className="flex gap-3 text-3xl">
                                        {project.skills.map((skill) => (
                                            <Icon name={skill} key={skill} />
                                        ))}
                                    </div>
                                </div>
                                <a className="project-card__link" href={project.url} target="_blank" rel="noopener noreferrer">
                                    Go to web site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const file = await fs.readFile("./public/projects/index.json", "utf8");
    const projects = JSON.parse(file);
    return {
        props: {
            projects,
        },
    };
};

export default Side;
