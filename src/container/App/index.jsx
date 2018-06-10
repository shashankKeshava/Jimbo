import * as React from 'react';
import TextFields from '../../components/TextFields'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
          <TextFields type={"name"}/>
        </form>
      </div>
    );
  }
}

export default App;
