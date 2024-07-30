import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import SearchBar from '../SearchBar/SearchBar';
import { BASE_URL } from "../../utils/Services";

const socket = io(BASE_URL, { autoConnect: false });

export default function FlightDetails() {
    const [flights, setFlights] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All Flights');

    useEffect(() => {
        socket.connect();
        socket.on('flightStatusUpdate', handleSocketData);

        return () => {
            socket.off('flightStatusUpdate');
            socket.disconnect();
        };
    }, []);

    const handleSocketData = (data) => {
        if (data.error) {
            console.error(data.error);
        } else {
            setFlights(data);
          
        }
    };

    useEffect(() => {
        socketDataEmit(selectedOption);
    }, [selectedOption]);

    const socketDataEmit = (selectedOption) => {
        socket.emit('setFilter', selectedOption);
    }

    const handleChange = (event) => {
        event.preventDefault();
        const status = event?.target?.value;
        setSelectedOption(status);
    };

    return (
        <>
            <section className='relative shadow-xl mb-20'>
                <div className="absolute top-0 inset-x-0 rounded-t-xl max-w-screen-xl mx-auto -mt-48 bg-white bg-opacity-full backdrop-blur-sm antialiased dark:bg-gray-900 md:py-8">
                    <div className="mx-auto px-4 xl:p-10">
                        <div className="mx-auto max-w-7xl">
                            <div>
                                <SearchBar socketDataEmit={socketDataEmit} />
                            </div>
                            <hr className='my-8' />
                            <div className="gap-4 bg-slate-200 p-3 rounded-t-lg sm:flex sm:items-center sm:justify-between">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My Flights</h2>

                                <div className="mt-6 gap-4 space-y-8 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                                    <div>
                                        <label htmlFor="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select order type</label>
                                        <select id="order-type" className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-[1.01rem] text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            value={selectedOption}
                                            onChange={handleChange}>
                                            <option value="All Flights">All Flights</option>
                                            <option value="On Time">On Time</option>
                                            <option value="Delayed">Delayed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className="flow-root">
                                <div className="divide-y divide-gray-200 border-l border-b border-r dark:divide-gray-700 pl-2">
                                    {flights && flights?.length > 0 ? (
                                        flights?.map((flight, idx) => (
                                            <div key={idx} className="flex flex-wrap items-center gap-y-4 py-6">
                                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Flight ID:</dt>
                                                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                        <a href="#" className="hover:underline">{flight?.flight_id}</a>
                                                    </dd>
                                                </dl>

                                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Airline:</dt>
                                                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{flight?.airline}</dd>
                                                </dl>

                                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
                                                    <dd className={`me-2 mt-1.5 inline-flex items-center rounded ${flight?.status === "On Time" ? "bg-green-100" : flight?.status === "Cancelled" ? "bg-red-100" : "bg-[#fef08a]"} px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300`}>
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
                                                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{new Date(flight?.scheduled_departure)?.toLocaleString()}</dd>
                                                </dl>

                                                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Scheduled Arrival:</dt>
                                                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{new Date(flight?.scheduled_arrival)?.toLocaleString()}</dd>
                                                </dl>
                                            </div>
                                        ))
                                    ) : "No Flights Available"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
