export default function processPopulation(popData){
    const low = {'type': 'FeatureCollection', 'features': []}
    const medium = {'type': 'FeatureCollection', 'features': []}
    const high = {'type': 'FeatureCollection', 'features': []} 
    const ohno = {'type': 'FeatureCollection', 'features': []}

    for (const city in popData){
        const population = popData[city][0]
        const geometry = {'geometry': {'coordinates': [], 'type': 'Point'}, 'type': 'Feature'}
        geometry['geometry']['coordinates'] = [popData[city][1][1], popData[city][1][0]]
        if (population <= 7000){
            low['features'].push(geometry)
        }
        else if (population <= 15000){
            medium['features'].push(geometry)
        }
        else if (population <= 25000){
            high['features'].push(geometry)
        
        }
        else{
            ohno['features'].push(geometry)
        }
    }
    return [low, medium, high, ohno]
    // geojson = {'type': 'FeatureCollection', 'features': features}

}