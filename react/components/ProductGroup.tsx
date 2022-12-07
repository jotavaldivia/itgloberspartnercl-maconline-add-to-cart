import React from 'react'

type Props = {
    products: []
}

type Product = {
    skuName: string
    id: string
    price: number,
    quiantity: number,
    imageUrls:
    {
        at1x: string
    }

}
const ProductGroup = ({ products }: Props) => {
    console.log("mis productos en productgroup son:", products)
    return (
        <div>mi lista de productos
            {
                products.map((product: Product, index) => {
                    console.group("aca ", product)
                    return (
                        <div key={index}>

                            <img src={product.imageUrls.at1x} alt="" />
                            <p>{product.skuName}</p>
                            <p>{product.price / 100}</p>
                            <p>{product.quiantity}</p>
                            <p>{product.id}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductGroup