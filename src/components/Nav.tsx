import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Jobs", href: "/jobs" },
    { name: "Side projects", href: "/side_projects" },
];

const Nav = () => {
    const router = useRouter();
    return (
        <Popover className="container mx-auto">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8 z-10 h-[3.5rem]">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href="/" passHref>
                                {/* eslint-disable */}
                                <a className="font-bold flex-1 text-2xl">
                                    H<span className="text-[#6FFFE9]">L</span>
                                </a>
                                {/* eslint-enable */}
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
                                    <span className="sr-only">Open main menu</span>
                                    <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                            <Link href={item.href} key={`navigation-item-${item.name}`} passHref>
                                {/* eslint-disable */}
                                <a
                                    className={`${
                                        router.pathname === item.href ? "text-[#5BC0BE]" : ""
                                    } hover:underline hover:decoration-4 hover:decoration-[#5BC0BE] active:text-[#5BC0BE] cursor-pointer`}
                                >
                                    {item.name}
                                </a>
                                {/* eslint-enable */}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg bg-[#3A506B] shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <Link href="/" passHref>
                                {/* eslint-disable */}
                                <a className="font-bold flex-1 text-2xl">
                                    H<span className="text-[#6FFFE9]">L</span>
                                </a>
                                {/* eslint-enable */}
                            </Link>
                            <div className="-mr-2">
                                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
                                    <span className="sr-only">Close main menu</span>
                                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link href={item.href} key={`navigation-item--menu-${item.name}`} passHref>
                                    {/* eslint-disable */}
                                    <a className={`${router.pathname === item.href ? "bg-[#0B132B]" : ""} block px-3 py-2 rounded-md text-base font-medium hover:bg-[#0B132B]`}>{item.name}</a>
                                    {/* eslint-enable */}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Nav;
