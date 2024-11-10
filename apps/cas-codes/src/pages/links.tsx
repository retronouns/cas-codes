import { Link } from "react-router-dom";
import { Page } from "~/components/page.tsx";

export const Links = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min w-fit">
                <Link
                    className="flex flex-row gap-2 place-items-center transition-transform ease-in-out hover:scale-110 hover:italic hover:underline w-fit"
                    to="https://github.com/retronouns"
                    target="_blank"
                >
                    <img src="./github-mark.svg" className="w-5 h-5" />
                    GitHub
                </Link>
                <Link
                    className="flex flex-row gap-2 place-items-center transition-transform ease-in-out hover:scale-110 hover:italic hover:underline w-fit"
                    to="https://bsky.app/profile/cas.bsky.social"
                    target="_blank"
                >
                    <img src="./bluesky-logo.svg" className="w-5 h-5" />
                    BlueSky
                </Link>
            </div>
        </Page>
    );
};
