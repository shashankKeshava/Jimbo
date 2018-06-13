import * as React from 'react';
import {connect} from 'react-redux'

import FormField from '../../components/FormField'
import {sendFormData} from '../../actions'

import './App.css';

class App extends React.Component {

  handleSubmit = () => {
    this
      .props
      .sendFormData()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">{"Jimdo Form Trial Project"}</div>
        <div className="App-body">
          <form>
            {this
              .props
              .form
              .map((field, index) =><FormField key = {
                index
              }
              type = {
                field
              }
              label = {
                field.label
              } />)}
          </form>
          <button onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    sendFormData: () => dispatch(sendFormData())
  }
}

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App)

export default appVisibility;
