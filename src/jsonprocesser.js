

export default function processJSON(geojson){
    const features = geojson['features']
    const low = {'type': 'FeatureCollection', 'features': []}
    const medium ={'type': 'FeatureCollection', 'features': []}
    const high = {'type': 'FeatureCollection', 'features': []} 
    const ohno = {'type': 'FeatureCollection', 'features': []}
    for (let i = 0; i < features.length ; i++){
        console.log(features[i])
    }

    // geojson = {'type': 'FeatureCollection', 'features': features}
    console.log(features)

}