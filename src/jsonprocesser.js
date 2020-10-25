

export default function processJSON(geojson){
    const features = geojson['features']
    const low = {'type': 'FeatureCollection', 'features': []}
    const medium = {'type': 'FeatureCollection', 'features': []}
    const high = {'type': 'FeatureCollection', 'features': []} 
    const ohno = {'type': 'FeatureCollection', 'features': []}

    for (let i = 0; i < features.length ; i++){
        const aqi = features[i]['properties']['aqi']
        if (aqi <= 50){
            low['features'].push(features[i])
        }
        else if (aqi <= 100){
            medium['features'].push(features[i])
        }
        else if (aqi <= 150){
            high['features'].push(features[i])
        
        }
        else{
            ohno['features'].push(features[i])
        }
    }
    return [low, medium, high, ohno]
    // geojson = {'type': 'FeatureCollection', 'features': features}

}
