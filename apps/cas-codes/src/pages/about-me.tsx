import { Page } from "../components/page.tsx";
import { useAppContext } from "../context/app-context.tsx";

export const AboutMe = () => {
    const { enableSquiggle } = useAppContext();
    return (
        <Page>
            <div className="flex flex-col gap-4 bg-cas-light border-2 border-cas-text rounded-lg p-6 max-w-2xl h-fit font-medium">
                <div className="text-4xl font-extralight">
                    {`<3`}
                </div>
                <div className="flex-grow flex flex-col gap-4">
                    <div>Hello! ^_^</div>
                    <div>
                        My name is{" "}
                        <span className="italic font-bold">
                            {" Cas"}
                        </span>, but I also go by
                        <span className="italic font-bold">
                            {" Caroline"}
                        </span>. Call me by whichever you like! {`<3`}
                    </div>
                    <div>
                        I am a fullstack engineer by profession, but when I am
                        not doing that, I enjoy skiing, rock climbing, listening
                        to audiobooks, playing video games, and riding my
                        motorcycle.
                    </div>
                    <div>
                        -<span className="italic font-bold">
                            {" Cas"}
                        </span>
                    </div>
                </div>
                <div className="text-4xl font-extralight">
                    {`<3`}
                </div>
            </div>
        </Page>
    );
};
