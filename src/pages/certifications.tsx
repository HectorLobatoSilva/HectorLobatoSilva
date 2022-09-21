import React, { useState } from "react";
import Image from "next/image";

// Server
import fs from "fs/promises";
import Modal from "@components/Modal";

type CertificationsProps = {
    certificates: Array<Certificate>;
    companies: Array<string>;
};

type Certificate = {
    url: string;
    fit: "fill" | "contain";
    company: string;
};

const Certifications = ({ certificates: certificatesProps, companies }: CertificationsProps) => {
    const [certificates, setCertificates] = useState<Array<Certificate>>(certificatesProps);
    const [certificateSelected, setCertificateSelected] = useState<Certificate | null>(null);
    const handleChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: company } = event.target;
        if (company === "all") {
            setCertificates(certificatesProps);
        } else setCertificates(certificatesProps.filter((certificate: Certificate) => certificate.company === company));
    };

    const closeModal = () => {
        setCertificateSelected(null);
    };

    return (
        <section>
            <h1 className="title text-center">Certifications</h1>
            <div className="flex certifications-companies">
                <span className="subtitle font-bold">Filter by</span>
                <div className="flex gap-1 items-center">
                    <input className="accent-l-subtitle dark:accent-d-subtitle" onChange={handleChangeCompany} type="radio" id={`company-all`} name="company" value="all" />
                    <label className="cursor-pointer" htmlFor={`company-all`}>
                        All
                    </label>
                </div>
                {companies.map((company: string) => (
                    <div key={`company-${company}`} className="flex gap-1 items-center">
                        <input
                            className="accent-l-subtitle dark:accent-d-subtitle"
                            key={`company-${company}`}
                            onChange={handleChangeCompany}
                            type="radio"
                            id={`company-${company}`}
                            name="company"
                            value={company}
                        />
                        <label className="cursor-pointer" htmlFor={`company-${company}`}>
                            {company}
                        </label>
                    </div>
                ))}
            </div>
            <div className="certifications-grid">
                {certificates.map((certificate: Certificate) => (
                    <button onClick={() => setCertificateSelected(certificate)} className="certification-image" key={`certificate-${certificate.url}`}>
                        <Image src={certificate.url} alt={`Centificate-${certificate.url}`} width="100%" height="100%" className="rounded-lg" layout="responsive" objectFit={certificate.fit} />
                    </button>
                ))}
            </div>
            {certificateSelected && (
                <Modal onClose={closeModal}>
                    <Image
                        src={certificateSelected!.url}
                        alt={`Centificate-${certificateSelected!.url}`}
                        width="100%"
                        height="100%"
                        className="rounded-lg"
                        layout="responsive"
                        objectFit={certificateSelected!.fit}
                    />
                </Modal>
            )}
        </section>
    );
};

export const getStaticProps = async () => {
    const file = await fs.readFile("./public/certificates/index.json", "utf8");
    const certificates: Array<Certificate> = JSON.parse(file);

    const companiesSet = new Set();
    for (let i: number = 0, len: number = certificates.length; i < len; i++) {
        companiesSet.add(certificates[i].company);
    }

    const companies = Array.from(companiesSet);

    return {
        props: {
            certificates,
            companies,
        },
    };
};

export default Certifications;
