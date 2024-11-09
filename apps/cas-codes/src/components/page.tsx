// @deno-types="@types/react"
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavLeft } from "~/components/nav-left.tsx";
import { useAppContext } from "~/context/app-context.tsx";

interface Props {
    children: ReactNode;
}
export const Page = ({ children }: Props) => {
    const { visitorCount } = useAppContext();

    return (
        <div className="w-screen h-screen flex flex-col gap-2 font-cas text-cas-text p-6 pt-2 max-w-screen-xl relative">
            <div className="flex flex-row p-2 place-items-center">
                <Link
                    className="text-4xl font-medium italic hover:animate-squiggle"
                    to="/"
                >
                    cas.codes
                </Link>
                <span className="flex-grow" />
                {visitorCount && (
                    <span className="font-medium italic">
                        Visitors: {visitorCount}
                    </span>
                )}
            </div>
            <div className="flex-grow flex flex-col md:flex-row gap-4 pb-4">
                <NavLeft />
                {children}
            </div>
        </div>
    );
};
