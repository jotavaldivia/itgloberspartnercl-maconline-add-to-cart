import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

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
const ProductGroup = ({ products }: Props, { blockClass }: { blockClass: string }) => {
    console.log("mis productos en productgroup son:", products)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    return (
        <div>
            <h3 className='tc'>Mi lista de productos</h3>
            {
                products.map((product: Product, index) => {
                    console.group("aca ", product)
                    return (
                        <div key={index} className={container__item}>
                            <img src={product.imageUrls.at1x} alt="" />
                            <div className='ma4-l'>
                                <p>Nombre: {product.skuName}</p>
                                <p>precio:{product.price / 100}</p>
                                <p>cantidad:{product.quiantity}</p>
                                <p>id:{product.id}</p>

                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductGroup