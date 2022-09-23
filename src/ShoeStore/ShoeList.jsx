import React, { Component } from 'react'
import ShoeItem from './ShoeItem';

export default class Shoelist extends Component {
    renderProduct = () => {
        const { shoeList, xemThem } = this.props;
        return shoeList.map((shoe, index) => {
            return <div className="col-4 mb-4" key={index}>
                <ShoeItem shoeItem={shoe} xemThem={xemThem} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3 className='text-center'>Shoes Shop</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
