import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { imgShoe } = this.props
        let { name, price, description, img } = imgShoe
        return (
            <div>
                <div>
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Shoes Shop</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <h3 className='text-center'>{name}</h3>
                                            <img src={img} alt="" height={350}
                                                className="w-100"
                                                style={{ objectFit: 'contain' }} />
                                        </div>
                                        <div className="col-8">
                                            <h3>Shoes Information :</h3>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <td className='align-baseline fw-bold'>Description</td>
                                                        <td>{description}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='align-baseline fw-bold'>Price</td>
                                                        <td>{price} $</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-dark">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Place to the bottom of scripts */}
                </div>
            </div>
        )
    }
}
