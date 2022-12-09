import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
// import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const productInfo = useProduct()
    const { orderForm: { items, totalizers } } = useOrderForm()
    const { orderForm } = useOrderForm()
    console.log("informacion del producto : ", productInfo)
    console.log("informacion de la orden : ", items, totalizers)
    console.log("ordeform", orderForm)
    return (
        <div className={container}>
            <ProductGroup products={items} />
            {/* <Totalizers /> */}
            <div className='ba ma3 tc'>
                <p>
                    tenemos {items.length} items en tu compra
                </p>
                <p>
                    total: ${totalizers[0]?.value / 100}
                </p>
            </div>

            <ButtonGroup />
        </div>
    )
}

export default AddToCartInfo