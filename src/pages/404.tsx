import useTheme from "hooks/useTheme";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    useTheme();
    return (
        <section className="not-found__container">
            <h1 className="title text-6xl mb-10">404</h1>
            <p className="text-4xl">{"Uh oh! I think you're lost"}</p>
            <p className="text-lg mb-5">{"It looks like the page you're looking for doesn't exist"}</p>
            <Link href="/" passHref>
                <button className="button p-3 rounded-lg">Go back home</button>
            </Link>
        </section>
    );
};

export default NotFound;
