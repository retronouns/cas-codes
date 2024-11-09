import { Page } from "~/components/page.tsx";
// @deno-types="@types/react"
// import { useState } from "react";

export const AboutMe = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4 bg-cas-light border-2 border-cas-text rounded-lg p-6 max-w-2xl h-fit font-medium">
                <div className="flex-grow flex flex-col gap-4">
                    <p className="text-4xl font-extralight">
                        {`<3`}
                    </p>
                    <p>Hello! ^_^</p>
                    <p>
                        My name is{" "}
                        <span className="italic font-bold hover:animate-squiggle">
                            {" Cas"}
                        </span>, but I also go by
                        <span className="italic font-bold hover:animate-squiggle">
                            {" Caroline"}
                        </span>. Call me by whichever you like! {`<3`}
                    </p>
                    <p>
                        I am a fullstack engineer by profession, but when I am
                        not doing that, I enjoy skiing, rock climbing, listening
                        to audiobooks, playing video games, and riding my
                        motorcycle.
                    </p>
                    <p>
                        -<span className="italic font-bold hover:animate-squiggle">
                            {" Cas"}
                        </span>
                    </p>
                    <p className="text-4xl font-extralight">
                        {`<3`}
                    </p>
                </div>
            </div>
        </Page>
    );
};
