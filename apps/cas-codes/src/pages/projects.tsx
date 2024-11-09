import { Link } from "react-router-dom";
import { Page } from "~/components/page.tsx";
// @deno-types="@types/react"
import { ReactNode } from "react";
export const Projects = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4">
                <ProjectCard
                    title="cas.codes"
                    url="https://github.com/retronouns/cas-codes"
                    imageSrc="./cas-codes.png"
                >
                    <p>
                        This website! It's built in a monorepo containing both
                        the frontend and backend code.
                    </p>
                    <p>
                        The frontend uses Deno 2, React, and TailwindCSS. The
                        backend uses Deno 2, Fastify, and Postgres.
                    </p>
                    <p>
                        CI/CD uses Github Actions, and can independently
                        identify if frontend or backend code was modified, only
                        deploying what is necessary.
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
                <ProjectCard
                    title="rustle"
                    url="https://github.com/retronouns/rustle"
                >
                    <p>A Wordle clone in Rust.</p>
                </ProjectCard>
            </div>
        </Page>
    );
};

interface ProjectCardProps {
    title: string;
    url: string;
    children: ReactNode;
    imageSrc?: string;
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
            <div className="flex flex-col gap-2 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min transition-transform ease-in-out hover:scale-[1.02]">
                <p className="font-bold text-lg">{title}</p>
                <div className="flex flex-col gap-2 border-cas-text border-t pt-2">
                    {children}
                </div>
                {imageSrc && (
                    <img className="border-2 border-cas-text" src={imageSrc}>
                    </img>
                )}
            </div>
        </Link>
    );
};
