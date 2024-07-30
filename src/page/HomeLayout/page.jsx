
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeroSection from "../../components/HeroSection/HeroSection"
import Header from "../../components/Header/Header"
import FlightDetails from "../../components/FlightDetails/FlightDetails"
import SearchedFlights from "../../components/SearchedFlights/SearchedFlights"

export default function HomeLayout() {
    return (
        <>
            <>
                <Router>
                    <div>
                        <Header />
                        <HeroSection />
                        <Routes>
                            <Route exact path="/" element={<FlightDetails />} />
                            <Route path="/searched-flight" element={<SearchedFlights />} />
                        </Routes>
                    </div>
                </Router>
            </>
        </>
    )
}