import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState,useEffect } from "react";
function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={resolvedTheme === 'dark' ? assets.logo_dark : assets.logo} alt='logo' className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <a
                        href="mailto:sabirrh12@gmail.com"
                        className="flex gap-1.5 items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={resolvedTheme === 'dark' ? assets.mail_icon_dark : assets.mail_icon} alt="mailIcon" className="w-8" />
                        sabirrh12@gmail.com
                    </a>
                </div>

            </div>
            <div className="text-center sm:flex items-center justify-between border-t
            border-gray-400 mx-[10%] mt-12 py-6">
                <p>
                    © 2025 Sabir Hussain. All right reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center sm:mt-0">
                    <li><Link className="flex w-full gap-1.5" target="_blank" href="https://www.facebook.com/profile.php?id=100007414189430">
                        <Image src={assets.facebook_icon} alt="icon" className="w-8" />
                        facebook</Link></li>
                    <li><Link className="flex w-full gap-1.5" target="_blank" href='https://www.instagram.com/sabir._rh_/'>
                        <Image src={assets.instagram_icon} alt="Intagram_icon" className="w-8" />
                        Instagram
                    </Link></li>
                    <li><Link className="flex w-full gap-1.5" target="_blank" href='https://www.linkedin.com/in/sabirhussainteli '>
                        <Image
                         src={resolvedTheme === 'dark' ? assets.linkedIn_icon : assets.linkedin_dark}
                          alt="linkedin_icon" className="w-8" />
                        LinkedIn</Link></li>
                </ul>
            </div>

        </div>

    )
};

export default Footer;