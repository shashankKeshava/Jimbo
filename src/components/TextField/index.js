import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {updateFormData} from '../../actions/'
import {UPDATE_FORM_DATA} from '../../utils/actionTypes'

const styles=theme=>({
    textField:{
        width: 169,
        // backgroundColor: "2196f3"
    }
})


class InputField extends Component{

    handleChange=(event)=>{
        const {dispatch}=this.props;
        dispatch(updateFormData({value:event.target.value,type:this.props.data.type}))
        console.log(event.target.value,this.props.data.type)
    }
    render(){
        const { data:{type,multiline=false,placeholder},classes } = this.props;
        return(
            <TextField className={classes.textField} type={type} multiline={multiline}
            row={`${multiline?"1":"4"}`} placeholder={placeholder} onChange={this.handleChange}/>
        )
    }
}

export default connect()(withStyles(styles)(InputField));
