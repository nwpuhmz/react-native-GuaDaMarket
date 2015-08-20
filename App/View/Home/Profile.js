'use strict';

var React = require('react-native');
var ParallaxView = require('../../Common/Parallax')
var screen = require('Dimensions').get('window');
var Icon = require('react-native-vector-icons/FontAwesome');
var UserService = require('../../Services/UserService');
var X_AVOSCloud_Application_Id='holwvpb1kgm6eu90z58hqbo7e3kxkd4ciijy3mx9ly8kbyg8';
var X_AVOSCloud_Application_Key ='g3pf70rqpnqaliv13f63rzsy8acay447xsz5llkgfj5pahs7';

var {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} = React;


var ProfileView = React.createClass({

   getInitialState() {
        return {
            userInfo: [],
        };
    },

    //只调用一次，在render之后调用
    componentDidMount() {
        this._getUserInfo();
    },

    _getUserInfo() {
        let userId = '55d412fb60b24927fce8ef7c';

        UserService.req.getUserInfo(userId)
            .then(userInfo=> {
                console.log('get userInfo'+userInfo);
                this.setState({
                    userInfo: userInfo
                })
            })
            .catch(err=> {
                console.warn(err)
                if (err == 'UserNotExist') {
                    window.alert('用户不存在')
                }
            })
            .done()

},

  render: function() {
    var header = (
      <View style={{flex: 1, justifyContent: 'flex-end', padding: 5}}>
       
      </View>
    );

    return (
      <ParallaxView backgroundSource={{uri:"http://img.taopic.com/uploads/allimg/111204/1518-11120411195563.jpg"}} header={header} windowHeight={200}>
         <View>
          <View style={styles.headerContent}>
            <Image source={{uri:"http://pic31.nipic.com/20130702/13133954_121018329102_2.png"}}
                   style={styles.shotAuthorAvatar} />
            <Text style={styles.shotTitle}>{this.state.userInfo.username}</Text>
            <Text style={styles.shotAuthorContent}>by <Text style={styles.shotAuthor}>钢铁侠</Text></Text>
          </View>
          <View style={styles.mainSection}>
            <View style={styles.shotDetailsRow}>
              <View style={styles.shotCounter}>
                <Icon name="heart-o" size={16} color="#222"/>
                <Text style={styles.shotCounterText}> 11 </Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="comments-o" size={16} color="#333"/>
                <Text style={styles.shotCounterText}>11</Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="eye" size={16} color="#333"/>
                <Text style={styles.shotCounterText}> 11</Text>
              </View>
            </View>
            <View style={styles.separator} />
            
          </View>
        </View>
      </ParallaxView>
    )
  }
});
var styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#ea4c89'
  },
  invisibleView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right:0
  },
  customModalImage: {
    height: screen.height / 2
  },
  headerContent: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 40,
      alignItems: 'center',
    width: screen.width,
    backgroundColor: '#fff'
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ea4c89',
    lineHeight: 18
  },
  shotAuthorContent: {
    fontSize: 12
  },
  shotAuthor: {
    fontWeight: '900',
    lineHeight: 18
  },
  shotAuthorAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 60,
    left: screen.width / 2 - 40,
    borderWidth: 2,
    borderColor: '#fff'
  },
  rightPane: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  shotDetailsRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  shotCounter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shotCounterText: {
    color: '#333'
  },
  mainSection: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'stretch',
    padding: 10
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  }
});
module.exports = ProfileView;