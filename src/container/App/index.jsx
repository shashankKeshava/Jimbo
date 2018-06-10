import * as React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Field from '../../components/Field'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">{"Jimdo Form Trial Project"}</div>
      <div className="App-body">
          <form>
            {this
              .props
              .form
              .map(field =><Field type = {
                field
              }label={field.label} />)}
          </form>
      </div>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {}

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App)

export default appVisibility;
