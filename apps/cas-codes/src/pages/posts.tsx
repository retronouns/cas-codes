import { Page } from "../components/page.tsx";
import { BlueskyEmbed } from "../components/bsky.tsx";

export const Posts = () => {
    return (
        <Page>
            <BlueskyEmbed postUrl="https://bsky.app/profile/cas.bsky.social/post/3l7qz6r4fgs26" />
        </Page>
    );
};
