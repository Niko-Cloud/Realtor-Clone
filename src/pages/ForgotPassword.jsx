import React, {useState} from 'react';
import {Link} from "react-router-dom";
import OAuth from "../Components/OAuth";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify";

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success("Message was sent")
        }catch (error){
            toast.error("Couldn't send the reset message")
        }
    }

    return (
        <div>
            <section>
                <h1 className="text-3xl text-center mt-6 font-bold">
                    Forgot Password
                </h1>
                <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                    <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="key-pic" className="w-full rounded-2xl"/>
                    </div>
                    <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                        <form onSubmit={onSubmit}>
                            <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out  mb-6"
                                   type="email"
                                   id="email"
                                   value={email}
                                   onChange={onChange}
                                   placeholder="E-mail Address"/>
                            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
                                <p className="mb-6">Don't have an account?
                                    <Link to="/sign-up" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"> Register</Link>
                                </p>
                                <p>
                                    <Link to="/sign-up" className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out">Sign-up instead?</Link>
                                </p>
                            </div>
                            <button type="submit" className="bg-blue-600 w-full text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transiton duration-150 ease-in-out hover:shadow-lg active:bg-blue-900">
                                Reset Password
                            </button>
                            <div className="my-4
                            before:border-t
                            before:border-gray
                            flex before:flex-1
                            items-center
                            after:border-t
                            after:border-gray
                            after:flex-1"
                            >
                                <p className="text-center font-semibold mx-4 ">OR</p>
                            </div>
                            <OAuth/>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;