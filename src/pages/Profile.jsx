import React, {useState} from 'react';
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router";

const Profile = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        name:auth.currentUser.displayName,
        email:auth.currentUser.email
    })

    const {name,email} = formData

    const onLogout = () => {
        auth.signOut()
        navigate("/")
    }

    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center font-bold mt-6">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form>
                        {/* Name Input */}
                        <input className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" type="text" id="name" value={name} disabled/>

                        {/* Email Input */}
                        <input className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} disabled/>
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                            <p className="flex items-center">
                                Do you want to change your name?
                                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                                    Edit
                                </span>
                            </p>
                            <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-200">
                                Sign Out
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;