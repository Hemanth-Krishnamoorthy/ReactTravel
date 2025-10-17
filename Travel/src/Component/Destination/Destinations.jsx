import { useState } from "react";
import Destcard from "./Destcard";
import Tajmahal from "../../assets/Tajmahal.jpg";
import Paris from "../../assets/Paris.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Rome from "../../assets/Rome.jpg";
import London from "../../assets/London.jpg";
import Sydney from "../../assets/Sydney.jpg";
import NewYork from "../../assets/NewYork.jpg";
import Cairo from "../../assets/Cairo.jpg";
import Tokyo from "../../assets/Tokyo.jpg";

import "./Destinations.css";

function Destinations() {
    // State to store the user's search input
    const [searchTerm, setSearchTerm] = useState("");

    const places = [
        {id:1, image:Tajmahal, Plsname:"Tajmahal", details:"Iconic white marble symbolizing eternal love"},
        {id:2, image:Paris, Plsname:"Paris", details:"Famous city in France with historic landmarks"},
        {id:3, image:Dubai, Plsname:"Dubai", details:"City of luxury, innovation, skyscrapers, desert adventures, and dreams."},
        {id:4, image:Rome, Plsname:"Rome", details:"Ancient city with historic architecture, Colosseum, and Vatican."},
        {id:5, image:London, Plsname:"London", details:"Famous for Big Ben, London Eye, and rich history."},
        {id:6, image:Sydney, Plsname:"Sydney", details:"Known for Opera House, Harbour Bridge, and beautiful beaches."},
        {id:7, image:NewYork, Plsname:"New York", details:"City that never sleeps, home to Times Square and Statue of Liberty."},
        {id:8, image:Cairo, Plsname:"Cairo", details:"City with ancient pyramids, museums, and Nile River views."},
        {id:9, image:Tokyo, Plsname:"Tokyo", details:"Modern city blending tradition, technology, and culture."}
    ];

    return (
        <>
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Search for a destination..."
                    className="search-input" // Added a class for styling
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
            </div>

            <div className="destbody">
                {places
                    .filter((place) => {
                        if (searchTerm === "") {
                            // If the search bar is empty, show all places
                            return place;
                        } else if (place.Plsname.toLowerCase().includes(searchTerm.toLowerCase())) {
                            // Otherwise, show only the places whose names include the search term
                            return place;
                        }
                        return null; // It's good practice to have a default return
                    })
                    .map((place) => (
                        <Destcard key={place.id} image={place.image} Plsname={place.Plsname} details={place.details} />
                    ))}
            </div>
        </>
    );
}

export default Destinations;