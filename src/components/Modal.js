import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import ReservationForm from './Form';


function getModalStyle() {
  
    return {
      top: "150px",
      left: "340px",
      
    };
  }

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: "#565fc2",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class ShowForm extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        
        <Button onClick={this.handleOpen}>Make a reservation!</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>

           <ReservationForm />
            
          </div>
        </Modal>
      </div>
    );
  }
}

ShowForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ShowForm);