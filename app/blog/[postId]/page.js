export default async function BlogPostPage({params}) {
    const {postId} = await params;
    return (
        <main>
            <h1>Post page</h1>
            <p>{postId}</p>
        </main>
    )
}