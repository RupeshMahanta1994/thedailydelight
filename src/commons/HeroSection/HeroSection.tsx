"use client"
import { Fullscreen } from 'lucide-react'
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react"; // Icons from lucide-react
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    // Toggle Play/Pause
    const handleToggle = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <section className='relative'>
            <div className="relative w-full h-[600px]">
                <Image
                    src="/heroImage.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                />
            </div>
            <video
                ref={videoRef}
                src="/intro.mp4"


                loop

                className="absolute overflow-hidden bottom-4 right-4 w-80 h-60 rounded-lg shadow-lg"
            />
            <button
                onClick={handleToggle}
                className="absolute bottom-20 right-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

        </section>
    )
}

export default HeroSection