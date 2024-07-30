import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
export default function SearchedFlights() {
    const location = useLocation()
    const [flights, setFlights] = useState()

    useEffect(() =>{
        setFlights([location.state.flight])
    },[])

    return (
        <>
<section className="mx-[100px] mt-[150px] bg-white bg-opacity-10 backdrop-blur-sm py-5 antialiased dark:bg-gray-900 md:py-8">                <div className="mx-auto  px-4 2xl:px-0">
                    <div className="mx-auto max-w-7xl">


                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                {flights?.length > 0 ? (flights?.map((flight, idx) => (
                                    <div key={idx} className="flex flex-wrap items-center gap-y-4 py-6">
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Flight ID:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                <a href="#" className="hover:underline">{flight?.flight_id}</a>
                                            </dd>
                                        </dl>

                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Airline:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"> {flight?.airline}</dd>
                                        </dl>

                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                            <dd className={`me-2 mt-1.5 inline-flex items-center rounded  ${flight.status === "On Time" ? "bg-green-100" : flight.status === "Cancelled" ? "bg-red-100" : "bg-[#fef08a]"} px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300`}>
                                                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                                </svg>
                                                {flight?.status}
                                            </dd>
                                        </dl>



                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Departure Gate:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{flight?.departure_gate}</dd>
                                        </dl>

                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Arrival Gate:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{flight?.arrival_gate}</dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Scheduled Departure:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"> {new Date(flight?.scheduled_departure).toLocaleString()}</dd>
                                        </dl>

                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Scheduled Arrival:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"> {new Date(flight?.scheduled_arrival).toLocaleString()}</dd>
                                        </dl>



                                    </div>

                                ))) : "No Flights Available"}





                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}