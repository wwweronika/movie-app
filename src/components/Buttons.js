import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

import ControlledOpenSelectHour from './Hour';
import ControlledOpenSelectDay from './Day';
import MyForm from './Form';

//Data, godzina, sala, dane


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class ButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };



  render() {
    const { classes, theme } = this.props;
    

    return (
      
      <div className={classes.root} style={{width: '100%'}}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab style={{fontSize:"15px"}} label="Wybierz godzinę i dzień seansu" />
            <Tab style={{fontSize:"15px"}} label="Wybierz miejsce na sali" />
            <Tab style={{fontSize:"15px"}} label="Podaj dane" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><ControlledOpenSelectHour  /> <ControlledOpenSelectDay /> </TabContainer>
          <TabContainer dir={theme.direction}>Tutaj będzie widok sali kinowej, który robi Michał</TabContainer>
          <TabContainer dir={theme.direction}><MyForm /></TabContainer>
        </SwipeableViews>
        
      </div>
     
    );
  }
}

ButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ButtonZoom);