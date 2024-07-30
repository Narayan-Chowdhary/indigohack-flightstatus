import { useState,useCallback } from "react"

export default function SearchBar({setFlights, socketDataEmit}) {
    const [search, setSearchText] = useState()

    const handleChange = (event) => {
        event.preventDefault();
        setSearchText(event?.target.value)
    }

    const handleSubmit = useCallback((event)=>{
        event.preventDefault()
        socketDataEmit(search);
    }, [search])
    return (
        <>
         
            <form className=" hidden sm:block" >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <svg className="w-6 h-6  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-6 ps-16 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#009] focus:ring-2 focus:border-[#009] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-[#009]  outline-none dark:focus:border-[#009]" placeholder="Seamless and instant flight searches" required onChange={handleChange} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-3 bg-[#009] hover:bg-[#009] focus:ring-4 outline-none focus:ring-[#009] font-medium rounded-lg text-base px-8 py-3 dark:bg-[#009] dark:hover:bg-[#009] dark:focus:ring-[#009]" onClick={handleSubmit}>Search</button>
                </div>
            </form>
        </>
    )
}