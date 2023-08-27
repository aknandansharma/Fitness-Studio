
import React from "react";
import "./enrollNow.css";
import { useNavigate } from "react-router-dom";

const EnrollNow = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className='dark:bg-violet-400 mainDiv '>
                <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900'>
                    <h1 className='text-5xl font-bold sm:text-6xl xl:max-w-3xl dark:text-red-900'>
                        ??, ????, ???, ?????????, ??????????, ?????, ?????,
                        ?????: ????? ????????{" "}
                    </h1>
                    <p className='mt-6 mb-4 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900'>
                        Principles, Personal Disciplines, Postures, Control over
                        life forces, Withdrawal of Senses, Focused
                        Concentration, Meditative Absorption, and Enlightenment
                        are the 8 limbs of Yoga.
                    </p>
                    <p className='mt-0 mb-4 text-lg xl:max-w-3xl dark:text-gray-900'>
                        ????????, ????????? ???????, ????????, ???? ???????? ??
                        ????????, ???????, ????? ???????? ????????, ?????, ??
                        ??????? ??? ?? ?? ??? ????
                    </p>

                    <div className='flex flex-wrap justify-center'>
                        <button
                            type='button'
                            onClick={() => navigate("/register")}
                            className='px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-sky-700'>
                            Register
                        </button>
                        <button
                            type='button'
                            onClick={() => navigate("/login")}
                            className='px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-green-700'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <img
                src='https://cdn.shopify.com/s/files/1/0592/6141/9682/files/20.06.2021_web.jpg?v=1632129564'
                alt=''
                className='w-5/6 mx-auto mb-10 -mt-20 rounded-lg shadow-md lg:-mt-60 dark:bg-red-500'
            />
        </section>
    );
};

export default EnrollNow;

