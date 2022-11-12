import Link from 'next/link';

function Product({ product }) {
    return (
        <>
            <div className="card mb-4"  >
                {/* <img src={`https://source.unsplash.com/720x400/?${post.id}`} className="card-img-top" alt="img" /> */}
                <div className="card-body" >
                    <h5 className="card-title">{product.title}</h5>
                    <Link href={`/product/${product.id}`} passHref legacyBehavior>
                        <a className="btn btn-primary">Go somewhere</a>
                    </Link>
                    <h6>{product.description}</h6>
                    <hr />
                    <h6>category :  {product.category}</h6>
                </div >
            </div >

        </>
    )

}

export default Product