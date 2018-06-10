import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';

class InputField extends Component{

    render(){
        return(
            <TextField type={this.props.type}/>
        )
    }
}


export default InputField;