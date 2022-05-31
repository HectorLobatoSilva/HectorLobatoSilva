const getImageName = (path: string): string => {
    return path.replace(/.jpg|.jpeg|.png/, "");
};

export default getImageName;
