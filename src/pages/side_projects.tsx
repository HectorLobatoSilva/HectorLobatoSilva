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
    url?: string;
    repo: string;
    isMovile?: boolean;
    imageAlign: string;
    description: string;
    image: string;
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
            <section>
                <h1 className="title text-center">Side Projects</h1>
                <div className="cards_container">
                    {projects.map((project: Project) => (
                        <div
                            className={`project-card group bg-${project.imageAlign}`}
                            style={{ backgroundImage: `url('${project.image}')`, backgroundSize: project.isMovile ? "fill" : "cover", backgroundRepeat: "no-repeat" }}
                            key={`project-${project.name}`}
                        >
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
                                <div className="flex gap-1">
                                    {project.url && (
                                        <a className="navigate-button" href={project.url} target="_blank" rel="noopener noreferrer">
                                            Go to web site
                                        </a>
                                    )}
                                    <a className="navigate-button" href={project.repo} target="_blank" rel="noopener noreferrer">
                                        Go to repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
