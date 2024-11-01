import { Page } from "../components/page.tsx";
import { BlueskyEmbed } from "../components/bsky-embed.tsx";

const POST_URLS = [
    "https://bsky.app/profile/cas.bsky.social/post/3l7uiasat7k2e",
    "https://bsky.app/profile/cas.bsky.social/post/3l7ugn6p4p326",
    "https://bsky.app/profile/cas.bsky.social/post/3l7rkcrc75l2x",
    "https://bsky.app/profile/cas.bsky.social/post/3l7qz6r4fgs26",
    "https://bsky.app/profile/cas.bsky.social/post/3l7hztkcsbj2f",
    "https://bsky.app/profile/cas.bsky.social/post/3l7hzcfwau62r",
    "https://bsky.app/profile/cas.bsky.social/post/3l7fnszf56n2z",
];

export const Posts = () => {
    return (
        <Page>
            <div className="flex flex-col gap-6 pb-6">
                {POST_URLS.map((postUrl) => <BlueskyEmbed postUrl={postUrl} />)}
            </div>
        </Page>
    );
};
