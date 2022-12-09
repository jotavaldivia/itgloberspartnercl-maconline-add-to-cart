import React from 'react'

const ButtonGroup = () => {
    return (
        <>
            {/* <div>
                <a href="/checkout/#/cart"> CHECK OUT</a>
            </div> */}
            <div className='flex items-center justify-between mt5'>
                <button className='bg-blue white pa3 b--light-silver br2' > CONTINÚA COMPRANDO</button>
                <a className='bg-white blue pa3 b--black-50 br2' href="/checkout/#/cart"> VER CARRITO</a>
            </div>
        </>
    )
}


export default ButtonGroup