import React,{Component} from 'react'

import TextField from '../TextField';
import './index.css'

class FormField extends Component{

    render(){
        return(
            <div className="inputType">
                <label>
                {this.props.label}
                </label>
                    <TextField data={this.props.type}/>
                </div>
        )
    }
}

export default FormField;