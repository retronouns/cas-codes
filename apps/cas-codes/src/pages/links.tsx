import { Link } from "react-router-dom";
import { Page } from "../components/page.tsx";

export const Links = () => {
    return (
        <Page title="Links">
            <div className="flex flex-col gap-4 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min">
                <Link
                    to="https://github.com/retronouns"
                    target="_blank"
                >
                    GitHub
                </Link>
                <Link
                    to="https://bsky.app/profile/cas.bsky.social"
                    target="_blank"
                >
                    BlueSky
                </Link>
            </div>
        </Page>
    );
};
