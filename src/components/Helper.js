import {Popup} from 'react-map-gl';

function popUpHelper (selectedPlace) {
    let returnText = '';
    if (selectedPlace.place === 'bruh') {
        returnText = '<div>' + 
        '<h2>{selectedPlace.place}{", "}{selectedPlace.state}</h2>' + 
        '<p>Latitude: {selectedPlace.geometry.coordinates[1]}</p>' + 
        '<p>Longitude: {selectedPlace.geometry.coordinates[0]}</p>' + 
        '<p>Bruh</p>' +
        '</div>'
    } else {
        returnText = '<div>' + 
        '<h2>{selectedPlace.place}{", "}{selectedPlace.state}</h2>' + 
        '<p>Latitude: {selectedPlace.geometry.coordinates[1]}</p>' + 
        '<p>Longitude: {selectedPlace.geometry.coordinates[0]}</p>' + 
        '{/* {popData.selectedPlace.place ? (\'hi\') : null} */}' +
        '</div>'
    }
    const returnHTML = document.createElement('DIV')
    returnHTML.innerHTML = returnText
    return returnText;
}

export {popUpHelper}