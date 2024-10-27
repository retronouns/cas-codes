// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavLeft } from "./nav-left.tsx";

interface Props {
    children: ReactNode;
}
export const Page = ({ children }: Props) => {
    return (
        <div className="w-screen h-screen flex flex-col gap-2 font-cas text-cas-text p-6 pt-2">
            <div className="flex flex-row gap-4 p-2 place-items-center">
                <Link className="text-4xl font-medium italic flex-grow" to="/">
                    cas.codes
                </Link>
                <span className="italic">Under Construction</span>
            </div>
            <div className="flex-grow flex flex-row gap-8">
                <NavLeft />
                {children}
            </div>
        </div>
    );
};
