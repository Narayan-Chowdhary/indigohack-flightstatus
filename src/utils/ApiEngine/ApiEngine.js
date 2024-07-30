import { BASE_URL, endpoints } from "../Services"

export async function getAllFlight(){
        let allFlightResponse = await fetch(`${BASE_URL}${endpoints?.getFlightDetails}`);
        let responseJson = await allFlightResponse.json();
        return responseJson     
}

export async function searchFlightById(id){
    const allFlightResponse = await fetch(`${BASE_URL}${endpoints?.getFlightDetailsById}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", },
        body: JSON.stringify({flight_id: id})
      });
      const allFlightData = await allFlightResponse.json();
      return allFlightData
    
}

export async function searchFlightByStatus(status){
    const allFlightResponse = await fetch(`${BASE_URL}${endpoints?.getFlightDetails}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", },
        body: JSON.stringify({status: status})
      });
      const allFlightData = await allFlightResponse.json();
      return allFlightData
    
}