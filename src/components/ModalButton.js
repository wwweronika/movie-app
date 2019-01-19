import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ButtonZoom from './Buttons';

//Okienko z formularzem, który wyskakuje po naciśnięciu w button "Zarezerwuj bilet!"

class ModalButton extends React.Component {

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

    return (
      <div>
       <Button className="MainButton" onClick={this.handleOpen} style={{color:"#660000", textAlign:"center"}}>Zarezerwuj bilet!</Button>
       <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={{backgroundColor:"white", textAlign:"center", height:"70%", width:"60%", marginLeft:"auto", marginRight:"auto", top:"50%", marginTop:"100px"}} >
              <Typography variant="h2" id="modal-title" style={{color:"#660000"}}>
                Zarezerwuj bilet!
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
             
                <ButtonZoom />
               
              </Typography>
              
            </div>
          </Modal>
      </div>
    );
  }
}

// SimpleModal.propTypes = {
//  classes: PropTypes.object.isRequired,
// };

export default ModalButton;
