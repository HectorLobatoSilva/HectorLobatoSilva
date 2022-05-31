import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import getImageName from "@getImageName";

// Server
import fs from "fs/promises";

type CertificateProps = {
    image: string;
    next: boolean;
    prev: boolean;
};

const Certificate = ({ image, next, prev }: CertificateProps) => {
    return (
        <>
            <Head>
                <title>Hector Lobato Silva: {image}</title>
                <meta name="description" content="Personal web site" />
                <link rel="icon" type="image/x-icon" href="/icon.svg" />
            </Head>
            <div className="container mx-auto max-w-2xl h-[calc(100vh-3.5rem)] flex flex-col justify-center">
                <div className="bg-gray-100 rounded-lg">
                    <Image layout="responsive" width="45" height="45" alt={image} src={`/certificates/${image}`} className="rounded-lg object-contain" />
                </div>
                <div className="flex items-center pt-5 justify-center">
                    {prev && (
                        <Link href={`/certifications/${prev}`} passHref>
                            <button className="bg-[#3A506B] p-3 rounded-full hover:bg-[#304155]">Prev</button>
                        </Link>
                    )}
                    <div className="h-full w-3"></div>
                    {next && (
                        <Link href={`/certifications/${next}`} passHref>
                            <button className="bg-[#3A506B] p-3 rounded-full hover:bg-[#304155]">Next</button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const paths = await fs.readdir("./public/certificates");
    const index = paths.findIndex((image: string) => getImageName(image) === id);
    return {
        props: {
            image: paths[index],
            next: index + 1 >= 0 && index + 1 < paths.length && getImageName(paths[index + 1]),
            prev: index > 0 && index - 1 >= 0 && getImageName(paths[index - 1]),
        },
    };
};

export default Certificate;
