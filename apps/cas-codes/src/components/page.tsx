// @deno-types="@types/react"
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLeft } from "./nav-left.tsx";
import { API_HOST } from "../env.ts";

let VISITOR_COUNT: number | null = null;

interface Props {
    children: ReactNode;
}
export const Page = ({ children }: Props) => {
    const [visitorCount, setVisitorCount] = useState<number | null>(
        VISITOR_COUNT,
    );

    useEffect(() => {
        if (!VISITOR_COUNT) {
            (async () => {
                const req = await fetch(`${API_HOST}/visitors`, {
                    method: "GET",
                });
                const visitors = await req.json() as { count: number };
                VISITOR_COUNT = visitors.count;
                setVisitorCount(VISITOR_COUNT);
            })();
        }
    }, []);
    return (
        <div className="w-screen h-screen flex flex-col gap-2 font-cas text-cas-text p-6 pt-2">
            <div className="flex flex-row gap-4 p-2 place-items-center">
                <Link className="text-4xl font-medium italic flex-grow" to="/">
                    cas.codes
                </Link>
            </div>
            <div className="flex-grow flex flex-col md:flex-row gap-8">
                <NavLeft />
                {children}
            </div>
            <div className="flex flex-row gap-4 place-items-center">
                <span className="italic flex-grow">
                    Visitors: {visitorCount ?? 0}
                </span>
                <Link
                    className="text-sm"
                    to="https://github.com/retronouns/cas-codes"
                    target="_blank"
                >
                    ./src
                </Link>
            </div>
        </div>
    );
};
