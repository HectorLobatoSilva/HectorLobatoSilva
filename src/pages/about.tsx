import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { IoLocation, IoCall, IoMailSharp } from "react-icons/io5";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import Me from "./../../public/img/me.jpg";

const About = () => {
    return (
        <>
            <Head>
                <title>Hector Lobato Silva: About</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="container mx-auto flex flex-col lg:flex-row h-[calc(100vh-3.5rem)] items-center p-5 lg:p-0">
                <div className="w-2/4">
                    <Image src={Me} width={598} height={598} className="rounded-full object-cover flex-1" alt="me" />
                </div>
                <div className="lg:w-2/4">
                    <h1 className="text-[#6FFFE9] text-5xl text-center lg:text-8xl mb-10">About me</h1>
                    <p className="text-justify mb-5">
                        Well-qualified Software Developer with 3+ years of experience in providing expert Web and Mobile Application solutions. Proven expertise in React, Javascript, and Typescript.
                        Passionate about finding solutions to problems that the user has knowing how far the functionalities can be compromised in order to get a solution that is balanced between
                        resources, quality, and time.
                    </p>
                    <div className="flex flex-col lg:flex-row lg:gap-5">
                        <div className="mb-5">
                            <h3 className="text-[#6FFFE9] text-4xl mb-5">Contact information</h3>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center gap-1">
                                    <IoLocation />
                                    Monterrey, Nuevo Leon
                                </li>
                                <li>
                                    <Link href="tel:7471842173" passHref>
                                        {/* eslint-disable */}
                                        <a className="flex items-center gap-1 link">
                                            <IoCall />
                                            +52 74 71 84 21 73
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:lobato_man@hotmail.com?subject=Contact" passHref>
                                        <a target="_blank" rel="noreferrer" className="flex items-center gap-1 link">
                                            <IoMailSharp />
                                            lobato_man@hotmail.com
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col lg:items-center">
                            <h3 className="text-[#6FFFE9] text-4xl mb-5">Follow me</h3>
                            <ul className="flex flex-col lg:flex-row gap-5 pb-5">
                                <li>
                                    <Link href="https://www.linkedin.com/in/hector-lobato-100b09174/" passHref>
                                        <a target="_blank" rel="noreferrer" className="flex items-center gap-2 lg:flex-col link">
                                            <BsLinkedin /> Linkedin
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/HectorLobatoSilva" passHref>
                                        <a target="_blank" rel="noreferrer" className="flex items-center gap-2 lg:flex-col link">
                                            <BsGithub />
                                            Github
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
