import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseCard from '../components/Card/CourseCard';


const Home = () => {


    const data = useSelector((state) => {
        return state.courses.courses.slice(0, 6)
    })

    return (
        <div className='p-4 min-h-dvh bg-slate-100'>
            <div className="flex py-10 justify-center items-center ">
                <div className="text-center max-w-6xl md:mx-10">
                    <p className="my-3 text-sm tracking-widest text-purple-700 uppercase">Welcome <br /> </p>
                    <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl ">
                        Education at your fingertips.
                    </h1>
                    <div>
                        <p className="max-w-2xl mx-auto my-2 text-sm text-gray-500  md:text-lg ">
                            Unlock your potential with our comprehensive online courses. Start learning quickly and efficiently with expert-led classes designed to fit your goals. Explore a wide range of subjects, powered by the latest technology and tailored to your learning needs.

                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
                        <Link
                            to="/courses"
                            className=" text-center rounded   py-3 text-purple-700 px-8 py bg-purple-200 ">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div className='p-4 sm:p-6 lg:p-10 '>
                <div className='my-4'>
                    <h3 className='text-3xl'>Courses</h3>
                    <p className='text-base border-b py-2'>Explore through various resources</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 place-items-stretch'>
                    {
                        data?.map((item, index) => (
                            <CourseCard item={item} key={index} />
                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default Home
