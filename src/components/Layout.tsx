import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Nav from "@components/Nav";

type Props = {
    children: ReactElement;
};

const Layout = ({ children }: Props) => {
    const router = useRouter();
    return (
        <>
            {router.pathname !== "/404" && <Nav />}
            <main>{children}</main>
        </>
    );
};

export default Layout;
