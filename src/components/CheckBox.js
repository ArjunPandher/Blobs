import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

const CheckBoxGroup = () => {
  const [state, setState] = React.useState({
    checkedLow: true,
    checkedMedium: true,
    checkedHigh: true,
    checkedExtreme: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container style={{background: "#cfcfe6"}}>
        <FormGroup column>
            <FormControlLabel
                control={<Checkbox style={{color: "#7390c8"}} checked={state.checkedLow} 
                onChange={handleChange}
                name="checkedLow" />}
                label="Low"
                style={{color: '#7390c8'}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#3a48a9"}} checked={state.checkedMedium} 
                onChange={handleChange} name="checkedMedium" />}
                label="Medium"
                style={{color: '#3a48a9'}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#1d249a"}} checked={state.checkedHigh} 
                onChange={handleChange} name="checkedHigh" />}
                label="High"
                style={{color: "#1d249a"}}
            />
            <FormControlLabel
                control={<Checkbox style={{color: "#00008b"}}checked={state.checkedExtreme} 
                onChange={handleChange} name="checkedExtreme" />}
                label="Extreme"
                style={{color: "#00008b"}}
            />
        </FormGroup>
    </Container>
  );
}

export default CheckBoxGroup;