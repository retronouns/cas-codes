// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const NavLeft = () => {
    return (
        <div className="flex flex-row md:flex-col gap-6">
            <span className="flex flex-row md:flex-col gap-6 bg-cas-dark border-2 border-cas-text rounded-lg p-4 h-min min-w-fit">
                <NavLink to="/about-me">About Me</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/links">Links</NavLink>
            </span>
            <Link
                className="font-medium p-4"
                to="https://github.com/retronouns/cas-codes"
                target="_blank"
            >
                ./src
            </Link>
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
            className={path === to ? "font-bold italic" : "font-medium"}
            to={to}
        >
            {children}
        </Link>
    );
};
