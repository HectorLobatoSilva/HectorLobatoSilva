import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useRouter } from "next/router";
import useTheme from "hooks/useTheme";

const navigation = [
    { name: "Certifications", href: "/certifications" },
    { name: "Jobs", href: "/jobs" },
    { name: "Side projects", href: "/side_projects" },
];

const Nav = () => {
    const router = useRouter();
    const [isDark, toogleTheme] = useTheme();

    const toggle = () => {
        toogleTheme();
    };

    return (
        <Popover className="popover">
            <nav className="nav-container">
                <div className="nav-logo__container">
                    <Link href="/" passHref>
                        <a href="_" className="nav-logo__text">
                            H<span className="title">L</span>
                        </a>
                    </Link>
                    <div className="flex items-center md:hidden">
                        <Popover.Button className="nav-hambuerger">
                            <span className="sr-only">Open main menu</span>
                            <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>
                <div className="nav-items__container">
                    {navigation.map((item) => (
                        <Link href={item.href} key={`navigation-item-${item.name}`} passHref>
                            <a href="_" className={`${router.pathname === item.href ? "subtitle" : ""} active:subtitle nav-items__item`}>
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </div>
                <button onClick={toggle}>{isDark ? <MdLightMode /> : <MdDarkMode />}</button>
            </nav>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="mobile-popover">
                    <div className="p-4 nav-logo__container">
                        <Link href="/" passHref>
                            <a href="_" className="nav-logo__text">
                                H<span className="title">L</span>
                            </a>
                        </Link>
                        <Popover.Button className="nav-hambuerger">
                            <span className="sr-only">Close main menu</span>
                            <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="px-2 pt-2 space-y-1">
                        {navigation.map((item) => (
                            <Link href={item.href} key={`navigation-item--menu-${item.name}`} passHref>
                                <a href="_" className={`${router.pathname === item.href ? "bg-l-title dark:bg-d-title" : ""} mobile-item`}>
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Nav;
