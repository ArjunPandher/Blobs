import React, {useEffect} from 'react';

import Map from './components/Map';


const App = () => {

  useEffect(()=> {
    fetch('/api').then(
      response => response.json()
    ).then(data => console.log(data))
  })

  return <Map />
};

export default App;
