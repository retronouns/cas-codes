// @deno-types="@types/react"
import { useEffect, useState } from "react";

interface Props {
    postUrl: string; // should be a post url like https://bsky.app/profile/*/post/*
}
export const BlueskyEmbed = ({ postUrl }: Props) => {
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const matches = postUrl.match(
            /^https:\/\/bsky.app\/profile\/([^/]+)\/post\/(.+)$/,
        );
        if (!matches) {
            throw new Error("Invalid bksy post URL");
        }
        const [_, handle, postId] = matches;
        if (!handle || !postId) {
            throw new Error("Invalid bksy post URL");
        }
        (async () => {
            const did = await resolveHandle(handle);
            const post = await getPost(did, postId);
            setPost(post);
        })();
    }, [postUrl]);

    return (
        <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cursor-pointer hover:underline underline-offset-2"
        >
            <div className="flex-1 h-min max-w-[600px] border-2 border-cas-text rounded-lg bg-cas-light">
                <div className="flex-1 flex-col flex gap-2 p-4" lang="en">
                    <div className="flex gap-2.5 items-center">
                        <div className="w-10 h-10 overflow-hidden rounded-full shrink-0">
                            <img src={post?.author.avatar} />
                        </div>
                        <div className="text-cas-text">
                            <p>{post?.author.displayName}</p>
                            <p>@{post?.author.handle}</p>
                        </div>
                    </div>
                    <p className="min-[300px]:text-lg text-cas-text leading-6 break-word break-words whitespace-pre-wrap">
                        {post?.record.text}
                    </p>

                    <time
                        dateTime={post?.record.createdAt}
                        className="text-cas-text mt-1 text-sm"
                    >
                        {post &&
                            new Date(post.record.createdAt).toLocaleString()}
                    </time>
                    <div className="border-t border-cas-text w-full pt-2.5 flex items-center gap-5 text-sm">
                        <div className="flex text-cas-text items-center gap-2">
                            <img
                                src="./like.svg"
                                className="w-5 h-5"
                            />
                            <p className="font-bold mb-px">
                                {post?.likeCount}
                            </p>
                        </div>
                        <div className="flex text-cas-text items-center gap-2">
                            <img
                                src="./reskeet.svg"
                                className="w-5 h-5"
                            />
                            <p className="font-bold mb-px">
                                {post?.repostCount}
                            </p>
                        </div>
                        <div className="flex text-cas-text items-center gap-2">
                            <img
                                src="./reply.svg"
                                className="w-5 h-5"
                            />
                            <p className="font-bold mb-px">
                                {post?.replyCount}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const resolveHandle = async (handle: string) => {
    const didReq = await fetch(
        `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`,
    );
    const didReqJson = await didReq.json() as { did: string };
    return didReqJson.did;
};

interface Post {
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
}
const getPost = async (did: string, post: string) => {
    const threadReq = await fetch(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://${did}/app.bsky.feed.post/${post}&depth=0&parentHeight=0`,
    );
    const threadReqJson = await threadReq.json() as {
        thread: {
            post: Post;
        };
    };
    return threadReqJson.thread.post;
};
