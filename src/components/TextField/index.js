import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles=theme=>({
    textField:{
        width: 169,
        // backgroundColor: "2196f3"
    }
})


class InputField extends Component{
    render(){
        const { classes}=this.props;
        const { type,multiline=false } = this.props.data;
        return(
            <TextField className={classes.textField} type={type} multiline={multiline} row={`${multiline?"1":"4"}`}/>
        )
    }
}

export default withStyles(styles)(InputField);