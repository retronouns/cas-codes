// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const NavLeft = () => {
    return (
        <span className="flex flex-row md:flex-col gap-6 bg-cas-dark border-2 border-cas-text rounded-lg p-4 h-min min-w-fit">
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/links">Links</NavLink>
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
