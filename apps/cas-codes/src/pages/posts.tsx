import { Page } from "~/components/page.tsx";
import { BlueskyEmbed } from "~/components/bsky-embed.tsx";

const POST_URLS = [
    // "https://bsky.app/profile/did:plc:blmee3sssscqkd6edrs7dbh6/post/3lag3omb45j2l",
    "https://bsky.app/profile/cas.bsky.social/post/3lcehvfhyx22a",
    "https://bsky.app/profile/cas.bsky.social/post/3lce7z7g4pk2v",
    "https://bsky.app/profile/cas.bsky.social/post/3lce5o4uzfk2v",
    "https://bsky.app/profile/cas.bsky.social/post/3lbdhyhuznc2r",
    "https://bsky.app/profile/cas.bsky.social/post/3lbapyrdtls2v",
    "https://bsky.app/profile/cas.bsky.social/post/3lbapa7mwe22v",
    "https://bsky.app/profile/cas.bsky.social/post/3lb6bqhfdwc2v",
    "https://bsky.app/profile/cas.bsky.social/post/3lb2ljmrixk2b",
    "https://bsky.app/profile/cas.bsky.social/post/3lb26bl4tlc22",
    "https://bsky.app/profile/cas.bsky.social/post/3lazzqxo6y222",
    "https://bsky.app/profile/cas.bsky.social/post/3lazplys2tc2a",
    "https://bsky.app/profile/cas.bsky.social/post/3lazkflbnn22a",
    "https://bsky.app/profile/cas.bsky.social/post/3lazclbl26k2a",
    "https://bsky.app/profile/cas.bsky.social/post/3lawx6qcw722z",
    "https://bsky.app/profile/cas.bsky.social/post/3lavbbi7sfk2j",
    "https://bsky.app/profile/cas.bsky.social/post/3laml4xjx722g",
    "https://bsky.app/profile/cas.bsky.social/post/3lafydijtn42l",
    "https://bsky.app/profile/cas.bsky.social/post/3l7uiasat7k2e",
    "https://bsky.app/profile/cas.bsky.social/post/3l7ugn6p4p326",
    "https://bsky.app/profile/cas.bsky.social/post/3l7rkcrc75l2x",
    "https://bsky.app/profile/cas.bsky.social/post/3l7qz6r4fgs26",
    "https://bsky.app/profile/cas.bsky.social/post/3l7hztkcsbj2f",
    "https://bsky.app/profile/cas.bsky.social/post/3l7hzcfwau62r",
    "https://bsky.app/profile/cas.bsky.social/post/3l7fnszf56n2z",
    "https://bsky.app/profile/cas.bsky.social/post/3kskjttwebt2j",
    "https://bsky.app/profile/cas.bsky.social/post/3kflpizc2hc2v",
];

// i think the post ID appears to be alphanumerically incrementing? this seems to put in chronological order without an api call!!!
POST_URLS.sort((a, b) => {
    const postA = a.match(/post\/([^/]+)/)?.[1] ?? "";
    const postB = b.match(/post\/([^/]+)/)?.[1] ?? "";
    return postA < postB ? 1 : -1;
});

export const Posts = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4">
                {POST_URLS.map((postUrl) => (
                    <BlueskyEmbed key={postUrl} postUrl={postUrl} />
                ))}
            </div>
        </Page>
    );
};
