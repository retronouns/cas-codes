// @deno-types="@types/react"
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavLeft } from "./nav-left.tsx";
import { useAppContext } from "../context/app-context.tsx";

interface Props {
    children: ReactNode;
}
export const Page = ({ children }: Props) => {
    const { visitorCount } = useAppContext();

    return (
        <div className="w-screen h-screen flex flex-col gap-2 font-cas text-cas-text p-6 pt-2">
            <div className="flex flex-row gap-6 p-2 place-items-center">
                <Link className="text-4xl font-medium italic" to="/">
                    cas.codes
                </Link>
                <span className="font-semibold italic">
                    Visitors: {visitorCount ?? 0}
                </span>
            </div>
            <div className="flex-grow flex flex-col md:flex-row gap-8">
                <NavLeft />
                {children}
            </div>
        </div>
    );
};
