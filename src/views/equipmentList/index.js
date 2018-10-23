import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BreadCrumb from '../../components/breadcrumb';
import FormGroup from '../../components/deviceDetails';
import DeviceList from '../../components/deviceList'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },
  papers: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },
});

class EquipmentList extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: [
                {   
                    name: 'Equipment A',
                    vendor: 'Vendor A',
                    location: 'Illinois',
                    model: 'Model A',
                    serial: '123456',
                    description: 'This is Equipment A'
                }
            ],
            dataList: [
                {   
                    name: 'Equipment A',
                    vendor: 'Vendor A',
                    location: 'Illinois',
                    model: 'Model A',
                    serial: '123456',
                    description: 'This is Equipment A'
                },
                {
                    name: 'Equipment B',
                    vendor: 'Vendor B',
                    location: 'NewYork',
                    model: 'Model B',
                    serial: '45678',
                    description: 'This is Equipment B'
                },
                {
                    name: 'Equipment C',
                    vendor: 'Vendor C',
                    location: 'California',
                    model: 'Model C',
                    serial: '157634',
                    description: 'This is Equipment C'
                },
                {
                    name: 'Equipment D',
                    vendor: 'Vendor D',
                    location: 'Alaska',
                    model: 'Model D',
                    serial: '98765',
                    description: 'This is Equipment D'
                },
                {
                    name: 'Equipment E',
                    vendor: 'Vendor E',
                    location: 'Texas',
                    model: 'Model E',
                    serial: '87654',
                    description: 'This is Equipment E'
                },
                {
                    name: 'Equipment F',
                    vendor: 'Vendor F',
                    location: 'Chicago',
                    model: 'Model F',
                    serial: '567893',
                    description: 'This is Equipment F'
                },
            ]
            
        }
    }

handleDevice = (item) => {
        this.setState(() => ({ active: [item] }));
}

handleAll = () => {
    this.setState((prevState) => ({ active: prevState.dataList }));
}

render() {
    const {classes} = this.props;
    const {active, dataList} = this.state;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BreadCrumb activeItem={active.length > 0 ? active : null}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          
            {active.map( (item, i) => 
            <Paper className={classes.paper}>
            <FormGroup key={`detail${i}`} item={item} />
          </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.papers}><DeviceList dataList={dataList} handleDevice={this.handleDevice} handleAll={this.handleAll} /></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
}

EquipmentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EquipmentList);
