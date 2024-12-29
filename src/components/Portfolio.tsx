"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";

import React from 'react'
const projects = [
    {
        title: " YouTube+Twitter Complete Back-End",
        desc: "This YouTube + Twitter Backend Project is a feature-rich web application that combines key functionalities of both YouTube and Twitter. It allows users to manage video uploads, tweets, playlists, subscriptions, and more. Users can register, log in, manage profiles, and track watch history. The project includes capabilities for video and tweet publishing, editing, commenting, and liking. Built with Node.js, Express.js, and MongoDB, it also integrates Cloudinary for media management. The backend supports comprehensive user interactions such as subscribing to channels, liking videos, and managing playlists. It’s an ideal project for learning scalable backend development.",
        devStack: "JavaScript, Node.js, Express.js, MongoDB, Cloudinary",
        link: "https://github.com/VedSher/backend_project",
        git: "https://github.com/VedSher/backend_project",
        src: proj2
    },
    {
        title: "Learn-A-Music-App",
        desc: "Learn is a web app for a music company built with Next.js and Node.js, featuring a course management system for browsing, enrolling, and interacting with music courses. It includes real-time messaging for seamless communication and integrates custom UI/UX, offering a dynamic, user-friendly experience for online music education.",
        devStack: "React, Node.js, GPT-3 API, Tailwind CSS",
        link: "https://musicapp-teal.vercel.app/",
        git: "https://github.com/VedSher/musicapp",
        src: proj1
    },
    {
        title: "Product Designer Website",
        desc: "In my debut ReactJS project, I integrated Locomotive, GSAP, and Framer Motion to create a captivating digital experience. With a focus on innovative design and implementation, this project showcases an immersive journey into web development, blending creativity with modern technologies for a standout user experience.",
        devStack: "HTML, CSS, JavaScript, React, Locomotive, GSAP",
        link: "https://ochi-project-react.vercel.app/",
        git: "https://github.com/VedSher/Ochi-Project-react",
        src: proj3
    }
];

const Portfolio = () => {
  return (
    <div className="mt-52 text-white bg-gradient-to-b from-black to-[#381a5f] py-18" id="portfolio">
        
        <h1 className=" text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
            Selected <span className="text-orange-400">Projects</span>
        </h1>

        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row gap-12"}`}
                >
                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700"/>
                    </div>
                    
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio