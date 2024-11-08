import { Link } from "react-router-dom";
import { Page } from "../components/page.tsx";

export const Links = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min w-fit">
                <Link
                    className="transition ease-in-out hover:scale-110 hover:italic hover:underline w-min"
                    to="https://github.com/retronouns"
                    target="_blank"
                >
                    GitHub
                </Link>
                <Link
                    className="transition ease-in-out hover:scale-110 hover:italic hover:underline w-min"
                    to="https://bsky.app/profile/cas.bsky.social"
                    target="_blank"
                >
                    BlueSky
                </Link>
            </div>
        </Page>
    );
};
