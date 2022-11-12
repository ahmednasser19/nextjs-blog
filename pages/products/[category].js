import React from 'react'


const ArticleList = ({ products, category }) => {
    return (
        <>
            <div>Product List</div>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.body}</p>
                        <hr />
                    </div>
                )

            })}
        </>
    )
}

export default ArticleList

export async function getServerSideProps(context) {
    const { params } = context; //context contain params
    const { category } = params; //params contain category

    const res = await fetch(`https://dummyjson.com/products/category/${category}`)
    console.log(res)
    const data = await res.json()
    return {
        props: { products: data.products },
    }
}