import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

function NavBar() {
    const [isScroll, setIsScroll] = useState(false);
    const { theme, setTheme } = useTheme();
    const sideMenuRef = useRef();
    const [mounted, setMounted] = useState(false);


    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false)
            }
        })
    }, [])



    useEffect(() => {
        setMounted(true);
    }, [])


    const navBgClass = isScroll
        ? theme === "dark"
            ? "bg-[#11001F]/80 backdrop-blur-lg shadow-sm"
            : "bg-white/80 backdrop-blur-lg shadow-sm"
        : "bg-transparent";
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="backGround Color" className="w-full" />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${navBgClass} `}
            >
                {mounted && (
                    <a href="#top">
                        <Image src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            alt="Logo"
                            className="w-25 h-26 cursor-pointer mr-14 
                 "/>
                    </a>
                )}
                {/* <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"}
                 bg-white shadow-sm bg-opacity-50`}> */}
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300 ${theme === "dark"
                        ? "bg-[#11001F]/80 shadow-sm"
                        : isScroll
                            ? "bg-white/80 shadow-sm"
                            : "bg-transparent"
                        }`}
                >
                    <li><a className="font-Ovo" href="#top">Home</a></li>
                    <li><a className="font-Ovo" href="#about">About me</a></li>
                    <li><a className="font-Ovo" href="#services">Services</a></li>
                    <li><a className="font-Ovo" href="#work">My Work</a></li>
                    <li><a className="font-Ovo" href="#contact">Contact me</a></li>

                </ul>
                <div className="flex items-center gap-2 ">
                    {/* <button onClick={()=>setIsDarkMode(prev => !prev)}>
                        <Image  src={assets.moon_icon} alt="Icon" className="w-6 cursor-pointer" />
                    </button> */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Image src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} alt="Icon" className="w-6 cursor-pointer" />
                    </button>
                    <a className={`hidden lg:flex items-center gap-3 px-10
                    py-2.5 border  rounded-full ml-3 font-Ovo ${theme === 'dark' ? 'border-white/50' : 'border-gray-500'} `}
                        href="#contact"
                    >
                        Contact
                        <Image src={theme === 'dark' ? assets.arrow_icon_dark : assets.arrow_icon}
                            alt="Icon"
                            className="w-3 " />
                    </a>
                    <button onClick={openMenu} className="block md:hidden  dark:text-white ml-3 cursor-pointer">
                        <Image src={theme === 'dark' ? assets.menu_white : assets.menu_black} alt="Icon-Menu" className="w-6" />
                    </button>
                </div>


                {/* ----------Mobile Menu ---------- */}

                <ul ref={sideMenuRef} className="md:hidden flex:col gap-4 py-20 px-10 fixed -right-64
                top-0 buttom-0 w-50 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white">
                    <div onClick={closeMenu} className="absolute right-6 top-6">
                        <Image src={theme === 'dark' ? assets.close_white : assets.close_black} alt="Icon Close" className="cursor-pointer w-5" />
                    </div>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;