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

    handleChange=(event)=>{
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

export default withStyles(styles)(InputField);