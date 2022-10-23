import React from "react";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiCss3,
    SiSolidity,
    SiRust,
    SiWeb3Dotjs,
    SiMaterialui,
    SiFirebase,
    SiThemoviedatabase,
    SiNodedotjs,
    SiNestjs,
    SiMongodb,
    SiDocker,
    SiElectron,
    SiSass,
    SiFlutter,
    SiEthereum,
} from "react-icons/si";

type Props = {
    name: string;
};

const Icon = ({ name }: Props) => {
    switch (name) {
        case "SiReact":
            return <SiReact />;
        case "SiJavascript":
            return <SiJavascript />;
        case "SiTypescript":
            return <SiTypescript />;
        case "SiCss3":
            return <SiCss3 />;
        case "SiSolidity":
            return <SiSolidity />;
        case "SiRust":
            return <SiRust />;
        case "SiWeb3Dotjs":
            return <SiWeb3Dotjs />;
        case "SiMaterialui":
            return <SiMaterialui />;
        case "SiFirebase":
            return <SiFirebase />;
        case "SiThemoviedatabase":
            return <SiThemoviedatabase />;
        case "SiNodedotjs":
            return <SiNodedotjs />;
        case "SiNestjs":
            return <SiNestjs />;
        case "SiMongodb":
            return <SiMongodb />;
        case "SiDocker":
            return <SiDocker />;
        case "SiElectron":
            return <SiElectron />;
        case "SiSass":
            return <SiSass />;
        case "SiFlutter":
            return <SiFlutter />;
        case "SiEthereum":
            return <SiEthereum />;
        default:
            return <SiReact />;
    }
};

export default Icon;
