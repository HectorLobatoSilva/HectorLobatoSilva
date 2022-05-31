import Image from "next/image";
import React from "react";
import Head from "next/head";

import Me from "./../../public/img/me.jpg";

// Server
import fs from "fs/promises";

type JobsProps = {
    jobs: Array<JobType>;
};

type JobType = {
    name: string;
    years: string;
    image: string;
    logo: string;
    projects: Array<ProjectProps>;
};

type ProjectProps = {
    name: string;
    url: string;
};

const jobs = ({ jobs }: JobsProps) => {
    return (
        <>
            <Head>
                <title>Hector Lobato Silva: Jobs</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="container mx-auto flex flex-col lg:flex-row h-[calc(100vh-3.5rem)] items-center gap-0 lg:gap-20">
                <div className="flex flex-col items-center w-2/4 lg:w-1/4">
                    <h1 className="text-[#6FFFE9] text-8xl mb-10">Jobs</h1>
                    <Image src={Me} width={598} height={598} className="rounded-full object-cover flex-1" alt="me" />
                </div>
                <div className="relative flex flex-col justify-center items-center gap-6 p-3 w-full lg:w-3/4 lg:items-start">
                    {/* Time lapse */}
                    <div className="absolute z-0 w-2 h-full bg-[#3A506B] shadow-md mx-auto left-0 right-0 lg:mx-0 lg:left-[8.8rem] xl:left-[10.5rem] 2xl:left-[12.6rem]"></div>
                    {jobs.map((job: JobType) => (
                        <div className="relative flex flex-col z-10 items-center gap-5 w-full lg:flex-row" key={`job-${job.name}`}>
                            <div className="lg:w-2/12">
                                <p className="text-right text-[#5BC0BE] font-bold">{job.years}</p>
                            </div>
                            {/* Circle */}
                            <Image src={job.logo} width={45} height={45} alt="logo" className="rounded-full object-cover" />
                            {/* Card */}
                            <div className="flex flex-col items-center text-black relative pt-2 lg:w-11/12 lg:flex-row w-full lg:pt-0">
                                <div className="absolute top-0 h-4 w-4 transform rotate-45 bg-white lg:mx-0 lg:top-auto lg:-left-2" aria-hidden="true"></div>
                                <div className="bg-white rounded-md shadow-md w-full">
                                    <div className="bg-white p-3 rounded-md shadow-md w-full ">
                                        <h1 className="text-xl text-center text-[#0B132B] font-bold">{job.name}</h1>
                                        <p className="font-bold">Projects</p>
                                        <ul>
                                            {job.projects.map((project: ProjectProps) => (
                                                <li key={`${job.name}-project-${project.name ? project.name : project}`}>
                                                    {project.url ? (
                                                        <a target="_blank" href={project.url} className="link" rel="noreferrer">
                                                            {project.name}
                                                        </a>
                                                    ) : (
                                                        project.name
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const file = await fs.readFile("./public/companies/index.json", "utf8");
    const jobs = JSON.parse(file);
    return {
        props: {
            jobs: jobs.reverse(),
        },
    };
};

export default jobs;
