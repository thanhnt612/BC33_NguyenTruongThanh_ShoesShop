import React, { Component } from 'react'

export default class ShoeItem extends Component {

    render() {
        const { shoeItem, xemThem } = this.props
        return (
            <div className='item m-3'>
                <div className="card">
                    <img src={shoeItem.img} alt="" />
                </div>
                <div className="detail p-3">
                    <p>{shoeItem.name}</p>
                    <p className='fw-bold'>{shoeItem.price} $</p>
                    <button className="btn btn-dark"
                        data-bs-toggle="modal" data-bs-target="#modalId"
                        onClick={() => {
                            xemThem(shoeItem)
                        }}
                    >Add to cart  <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div >
        )
    }
}
