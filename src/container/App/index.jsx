import * as React from 'react';
import {connect} from 'react-redux'

import FormField from '../../components/FormField'
import Loader from '../../components/Loader'
import SnackBar from '../../components/SnackBar'
import {sendFormData, formSubmitSuccess} from '../../actions'

import './App.css';

const mockFetchCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success')
  }, 10000);
})

class App extends React.Component {

  handleSubmit = () => {
    this
      .props
      .sendFormData()
    mockFetchCall.then(() => {
      console.log('Success');
      this
        .props
        .formSubmitSuccess()
    })
  }
  render() {
    const {disable, apiSuccess} = this.props;
    return (
      <div className="App">
        <div className="App-header">{"Jimdo Form Trial Project"}</div>
        <div className="App-body">
          {disable &&< Loader />}
          <form>
            {this
              .props
              .form
              .map((field, index) =>< FormField key = {
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
        {apiSuccess &&< SnackBar isSnackBarOpen = {
          apiSuccess
        } />}
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    sendFormData: () => dispatch(sendFormData()),
    formSubmitSuccess: () => dispatch(formSubmitSuccess())
  }
}

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App)

export default appVisibility;
