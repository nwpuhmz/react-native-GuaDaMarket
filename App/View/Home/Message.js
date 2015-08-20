'use strict';

var React = require('react-native');
var ShouyeView = require('./Home/Shouye');
var QiugouView = require('./Home/Qiugou');
var SaleView = require('./Home/Sale');
var MessageView = require('./Home/Message');
var ProfileVIew = require('./Home/Profile');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS,
  Image
  } = React;

var IndexView = React.createClass({
  statics: {
    title: 'index',
    description: '应用首页'
  },

  getInitialState: function () {
    return {
      selectedBar: 'shouye'
    };
  },

  _renderContent: function (title, component) {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: title,
          component: component
        }} />
    );
  },

  render: function () {
    return (
      <TabBarIOS selectedTab={this.state.selectedBar}>
        <TabBarIOS.Item
          title = '首页'
          name = 'shouye'
          selected = {this.state.selectedBar == 'shouye'}
          icon = {require('image!shouye')}
          onPress = {() => this.setState({selectedBar: 'shouye'})}
        >
          {this._renderContent('首页', GroupsView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '搜索'
          name = 'search'
          selected = {this.state.selectedBar == 'search'}
          icon = {require('image!search')}
          onPress = {() => this.setState({selectedBar: 'search'})}
        >
          {this._renderContent('搜索', SearchView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '关于'
          name = 'about'
          selected = {this.state.selectedBar == 'about'}
          systemIcon = 'more'
          onPress = {() => this.setState({selectedBar: 'about'})}
        >
          {this._renderContent('关于', AboutView)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = IndexView;