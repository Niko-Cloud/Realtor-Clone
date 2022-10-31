import React, {useState} from 'react';
import Offers from "./Offers";

const CreateListing = () => {
    const [formData,setformData]=useState({
        type: "rent",
        name: "",
        bedrooms:1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address:"",
        description:"",
        offer:true,
        regularPrice: 0,
        discountedPrice: 0
    })

    const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice} = formData

    function onChange() {

    }

    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-6">Create a Listing</h1>
            <form>
                <p className="text-lg mt-6 font-semibold mb-1">Sell or Rent</p>
                <div className="flex justify-between">
                    <button onChange={onChange} type="button" id="type" value="sale" className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out mr-3 ${
                        type === "rent" ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>sell</button>
                    <button onChange={onChange} type="button" id="type" value="sale" className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out ml-3 ${
                        type === "sale" ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>rent</button>
                </div>
                <p className="mt-6 text-lg font-semibold">Name</p>
                <div>
                    <input type="text" id="name" value={name} onChange={onChange} placeholder="Name" maxLength="32" minLength="10" required className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                </div>
                <div className="flex space-x-6 mb-6">
                    <div>
                        <p className="text-lg font-semibold">Beds</p>
                        <input type="number" id="bedrooms" value={bedrooms}  min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"/>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Baths</p>
                        <input type="number" id="bathrooms" value={bathrooms}  min="1" max="50" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"/>
                    </div>
                </div>
                <p className="text-lg mt-6 font-semibold mb-1">Parking Spot</p>
                <div className="flex justify-between">
                    <button onChange={onChange} type="button" id="parking" value={true} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out mr-3 ${
                        !parking ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>Yes</button>
                    <button onChange={onChange} type="button" id="parking" value={false} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out ml-3 ${
                        parking ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>No</button>
                </div>
                <p className="text-lg mt-6 font-semibold mb-1">Furnished</p>
                <div className="flex justify-between">
                    <button onChange={onChange} type="button" id="furnished" value={true} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out mr-3 ${
                        !furnished ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>Yes</button>
                    <button onChange={onChange} type="button" id="furnished" value={false} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out ml-3 ${
                        furnished ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>No</button>
                </div>
                <p className="mt-6 text-lg font-semibold">Address</p>
                <div>
                    <textarea type="text" id="address" value={address} onChange={onChange} placeholder="Name" required className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                </div>
                <p className="text-lg font-semibold">Description</p>
                <div>
                    <textarea type="text" id="description" value={description} onChange={onChange} placeholder="Name" required className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
                </div>
                <p className="text-lg font-semibold mb-1">Offer</p>
                <div className="flex justify-between">
                    <button onChange={onChange} type="button" id="offer" value={true} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out mr-3 ${
                        !offer ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>Yes</button>
                    <button onChange={onChange} type="button" id="offer" value={false} className={`uppercase w-full shadow-md px-7 py-3 rounded font-medium tx-sm hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out ml-3 ${
                        offer ? ("bg-white text-black") : ("bg-slate-600 text-white")
                    }`}>No</button>
                </div>
                <div className="flex items-center mb-6">
                    <div>
                        <p className="text-lg mt-6 font-semibold mb-1">Regular Price</p>
                        <div className="flex w-full justify-center items-center space-x-6">
                            <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min="50" max="40000000" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                            {type === "rent" && (
                                <div>
                                    <p className="text-md whitespace-nowrap w-full">$ / Month</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {offer && (
                    <div className="flex items-center mb-6">
                        <div>
                            <p className="text-lg font-semibold mb-1">Discounted Price</p>
                            <div className="flex w-full justify-center items-center space-x-6">
                                <input type="number" id="discountedPrice" value={discountedPrice} onChange={onChange} min="50" max="40000000" required={offer} className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"/>
                                {type === "rent" && (
                                    <div>
                                        <p className="text-md whitespace-nowrap w-full">$ / Month</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <div className="mb-6">
                        <p className="text-lg font-semibold mb-1">Images</p>
                        <p className="text-gray-600">The 1st image will be the cover (max 6)</p>
                        <input type="file" id="images" onChange={onChange} accept=".jpg,.png,.jpeg" multiple required className="bg-white border text-gray border-slate-300 w-full px-6 py-3 rounded shadow-md transition duration-200 ease-in-out focus:bg-white focus:border-slate-600"/>
                    </div>
                </div>
                <button type="submit" className="mb-6 w-full bg-blue-600 rounded text-lg text-white px-6 py-2 uppercase shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out foucs:bg-blue-800 focus:shadow-lg active:bg-blue-900 active:shadow-lg">Create Listing</button>
            </form>
        </main>
    );
};

export default CreateListing;