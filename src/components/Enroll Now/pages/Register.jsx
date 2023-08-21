import { useState } from "react";
import './auth.css'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Form Data:", formData);
    };

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='bg-blue-500 md:w-1/2 flex justify-center items-center'>
                <img
                    className='w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 imagePhoto'
                    src='https://media.istockphoto.com/id/1177170869/vector/seven-chakras-on-meditating-yogi-man-silhouette-vector-illustration.jpg?s=612x612&w=0&k=20&c=-W6ngC20jfS-FJvdGkPRtQaa71l5iYoRCmsj91rhXgI='
                    alt='Side pic'
                />
            </div>
            <div className='bg-white md:w-1/2 flex justify-center items-center'>
                <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2'>
                    <h2 className='text-2xl font-semibold mb-8 text-center'>Register Here</h2>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='name'>
                                Full Name
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter Email Id"
                            />
                        </div>
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='phone'>
                                Phone No
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='password'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter Password"
                            />
                        </div>
                        <button
                            className='w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-green-600'
                            type='submit'>
                            Register
                        </button>
                    </form>
                    <hr className="w-100 h-px my-8 bg-black border-0 dark:bg-black  " />
                    
                    <div className='flex justify-center items-center mt-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            className='w-6 h-6 mr-2 text-blue-500 cursor-pointer'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                            />
                        </svg>
                        <span className='text-lg text-gray-600'>
                            Google Login
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
