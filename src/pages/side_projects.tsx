import React from "react";
import Image from "next/image";
import Link from "next/link";

// Server
import fs from "fs/promises";
import Head from "next/head";

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

                {projects.map((project: Project) => (
                    // flex flex-col p-5 gap-x-8 gap-y-2 flex-col-reverse lg:flex-row
                    <div className="flex flex-col p-5 gap-x-8 gap-y-2 flex-col-reverse lg:flex-row" key={`project-${project.name}`}>
                        {project.images.length ? (
                            <div className="flex rounded-lg gap-4 p-4 w-full snap-x overflow-x-auto bg-[#3A506B] w-full lg:w-1/2">
                                {project.images.map((image: string) => (
                                    <div key={`project-${project.name}-image-${image}`} className="snap-center shrink-0 rounded overflow-hidden">
                                        <Image src={image} alt={`project-${project.name}-image-${image}`} width={project.isMovile ? 200 : 500} height={350} className="aspect-video object-contain" />
                                    </div>
                                ))}
                            </div>
                        ) : null}
                        <div className="flex flex-col gap-5 lg:w-1/2">
                            <h3 className="text-[#5BC0BE] text-center font-bold text-2xl">{project.name}</h3>
                            <Link href={project.url} passHref>
                                {/* eslint-disable */}
                                <a target="_blank" className="link">
                                    <span className="text-[#5BC0BE]">URL</span> {project.url}
                                </a>
                                {/* eslint-enable */}
                            </Link>
                            <h3 className="text-[#5BC0BE] font-bold text-2xl">Description</h3>
                            <p className="text-justify">{project.description}</p>
                            <h3 className="text-[#5BC0BE] font-bold text-2xl">Skills</h3>
                            <div className="flex gap-5 flex-wrap">
                                {project.skills.map((skill: string) => (
                                    <button className="bg-[#3A506B] p-3 px-2 rounded-lg" key={`button-skill-${project.name}-${skill}`}>
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
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
