import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page not found</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <h1 className="text-[#6FFFE9] text-6xl mb-10">404</h1>
                <p className="text-4xl">{"Uh oh! I think you're lost"}</p>
                <p className="text-lg mb-5">{"It looks like the page you're looking for doesn't exist"}</p>
                <Link href="/" passHref>
                    <button className="bg-[#3A506B] p-3 rounded-lg hover:bg-[#304155]">Go back home</button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;
