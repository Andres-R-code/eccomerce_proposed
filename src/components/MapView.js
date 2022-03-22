import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";
// import '../styles/MapView.css';

const mapStyles = {
    position: "relative",
    width: "40%",
    height: "40%",
};

class MapContainer extends Component {
    render () {
        return(
            <div className='m-2 p-4 overflow-hidden'>
                <Map className="w-20 !important h-20 !important overflow-hidden"
                google = {this.props.google}
                style={mapStyles }
                zoom = {10}
                initialCenter = {
                    {
                        lat: 4.710989,
                        lng: -74.072090
                    }
                }
            /> 
            </div>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD9VaUwIAuM59SkD-444RQ6SiuBEWRq0xw"
})(MapContainer)