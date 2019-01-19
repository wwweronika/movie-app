import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//lista rozwijana z godzinami seansów

const hours = ['12:00', '14:00', '17:00', '19:00', '21:00', '23:00'];

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelectHour extends React.Component {
  state = {
    hour: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off" className="ui segment" style={{backgroundColor:"#CC9999"}}>
       
        <FormControl className={classes.formControl} style={{width: '100%'}}>
          <InputLabel htmlFor="demo-controlled-open-select">Godzina seansu</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.hour}
            onChange={this.handleChange}
            inputProps={{
              name: 'hour',
              id: 'demo-controlled-open-select',
            }}
          >
            
            <MenuItem value={12}>{hours[0]}</MenuItem>
            <MenuItem value={14}>{hours[1]}</MenuItem>
            <MenuItem value={17}>{hours[2]}</MenuItem>
            <MenuItem value={19}>{hours[3]}</MenuItem>
            <MenuItem value={21}>{hours[4]}</MenuItem>
            <MenuItem value={23}>{hours[5]}</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelectHour.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelectHour);