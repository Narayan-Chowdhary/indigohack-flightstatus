import BgImage from "../../assests/images/firefly.jpg"

export default function HeroSection() {
    return (
        <>
            <div className="bg-neutral-900 "

                style={{
                    backgroundImage: `url(${BgImage})`,
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                }}
            >
                <div className="max-w-screen-xl mx-auto">

                    <div className="max-w-2xl   pt-24 lg:pt-24 pb-10  ">
                        <h1 className=" font-semibold text-white text-2xl sm:text-5xl md:text-6xl mt-22 sm:mt-24  pl-5 ">
                            <span className="text-[#fff] ">Hi there,</span> <br />
                            <span className=" leading-snug">
                                where would you like to
                            </span>&nbsp;<span className="font-normal bg-[#009] text-white px-2">IndiGo</span>&nbsp;today?
                        </h1>

                    </div>
                 
                </div>







            </div>

        </>

    )
}