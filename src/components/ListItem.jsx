var React = require("react");
var ListItem = React.createClass({
  render: function(){
    retern(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
