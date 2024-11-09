// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const NavLeft = () => {
    return (
        <div className="flex flex-row flex-wrap md:flex-col gap-6">
            <span className="flex flex-row md:flex-col gap-4 md:gap-6 bg-cas-dark border-2 border-cas-text rounded-lg p-4 h-min min-w-fit">
                <NavLink to="/about-me">About Me</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/links">Links</NavLink>
            </span>
            <span className="flex flex-row md:flex-col gap-4 md:gap-6 max-md:py-4 md:px-4">
                <Link
                    className="flex flex-row gap-1 place-items-center font-medium transition-transform ease-in-out hover:scale-[1.15] hover:italic hover:underline"
                    to="https://github.com/retronouns/cas-codes"
                    target="_blank"
                >
                    <img src="./github-mark.svg" className="w-5 h-5" />
                    ./src
                </Link>
            </span>
        </div>
    );
};

interface NavLinkProps {
    to: string;
    children: ReactNode;
}
const NavLink = (
    { to, children }: NavLinkProps,
) => {
    const path = globalThis.location.pathname;
    return (
        <Link
            className={path === to
                ? "font-bold italic animate-squiggle"
                : "font-medium transition-transform ease-in-out hover:scale-[1.15] hover:italic w-fit hover:animate-squiggle"}
            to={to}
        >
            {children}
        </Link>
    );
};
