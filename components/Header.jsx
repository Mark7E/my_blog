import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'




const header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='container mx-auto px-10 mb-8 '>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className=' md:float-right block flex flex-row-reverse'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white '>
                            خربشات بنات
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-right md:contents'>
                    {categories.map((category) =>
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-left mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    )}

                </div>
            </div>
        </div>
    )
}

export default header