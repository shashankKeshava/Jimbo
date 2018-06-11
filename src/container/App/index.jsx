import * as React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Field from '../../components/Field'
import Button from '@material-ui/core/Button';
import {updateFormData} from '../../actions'

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
              .map((field, index) =>< Field key = {
                index
              }
              type = {
                field
              }
              label = {
                field.label
              } />)}
            <button>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateFormData
}, dispatch);

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App)

export default appVisibility;
