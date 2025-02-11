import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


type Props = {}

const Post = (props: Props) => {
    return (
        <div>
            <Card className='overflow-hidden'>
                <div className='relative w-full h-[180px] '>
                    <Image src={"/heroImage.jpg"} objectFit='cover' fill alt="Blog Photo" />
                </div>

                <CardContent className="grid grid-cols-12  gap-2">
                    <div className="col-span-2 flex flex-col items-center  gap-1">
                        <Facebook className='h-8 w-8 bg-blue-300 rounded-full p-2' />
                        <Twitter className='h-8 w-8 bg-blue-300 rounded-full p-2' />
                        <Instagram className='h-8 w-8 bg-blue-300 rounded-full p-2' />
                    </div>
                    <div className="col-span-10  py-2 space-y-2">

                        <CardTitle>Breakfast Pancake With Cinaamon, Gallery</CardTitle>
                        <CardDescription>
                            I call this my weekend lifesaver. Sure, it’s just another prolific kale smoothie recipe, but I should give you fair ..
                        </CardDescription>
                    </div>

                </CardContent>
            </Card>



        </div>
    )
}

export default Post