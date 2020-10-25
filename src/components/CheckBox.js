import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

const CheckBoxGroup = ({aqiRating, setAqiRating}) => {
  const handleChange = (event) => {
    setAqiRating({ ...aqiRating, [event.target.name]: event.target.checked });
  };

  return (
    <Container style={{background: "#cfcfe6"}}>
        <FormGroup column>
            <FormControlLabel
                control={<Checkbox style={{color: "#7390c8"}} checked={aqiRating.unhealthy} 
                onChange={handleChange}
                name="unhealthy" />}
                label="unhealthy"
                style={{color: '#7390c8'}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#3a48a9"}} checked={aqiRating.bad} 
                onChange={handleChange}
                name="bad" />}
                label="bad"
                style={{color: '#3a48a9'}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#1d249a"}} checked={aqiRating.moderate} 
                onChange={handleChange}
                name="moderate" />}
                label="moderate"
                style={{color: "#1d249a"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}} checked={aqiRating.good} 
                onChange={handleChange}
                name="good" />}
                label="good"
                style={{color: "#00008b"}}
            />
        </FormGroup>
    </Container>
  );
}

export default CheckBoxGroup;