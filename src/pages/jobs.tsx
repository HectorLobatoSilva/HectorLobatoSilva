import Image from "next/image";
import React from "react";

import Me from "./../../public/img/me.jpeg";

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
            <section className="single-page">
                <h1 className="title text-center">Jobs</h1>

                <div className="flex flex-col items-center lg:flex-row gap-5 h-full">
                    <div className="home-card__image">
                        <Image src={Me} width={598} height={598} className="photo" alt="me" />
                    </div>
                    <div className="relative flex flex-col justify-center items-center gap-6 p-3 w-full lg:w-3/4 lg:items-start">
                        {/* Time lapse */}
                        <div className="jobs-time--line"></div>
                        {jobs.map((job: JobType) => (
                            <div className="job-card" key={`job-${job.name}`}>
                                <div className="lg:w-3/12">
                                    <p className="text-right subtitle font-bold">{job.years}</p>
                                </div>
                                <Image src={job.logo} width={45} height={45} alt="logo" className="rounded-full object-cover" />
                                <div className="job-company__card">
                                    <div className="job-company__arrow" aria-hidden="true"></div>
                                    <div className="job-company__content">
                                        <h1 className="text-xl text-center title font-bold">{job.name}</h1>
                                        <p className="subtitle font-bold">Projects</p>
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
                        ))}
                    </div>
                </div>
            </section>
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
