import { assets, infoList, toolsData } from "@/assets/assets";
import tailwindConfig from "@/tailwind.config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, scale } from "motion/react"
function About() {
    const { resolvedTheme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            id="about" className="w-full px-[12%] py-10
           scroll-mt-20">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo">About me</motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image} alt="" className="w-full rounded-3xl" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I’m Sabir Hussain Teli, a Computer Science Engineering graduate passionate about full-stack
                        development and building impactful digital solutions. With hands-on experience in MERN stack projects,
                        real-time applications, and problem-solving, I aim to create clean, efficient, and user-focused software.
                        I’m also deeply interested in research in computer software and theory, always looking to learn and innovate.
                    </p>
                      <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6
                        max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{scale:1.05}}
                                key={index} className={`border border-gray-500 rounded-xl p-6 cursor-pointer 
                            hover:-translate-y-1 duration-500
                         `}
                                // style={`{resolvedTheme === 'dark' ? { boxShadow: '4px 4px 0 #fff } : { boxShadow: '4px 4px 0 #000' }`}
                                style={resolvedTheme === 'dark' ? { boxShadow: '4px 4px 0 #fff' } : { boxShadow: '4px 4px 0 #000' }}
                            >

                                <Image className="w-7 mt-3" src={resolvedTheme === 'dark' ? iconDark : icon} alt={title} />
                                <h3 className={`my-4 font-semibold text-gray-700 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'} `}>{title}</h3>
                                <p className="text-gray-600 text-sm dark-">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className={`my-6  font-Ovo ${resolvedTheme === 'dark' ? "dark:text-white/80" : 'text-gray-700'} `}
                    >
                        Tools I use
                    </motion.h4>
                    <ul className="flex gap-4">
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                className="flex items-center justify-center w-12 bg-transparent
                            sm:w-14 aspect-square border border-gray-400 rounded-lg
                            cursor-pointer hover:-translate-y-1 duration-500 gap-2 ${resolvetheme === 'dark' ? 'bg-[#2a004a]/50' : 'bg-transparent'}`}"
                                key={index}>
                                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>

    )
};


export default About;