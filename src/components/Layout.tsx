import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "@components/Nav";
import Head from "next/head";

type Props = {
    children: ReactElement;
};

const Layout = ({ children }: Props) => {
    const router = useRouter();
    const { pathname } = router;

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(localStorage.getItem("theme") === "dark");
    }, []);

    return (
        <>
            {pathname !== "/404" && <Nav />}
            <Head>
                <title>Hector Lobato Silva {pathname === "/" ? "" : `:${pathname.replace("/", "").replace("_", " ")}`}</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href={isDark ? "/icon-dark.svg" : "/icon-light.svg"} />
            </Head>
            <main>{children}</main>
        </>
    );
};

export default Layout;
