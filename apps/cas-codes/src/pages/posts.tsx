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

// i think the post ID appears to be alphanumerically incrementing? this seems to put in chronological order without an api call!!!
POST_URLS.sort((a, b) => {
    const postA = a.match(/post\/([^/]+)/)?.[1] ?? "";
    const postB = b.match(/post\/([^/]+)/)?.[1] ?? "";
    return postA < postB ? 1 : -1;
});

export const Posts = () => {
    return (
        <Page title="Bluesky Posts">
            <div className="flex flex-col gap-6 pb-6">
                {POST_URLS.map((postUrl) => <BlueskyEmbed postUrl={postUrl} />)}
            </div>
        </Page>
    );
};
