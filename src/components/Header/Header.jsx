import { useState, useEffect } from 'react';
import IndigoLogo from "../../assests/images/logo.avif";
import { headerMenu } from "../../json/Json";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const nav = useNavigate();
    const [bgColor, setBgColor] = useState('');
    const [menus, setMenus] = useState("text-[#fff]")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBgColor('bg-white bg-opacity-40');
                setMenus("text-[#009]")
            } else {
                setBgColor('');
                setMenus("text-[#fff]")
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`z-50 w-[100%] py-5 inset-x-0 top-0 fixed ${bgColor}`}>
            <div className="flex items-center max-w-screen-xl justify-between mx-auto relative z-100">
                <div className="h-[45px] pl-5 sm:h-[50px] w-auto">
                    <img
                        src={IndigoLogo}
                        alt="Indigo Logo"
                        className={`h-[100%] w-auto cursor-pointer ${menus === "text-[#fff]" ? "image-white" :""}`}
                        onClick={() => nav("/")}
                    />
                </div>
                <ul className="hidden sm:flex justify-between mx-20 w-[40%]">
                    {headerMenu?.map((menu, idx) => (
                        <li
                            key={idx}
                            className={`${menus} font-[poppins] text-lg font-normal tracking-normal leading-5 cursor-pointer`}
                        >
                            {menu?.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
