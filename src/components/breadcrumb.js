import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';


class BreadCrumb extends Component {
render() {
  return (
    <div>
          <IconButton color="inherit">
                
                  <MailIcon />
              
              </IconButton>
              > Device Name {(this.props.activeItem && this.props.activeItem.length === 1) && <b> > {this.props.activeItem[0].name}</b>}

    </div>
  );
}
}

export default BreadCrumb;
