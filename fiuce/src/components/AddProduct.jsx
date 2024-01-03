import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from "axios";

function AddProduct() {

    const initialvalue = {
        name: '',
        desc: '',
        category: '',
        price: '',
        rate: '',
        thumb: '',
        images: [],
    }

    const [addProduct, setAddProduct] = useState(initialvalue);
    let [modal, setModal] = useState(false);

    const handleClose = () => setModal(false);

    const addproductdata = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2200/', addProduct)
            .then(response => {
                console.log(response.data);
                setAddProduct(initialvalue);
                if (response.data.status === "success") {
                    setModal(true);
                } else {
                    setModal(false);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>

            <section>
                <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <h2 className="font-semibold text-xl text-gray-600 mb-6">Add Products</h2>
                            {/* <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Products Details</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} name='addProductForm'>
                                        <div className="lg:col-span-2">
                                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                <div className="md:col-span-5">
                                                    <label htmlFor="name">Product Name</label>
                                                    <input type="text" name="name" onChange={addproductdata} value={addProduct.name} id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Product name...' />
                                                </div>

                                                <div className="md:col-span-5">
                                                    <label htmlFor="desc">Description</label>
                                                    <textarea rows={2} type="text" name="desc" onChange={addproductdata} value={addProduct.desc} id="desc" className="border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Description..." />
                                                </div>

                                                <div className="md:col-span-5">
                                                    <label htmlFor="category">Category</label>
                                                    <input type="text" name="category" onChange={addproductdata} value={addProduct.category} id="category" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Category..." />
                                                </div>

                                                <div className="md:col-span-3">
                                                    <label htmlFor="price">Price</label>
                                                    <input type="text" name="price" onChange={addproductdata} value={addProduct.price} id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Price..." />
                                                </div>

                                                <div className="md:col-span-2">
                                                    <label htmlFor="rate">Rate</label>
                                                    <input type="text" name="rate" onChange={addproductdata} value={addProduct.rate} id="rate" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Rate..." />
                                                </div>

                                                <div className="md:col-span-5">
                                                    <label htmlFor="thumb">Thumbnail</label>
                                                    <input type="text" name="thumb" onChange={addproductdata} value={addProduct.thumb} id="thumb" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Thumbnail image link..." />
                                                </div>

                                                <div className="md:col-span-5">
                                                    <label htmlFor="images">Images</label>
                                                    <textarea rows={3} type="text" name="images" onChange={addproductdata} value={addProduct.images} id="images" className="transition-all flex items-center border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Product Images link..." />
                                                </div>

                                                <div className="md:col-span-5 text-right">
                                                    <div className="inline-flex items-end">
                                                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">ADD</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <Modal show={modal} onHide={handleClose}>
                                <Modal.Body>PRODUCT SUCCESSFULLY ADD</Modal.Body>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct;
