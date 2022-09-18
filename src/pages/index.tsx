import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { SiPointy, SiMaildotru, SiLinkedin, SiGithub } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Me from "./../../public/img/me.jpeg";

const Home: NextPage = () => {
    const words = ["Software engeenier", "Full-Stack developer", "Web 3.0 developer"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });
    return (
        <>
            <Head>
                <title>Hector Lobato Silva</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <section className="home-card">
                <div className="home-card__image">
                    <Image src={Me} width={598} height={598} className="photo" alt="me" />
                </div>
                <div className="home-card__content">
                    <h1>Hector Lobato</h1>
                    <h3 className="title">
                        <span>{text}</span>
                        <Cursor />
                    </h3>
                    <div className="text-justify">
                        Well-qualified Software Developer with 5+ years of experience in providing expert Web and Mobile Application solutions. Proven expertise in React, Javascript, and Typescript.
                        Passionate about finding solutions to problems that the user has knowing how far the functionalities can be compromised in order to get a solution that is balanced between
                        resources, quality, and time.
                    </div>
                    <div className="home-card__content--social">
                        <div>
                            <h3 className="title">Contact information</h3>
                            <ul>
                                <li className="home__link">
                                    <SiPointy /> Mexico
                                </li>
                                <li>
                                    <Link href="mailto:lobato_man@hotmail.com?subject=Contact" passHref>
                                        <a href="/" target="_blank" rel="noreferrer" className="home__link link">
                                            <SiMaildotru />
                                            lobato_man@hotmail.com
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="title">Follow me</h3>
                            <div className="home__link text-2xl md:justify-around">
                                <Link href="https://www.linkedin.com/in/hector-lobato-100b09174/" passHref>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <SiLinkedin />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/hector-lobato-100b09174/" passHref>
                                    <a href="/" target="_blank" rel="noreferrer">
                                        <SiGithub />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/Resume.pdf" passHref>
                        <a href="/" target="_blank" rel="noreferrer" className="button p-3 rounded-lg">
                            Download resume
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
