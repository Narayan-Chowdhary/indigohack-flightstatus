import IndigoLogo from "../../assests/images/logo.avif"
import { useState } from "react"
import { headerMenu } from "../../json/Json"
import { searchFlightById } from "../../utils/ApiEngine/ApiEngine"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const nav = useNavigate()

    return (
        <div className="z-50 w-[100%] py-5  inset-x-0 top-0 fixed ">

            <div className="flex items-center max-w-screen-xl justify-between mx-auto " >
                <div className="h-auto sm:h-[50px]  w-auto">
                    <img src={IndigoLogo} alt="Indigo Logo" className="h-[100%] w-auto cursor-pointer image-white  " onClick={()=>nav("/")}/>
                </div>
                <ul className=" hidden sm:flex justify-between mx-20 w-[40%] ">
                    {headerMenu?.map((menu, idx) => (
                        <li key={idx} className="text-[#fff] font-[poppins] text-lg font-normal tracking-normal leading-5 cursor-pointer">
                            {menu?.title}
                        </li>
                    ))}
                </ul>

         

            </div>
        </div>

    )
}