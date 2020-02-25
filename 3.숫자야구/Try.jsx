const React = require('react');

class Try extends React.PureComponent {
  render() {
    return (
      <li key={this.props.value.fruit}>
        <b>{this.props.value.try}</b> - {this.props.value.result}
      </li>
    )
  }
}
module.exports = Try;
