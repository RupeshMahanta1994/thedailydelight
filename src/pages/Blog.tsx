import Post from '@/commons/Post/Post'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
    return (
        <div>
            <div>
                <p>
                    I'm Urvashee, living in Banglore. Love to travel & also have a huge intrest in fashion, photography and food!
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6 md:px-4 lg:px-10 py-5'>
                {[1, 1, 1, 1, 1, 1, 2].map((item, index) => {
                    return (
                        <>
                            <Post key={index} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog