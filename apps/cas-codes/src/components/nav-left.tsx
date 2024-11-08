// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/app-context.tsx";

export const NavLeft = () => {
    const { setEnableSquiggle, enableSquiggle } = useAppContext();
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
                    className="font-medium transition ease-in-out hover:scale-110 hover:italic hover:underline"
                    to="https://github.com/retronouns/cas-codes"
                    target="_blank"
                >
                    ./src
                </Link>
                <button
                    className={`text-cas-text font-medium ${
                        enableSquiggle ? `` : "line-through"
                    }`}
                    onClick={() => setEnableSquiggle(!enableSquiggle)}
                >
                    Squiggle
                </button>
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
                ? "font-bold italic"
                : "font-medium transition ease-in-out hover:scale-110 hover:italic hover:animate-wiggle w-fit"}
            to={to}
        >
            {children}
        </Link>
    );
};
