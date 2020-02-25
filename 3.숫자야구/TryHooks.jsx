const React = require('react');

const TryHooks = ({ tryInfo }) => {
  return (
    <li>
      <b>{tryInfo.try}</b> - {tryInfo.result}
    </li>
  )
};
module.exports = TryHooks;
