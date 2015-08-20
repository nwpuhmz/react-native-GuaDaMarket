'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');


var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} = React

var styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  comlist:{
    marginTop:10,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#aff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  }
})

var TopImg = React.createClass({
 
  render: function() {
    var item = this.props.item;
 
    return (
      
<Swiper style={styles.wrapper}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
      showsButtons={false}
      height={240} 
      dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 8, height: 8,borderRadius: 4, marginLeft: 7, marginRight: 7,}} />}
      activeDot={<View style={{backgroundColor: '#EE6363', width: 8, height: 8, borderRadius: 4, marginLeft: 7, marginRight: 7}} />}
      paginationStyle={{
              bottom: 20,
            }}>
        <View style={styles.slide}>
          <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
        </View>
        <View style={styles.slide}>
           <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{uri : "http:"+item.img}} />
        </View>
      </Swiper>    
                
      );
  },
  
})
module.exports = TopImg;


