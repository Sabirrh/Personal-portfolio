import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, scale } from "motion/react"
function Services() {
    const { resolvedTheme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" className="w-full px-[12%] py-10
                 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-center mb-2 text-lg font-Ovo">
                My Expertise
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >Services

            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-15 mb-12 font-Ovo">I create full-stack web applications with clean code and modern design.
                Whether it’s frontend or backend, I build for performance and usability.
            </motion.p>
            <motion.div
            initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{delay:0.7, duration: 0.6 }}
             className="grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))]  gap-6 my-10">
                {serviceData.map(({ title, icon, description, link }, index) => (
                    <motion.div
                    whileHover={{scale:1.05}}
                     key={index}
                        className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-#fcf4ff hover:-translate-y-1 duration-500 "
                        // style={{ boxShadow: '4px 4px 0 #000' }}
                        style={resolvedTheme === 'dark' ? { boxShadow: '4px 4px 0 #fff' } : { boxShadow: '4px 4px 0 #000' }}
                    >
                        <Image src={icon} alt="Icon" className="w-10" />
                        <h3 className={`text-lg text-gray-700 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>{title}</h3>
                        <p className={`text-sm text-gray-600 leading-5 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>{description}</p>
                        <a href={link}
                            className="flex items-center gap-2 text-sm mt-5"
                        >
                            Read more <Image src={assets.right_arrow} alt="right-arrow " className="w-4" />
                        </a>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    )
}

export default Services;