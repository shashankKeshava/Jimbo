import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {updateFormData} from '../../actions/'

const styles=theme=>({
    textField:{
        width: 169,
        // backgroundColor: "2196f3"
    }
})


class InputField extends Component{

    handleChange=(event)=>{
        this.props.updateFormData(event.target.value,this.props.data.type);
        console.log(event.target.value,this.props.data.type)
    }
    render(){
        const { data:{type,multiline=false,placeholder},classes,disable } = this.props;
        return(
            <TextField className={classes.textField} type={type} multiline={multiline}
            row={`${multiline?"1":"4"}`} placeholder={placeholder} onChange={this.handleChange} disabled={disable}/>
        )
    }
}

const mapToStateToProps = state => {
    return state;
  }

  const mapDispatchToProps = dispatch => {
    return {
      updateFormData: (value,type) => dispatch(updateFormData(value,type))
    }
  }

export default connect(mapToStateToProps,mapDispatchToProps)(withStyles(styles)(InputField));
