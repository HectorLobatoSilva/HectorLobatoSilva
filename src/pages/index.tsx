import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home: NextPage = () => {
    const words = ["Software engeenier", "Full-Stack developer", "Creative", "Web 3.0 developer"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });

    useEffect(() => {
        const body = document.querySelector("body");
        body?.classList.add("home");
        return () => {
            body?.classList.remove("home");
        };
    }, []);

    return (
        <>
            <Head>
                <title>Hector Lobato Silva</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="absolute h-screen w-screen bg-gray-900 top-0 opacity-75"></div>
            <div className="relative px-4 container mx-auto flex h-[calc(100vh-3.5rem)] items-center">
                <div className="">
                    <div>
                        <h1 className="text-5xl md:text-8xl mb-2">Hector Lobato</h1>
                        <p className="text-[#6FFFE9] text-2xl md:text-5xl mb-6">
                            <span>{text}</span>
                            <Cursor />
                        </p>
                    </div>
                    <Link href="/Resume.pdf" passHref>
                        {/* eslint-disable */}
                        <a target="_blank" rel="noreferrer" className="bg-[#3A506B] p-3 rounded-full hover:bg-[#304155]">
                            Download Resume
                        </a>
                        {/* eslint-enabled */}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
