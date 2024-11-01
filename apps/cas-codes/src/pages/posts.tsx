import { Page } from "../components/page.tsx";
import { BlueskyEmbed } from "../components/bsky-embed.tsx";

export const Posts = () => {
    return (
        <Page>
            <div className="flex flex-col gap-6">
                <BlueskyEmbed postUrl="https://bsky.app/profile/cas.bsky.social/post/3l7ugn6p4p326" />
                <BlueskyEmbed postUrl="https://bsky.app/profile/cas.bsky.social/post/3l7rkcrc75l2x" />
                <BlueskyEmbed postUrl="https://bsky.app/profile/cas.bsky.social/post/3l7qz6r4fgs26" />
            </div>
        </Page>
    );
};
