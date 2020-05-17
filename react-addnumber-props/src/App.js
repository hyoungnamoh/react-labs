import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";


class App extends Component{
    state = {
        number:0
    }
    render() {
        return (
            <div className="App">
              Hello World!
              <AddNumberRoot onClick={(size) => {
                  console.log('click Addnum' + this.state.number, size);
                  this.setState({number: this.state.number + size});
              }}/>
              <DisplayNumberRoot number={this.state.number}/>
            </div>
        );
    }
}

export default App;
