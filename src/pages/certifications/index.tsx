import React from "react";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import getImageName from "@getImageName";

// Server
import fs from "fs/promises";

type imagesProps = {
    images: Array<string>;
};

const certifications = ({ images }: imagesProps) => {
    return (
        <>
            <Head>
                <title>Hector Lobato Silva: Certifications</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="container mx-auto bg-5">
                <h1 className="text-[#6FFFE9] text-5xl text-center lg:text-8xl mb-10">Certifications</h1>
                <div className="grid px-4 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {images.map((image: string) => (
                        <Link key={`certificate-${image}`} href={`/certifications/${getImageName(image)}`} passHref>
                            {/* eslint-disable */}
                            <a>
                                <Image
                                    src={`/certificates/${image}`}
                                    alt={`Centificate-${image}`}
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="contain"
                                    className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 cursor-pointer"
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const images = await fs.readdir("./public/certificates");
    return {
        props: {
            images,
        },
    };
};

export default certifications;
