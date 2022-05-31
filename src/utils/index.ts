import { join } from "path";

export const getImageName = (path: string): string => {
    return path.replace(/.jpg|.jpeg|.png/, "");
};

export const getDirrPath = (dir: string): string => {
    return join(process.cwd(), "public", dir);
};
