import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, scale } from "motion/react"
function Header() {
    const titleRef = useRef();
    const titleInstance = useRef();

    useEffect(() => {
        titleInstance.current = new Typed(titleRef.current, {
            strings: [
                "Full Stack Developer",
                "Computer Science Graduate",
                "JavaScript Enthusiast",
                "React & Node.js Developer",
                "Passionate Learner",
                "Problem Solver",
                "Open to Work Opportunities",
                "Eager to Join a Tech Team",
                "Ready to Learn and Grow"
            ],
            typeSpeed: 80,
            backSpeed: 90,
            loop: true,
        });
        return () => {
            titleInstance.current.destroy();
        };
    }, []);


    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-24">

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt="Profile_Image"
                    className="rounded-full w-32 h-32 object-cover" />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo"
            >Hi! I&apos;m Sabir Hussain Teli
                <Image src={assets.hand_icon}
                    alt="Profile_Image"
                    className="w-6" />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                <span ref={titleRef} className="text-cyan-300 font-semibold"></span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >I&apos;m a Passionate Full Stack Developer with a strong foundation
                in modern web technologies, aiming to grow as a well-rounded software engineer by building impactful and efficient digital solutions.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className="px-10 py-3 border border-white rounded-full bg-black text-white
                    flex items-center gap-2"
                >
                    Contact me  <Image src={assets.right_arrow_white} alt="Contact_button"
                        className="w-4" />
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Sabir_Hussain_Resume.pdf" download
                    className="px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
                >my resume
                    <Image src={assets.download_icon} alt="Profile_Image"
                        className="w-4" />
                </motion.a>
            </div>
        </div>
    )
}

export default Header;