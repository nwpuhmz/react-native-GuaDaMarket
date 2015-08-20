'use strict';

var React = require('react-native');
var ProList = require('./ProductList');

var{
  ScrollView,
  View,
} = React;

var ShouyeView = React.createClass({
  render(){
    return (
        <View style = {{flex : 1}}>
          
          <ProList navigator = {this.props.navigator} />
          
        </View>
      );
  },

});

module.exports = ShouyeView;