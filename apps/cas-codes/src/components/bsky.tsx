// @deno-types="@types/react"
import { useEffect, useState } from "react";

interface Props {
    postUrl: string;
}
export const BlueskyEmbed = ({ postUrl }: Props) => {
    const [thread, setThread] = useState<Awaited<ReturnType<typeof getPost>>>();
    useEffect(() => {
        const matches = postUrl.match(
            /^https:\/\/bsky.app\/profile\/([^/]+)\/post\/(.+)$/,
        );
        if (!matches) {
            throw new Error("Invalid bksy post URL");
        }
        const handle = matches[1];
        const post = matches[2];
        if (!handle || !post) {
            throw new Error("Invalid bksy post URL");
        }
        (async () => {
            const did = await resolveHandle(handle);
            const thread = await getPost(did, post);
            setThread(thread);
        })();
    }, [postUrl]);
    return <div>{thread?.post.record.text}</div>;
};

const resolveHandle = async (handle: string) => {
    const didReq = await fetch(
        `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`,
    );
    const didReqJson = await didReq.json() as { did: string };
    return didReqJson.did;
};
const getPost = async (did: string, post: string) => {
    const threadReq = await fetch(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://${did}/app.bsky.feed.post/${post}&depth=0&parentHeight=0`,
    );
    const threadReqJson = await threadReq.json() as {
        thread: {
            post: {
                uri: string;
                cid: string;
                author: {
                    did: string;
                    handle: string;
                    displayName?: string;
                    avatar?: string;
                    createdAt: string;
                };
                record: {
                    createdAt: string;
                    langs: string[];
                    text: string;
                };
                replyCount: number;
                repostCount: number;
                likeCount: number;
                quoteCount: number;
                indexedAt: string;
            };
        };
    };
    return threadReqJson.thread;
};
