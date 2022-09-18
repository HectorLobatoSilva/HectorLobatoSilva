import { useState, useEffect } from "react";

const useTheme = () => {
    const [isDark, setisDark] = useState<boolean>(true);

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        setisDark(isDark);
    }, []);

    function toogleTheme(): void {
        localStorage.setItem("theme", isDark ? "light" : "dark");
        document.documentElement.classList.toggle("dark");
        setisDark(!isDark);
    }

    return [isDark, toogleTheme] as const;
};

export default useTheme;
