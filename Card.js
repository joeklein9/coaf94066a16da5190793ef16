import React from "react"

export default function Card (props) {
    return (
        <div className = "card-container">
        
            <div className = "image-container">
                 <img  src={`${props.imageUrl}`} className="card-image" />
                 
            </div>
            <div className = "text-container">
                <div className = "top-info">
                    <img src= "./images/gps-icon.png" className="gps-icon" width = "7px" height = "9.55px" />
                    <p className = "location"> {props.location}</p>
                    <a className = "google" href = {props.googleMapsUrl}> View on Google Maps</a>
                </div>
                <h3 className = "title"> {props.title}</h3>
                <p className = "dates"> {props.startDate} - {props.endDate} </p>
                <p className = "description"> {props.description}</p>
                <hr></hr>
            </div>
            <hr></hr>
               
    
        </div>
    )
}