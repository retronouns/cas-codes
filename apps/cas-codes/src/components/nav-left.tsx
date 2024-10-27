// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const NavLeft = () => {
    return (
        <span className="flex flex-col gap-4 bg-cas-dark border-2 border-cas-text rounded-lg p-4">
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/links">Links</NavLink>
            <div className="flex-grow"></div>
            <Link
                className="text-sm"
                to="https://github.com/retronouns/cas-codes"
                target="_blank"
            >
                ./src
            </Link>
        </span>
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
            className={path === to ? "font-bold italic" : ""}
            to={to}
        >
            {children}
        </Link>
    );
};
