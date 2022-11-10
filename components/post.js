import Link from 'next/link';

function Post({ post }) {
    return (
        <>
            <div className="card mb-4"  >
                {/* <img src={`https://source.unsplash.com/720x400/?${post.id}`} className="card-img-top" alt="img" /> */}
                <div className="card-body" >
                    <h5 className="card-title">{post.title}</h5>
                    <Link href={`/blog/${post.id}`} passHref legacyBehavior>
                        <a className="btn btn-primary">Go somewhere</a>
                    </Link>
                </div >
            </div >

        </>
    )

}

export default Post