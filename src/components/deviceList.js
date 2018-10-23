import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    background: '#c5c5c5',
    paddingLeft: '0',
    textAlign: 'left'
  },
  active: {
    background: 'rgba(0,0,0,.1)',
    paddingLeft: '0',
    textAlign: 'left'
  },
  device: {
      background: "purple",
    paddingLeft: '0',
    color: '#fff',
  },
  activeDevice: {
    background: 'rgba(0,0,0,.1)',
  paddingLeft: '0',
  color: '#fff',
},
header: {
    textAlign: 'center',
    background: '#43BFC7',
    color: '#fff'
}
});

class NestedList extends React.Component {
  state = {
    open: true,
    active: 0
  };


  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleDevice = (obj, i) => {
    this.setState(state => ({ active: i }));
    if(this.props.handleDevice){
        this.props.handleDevice(obj)
    }
  };

  handleAll = () => {
    this.setState(state => ({ active: 'all' }));
    if(this.props.handleAll){
        this.props.handleAll()
    }
  };

 

  render() {
    const { classes} = this.props;
    const {active } = this.state;
    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader onClick={this.handleClick} className={classes.header} component="div">System</ListSubheader>}
        >
          <ListItem className={active === 'all' ? classes.activeDevice : classes.device} button>
          
            <ListItemText inset primary="Device Name" onClick={() => this.handleAll()} />
            {this.state.open ? '' : ''}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
             {this.props.dataList && this.props.dataList.map((item, index) => <ListItem onClick={() => this.handleDevice(item, index)} key={`list${index}`} button className={active === index ? classes.active : classes.nested}>
                <ListItemText inset >{item.name}</ListItemText>
              </ListItem>)}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);