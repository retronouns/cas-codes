import { Page } from "../components/page.tsx";
import { BlueskyEmbed } from "../components/bsky-embed.tsx";

export const Posts = () => {
    return (
        <Page>
            <div className="border-2 border-cas-text rounded-lg h-min bg-cas-light">
                <BlueskyEmbed postUrl="https://bsky.app/profile/cas.bsky.social/post/3l7qz6r4fgs26" />
            </div>
        </Page>
    );
};
