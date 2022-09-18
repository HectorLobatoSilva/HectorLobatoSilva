import React from "react";
import { SiReact } from "react-icons/si";

type Props = {
    name: string;
};

const Icon = ({ name }: Props) => {
    switch (name) {
        default:
            return <SiReact />;
    }
    // const IconName = SiIcons[name];
    // return <IconName />;
};

export default Icon;
