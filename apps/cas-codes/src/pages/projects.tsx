import { Link } from "react-router-dom";
import { Page } from "../components/page.tsx";
// @deno-types="@types/react"
import { ReactNode } from "react";
export const Projects = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4 p-2">
                <p className="italic font-bold text-xl">Notable Projects</p>
                <ProjectCard
                    title="cas.codes"
                    url="https://github.com/retronouns/cas-codes"
                    imageSrc="./cas-codes.png"
                >
                    <p>
                        This website!
                    </p>
                    <p>
                        The frontend is using Deno 2, React, and TailwindCSS.
                    </p>
                    <p>
                        The backend is using Deno 2, Fastify, and Postgres.
                    </p>
                </ProjectCard>
                <ProjectCard
                    title="sql-ts-map"
                    url="https://github.com/retronouns/sql-ts-map"
                    imageSrc="./sql-ts-map.png"
                >
                    <p>
                        A proof of concept method for inferring Typescript types
                        from a string literal containing raw SQL.
                    </p>
                    <p>
                        It is assuming database introspection was used to create
                        a generated Typescript type that corresponds to the
                        database's schema.
                    </p>
                    <p>
                        No other code generation is used.
                    </p>
                </ProjectCard>
            </div>
        </Page>
    );
};

interface ProjectCardProps {
    title: string;
    url: string;
    children: ReactNode;
    imageSrc: string;
}
const ProjectCard = (
    { title, url, children, imageSrc }: ProjectCardProps,
) => {
    return (
        <Link
            to={url}
            target="_blank"
            className="cursor-pointer hover:underline underline-offset-2"
        >
            <div className="flex flex-col gap-2 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min">
                <p className="font-bold text-lg">{title}</p>
                <div className="flex flex-col gap-2 border-cas-text border-t pt-2">
                    {children}
                </div>
                <img src={imageSrc}></img>
            </div>
        </Link>
    );
};
