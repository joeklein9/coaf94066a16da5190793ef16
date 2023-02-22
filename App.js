import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data.js"

export default function App () {
     const cards = data.map(item => {
        return (
            <Card 
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    })        
    return (
    <div className = "wrapper">
        <Navbar/>
        {cards}
    </div>
    )
}