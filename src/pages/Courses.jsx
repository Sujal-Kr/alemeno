import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CourseCard from '../components/Card/CourseCard'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    let data = useSelector((state) => state.courses.courses)
    const [text, setText] = useState("")
    const navigate = useNavigate()
    const [result, setResult] = useState()

    useEffect(() => {
        
        const id = setTimeout(() => {
            if(text.trim()==""){
                setResult([])
                return
            }
            const res = data.filter((item) => {
                return item.name.toLowerCase().includes(text.toLowerCase()) == true
            })
            setResult(res)
            console.log(res)
        }, 1000)
        return () => clearInterval(id)
    }, [text])
    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
    }

    return (
        <div className='p-10 bg-slate-100'>
            <div className='relative max-w-xs'>
                <input
                    type="text"
                    placeholder='search...'
                    value={text}
                    onChange={handleChange}
                    className='peer w-full  outline-purple-200 rounded text-sm p-2 '
                />
                <div className=' flex-col gap-2 absolute flex z-10 bg-white  w-full'>
                    {
                        result?.map((item, index) => (
                            <div
                                onClick={()=>navigate(`/courses/${item.id}`)}
                                key={index}
                                className='px-2 py-1'>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h3 className='border-b-2 pb-2 my-4 text-xl '>All Courses</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-stretch'>
                    {
                        data?.map((course, index) => (
                            <div onClick={() => navigate(`/courses/${course.id}`)} key={index}>
                                <CourseCard item={course}/>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Courses
