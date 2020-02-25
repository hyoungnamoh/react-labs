const React = require('react');

class RenderTest extends React.Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.counter !== nextState.counter){
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter++
    });
  }
  render(){
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick = {this.onClick}> 클릭</button>
      </div>
    )
  }
}

module.exports = RenderTest;
