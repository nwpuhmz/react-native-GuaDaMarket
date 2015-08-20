/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var IndexView = require('./App/View/Index');
var {
  AppRegistry,
 
} = React;

var GuaDaMarket = React.createClass({
  render: function() {
    return (
      <IndexView />
    );
  }
});

AppRegistry.registerComponent('GuaDaMarket', () => GuaDaMarket);
