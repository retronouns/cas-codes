import { Page } from "../components/page.tsx";

const html =
    `<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:blmee3sssscqkd6edrs7dbh6/app.bsky.feed.post/3l7qz6r4fgs26" data-bluesky-cid="bafyreiddplbxp4xw5baechusn4bjajwtv2pwh7ctziv2tiehvlfy7epk4q"><p lang="en">reasons companies should hire me:
- i will write little jokes in code comments
- i will cry if u dont
- i might let u ride my motorcycle
- bees</p>&mdash; autogynephagia (<a href="https://bsky.app/profile/did:plc:blmee3sssscqkd6edrs7dbh6?ref_src=embed">@cas.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:blmee3sssscqkd6edrs7dbh6/post/3l7qz6r4fgs26?ref_src=embed">Oct 30, 2024 at 2:45 PM</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>`;

export const Posts = () => {
    return (
        <Page>
            <div
                className="drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>
        </Page>
    );
};
