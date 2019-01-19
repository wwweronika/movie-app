import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';

//lista rozwijana z dniami seansów

const days = [ 'Dzisiaj', 'Jutro', moment().add(2, 'days').format('dddd'), moment().add(3, 'days').format('dddd'), moment().add(4, 'days').format('dddd') ];

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

class ControlledOpenSelectDay extends React.Component {
  state = {
    day: '',
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
          <InputLabel htmlFor="demo-controlled-open-select">Dzień seansu</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.day}
            onChange={this.handleChange}
            inputProps={{
              name: 'day',
              id: 'demo-controlled-open-select',
            }}
          >
            
            <MenuItem value="day1">{days[0]} </MenuItem>
            <MenuItem value="day2">{days[1]} </MenuItem>
            <MenuItem value="day3">{days[2]} </MenuItem>
            <MenuItem value="day4">{days[3]} </MenuItem>
            <MenuItem value="day5">{days[4]} </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelectDay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelectDay);