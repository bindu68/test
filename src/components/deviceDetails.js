import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  title: {
    background: '#dfdfdf',
    color: '#000',
    padding: theme.spacing.unit * 2
  }
});

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, item } = this.props;
    console.log('qwer', item)
    return (
        <Grid container spacing={12}>
          <Grid item xs={12}>
          <h4 className={classes.title}>{item.name}</h4>
          </Grid>
          
        <Grid item xs={4}>
            <div style={{margin: "0 auto"}}>Image</div>
        </Grid>
        <Grid item xs={8}>
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
          id="standard-full-width"
          label="Equipment Name"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          disabled
          value={item.name}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Vendor"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          disabled
          value={item.vendor}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Location"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          disabled
          value={item.location}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Model"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          disabled
          value={item.model}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Serial#"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          disabled
          value={item.serial}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          disabled
          value={item.description}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
          </Grid>
          </Grid>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TextFields);