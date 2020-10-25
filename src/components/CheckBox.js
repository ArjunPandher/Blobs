import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const CheckBoxGroup = ({aqiRating, setAqiRating}) => {
  const handleChange = (event) => {
    setAqiRating({ ...aqiRating, [event.target.name]: event.target.checked });
  };

  return (
    <Container style={{background: "#cfcfe6"}}>
        <FormGroup column>
            <Typography gutterBottom>
              <b></b>
            </Typography>
            <Typography gutterBottom>
              <b>Blobs</b>
            </Typography>
            <FormControlLabel
                control={<Checkbox style={{color: "#1d249a"}} checked={aqiRating.aqi} 
                onChange={handleChange}
                name="aqi" />}
                label="Air Quality Index"
                style={{color: "#1d249a"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}} checked={aqiRating.population} 
                onChange={handleChange}
                name="population" />}
                label="Population"
                style={{color: "#00008b"}}
            />
            <Typography gutterBottom>
              <b></b>
            </Typography>
            <Typography gutterBottom>
              <b>Air Qualities</b>
            </Typography>
            <FormControlLabel
                control={<Checkbox style={{color: "#1d249a"}} checked={aqiRating.unhealthy} 
                onChange={handleChange}
                name="unhealthy" />}
                label="Unhealthy"
                style={{color: "#1d249a"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}} checked={aqiRating.bad}
                onChange={handleChange}
                name="bad" />}
                label="Bad"
                style={{color: "#00008b"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}} checked={aqiRating.moderate}
                onChange={handleChange}
                name="moderate" />}
                label="Moderate"
                style={{color: "#00008b"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#1d249a"}} checked={aqiRating.good}
                onChange={handleChange}
                name="good" />}
                label="Good"
                style={{color: "#1d249a"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}} checked={aqiRating.veryGood}
                onChange={handleChange}
                name="veryGood" />}
                label="Very Good"
                style={{color: "#00008b"}}
            />
        </FormGroup>
    </Container>
  );
}

export default CheckBoxGroup;