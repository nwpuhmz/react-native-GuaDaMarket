'use strict';

var React = require('react-native');
var ShouyeView = require('./Home/Shouye');
// var QiugouView = require('./Home/Qiugou');
 var SaleView = require('./Home/Sale');
// var MessageView = require('./Home/Message');
 var ProfileView = require('./Home/Profile');
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
    if (title=='个人') {
      return (
      <NavigatorIOS
        style = {styles.container}
       navigationBarHidden={true}
        initialRoute={{
          title: title,
          component: component
        }} />

    );
    } else{
      return (
      <NavigatorIOS
        style = {styles.container}
       navigationBarHidden={false}
        initialRoute={{
          title: title,
          component: component
        }} />

    );
    };
    
  },

  render: function () {
    return (
      <TabBarIOS selectedTab={this.state.selectedBar}
      tintColor='#EE6363'>
        <TabBarIOS.Item
          title = '首页'
          name = 'shouye'
          selected = {this.state.selectedBar == 'shouye'}
          icon = {require('image!tab_icon01_n')}
          onPress = {() => this.setState({selectedBar: 'shouye'})}
        >
          {this._renderContent('首页', ShouyeView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '求购'
          name = 'qiugou'
          selected = {this.state.selectedBar == 'qiugou'}
          icon = {require('image!tab_icon01_n')}
          onPress = {() => this.setState({selectedBar: 'qiugou'})}
        >
          {this._renderContent('求购', ShouyeView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '要卖'
          name = 'sale'
          selected = {this.state.selectedBar == 'sale'}
          icon = {require('image!tab_icon01_n')}
          onPress = {() => this.setState({selectedBar: 'sale'})}
        >
          {this._renderContent('要卖', SaleView)}
        </TabBarIOS.Item>
         <TabBarIOS.Item
          title = '消息'
          name = 'message'
          selected = {this.state.selectedBar == 'message'}
          icon = {require('image!tab_icon01_n')}
          onPress = {() => this.setState({selectedBar: 'message'})}
        >
          {this._renderContent('消息', ShouyeView)}
        </TabBarIOS.Item>
         <TabBarIOS.Item
          title = '个人'
          name = 'profile'
          selected = {this.state.selectedBar == 'profile'}
          icon = {require('image!tab_icon01_n')}
          onPress = {() => this.setState({selectedBar: 'profile'})}
        >
          {this._renderContent('个人', ProfileView)}
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