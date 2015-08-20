'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var CommentList = require('../Comment/CommentList');
var TopImg = require('./ProDetailImg');

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
  
  comBar :{
      height : 25, 
      backgroundColor : '#F2F2F2', 
       flexDirection: 'row',
        justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    
  },
  //右侧商品信息
    goodInfo : {
      flex : 1,
      flexDirection : 'column'
    },
    //用户头像
    avator :{
        
        width : 32,
        height : 32,
        borderRadius : 16,
        borderWidth:1,
        borderColor:'#FF6A6A',
    },
    userName :{
        flex: 4,
        fontSize : 12,
        fontWeight : 'bold',
        height : 32 ,
     
        color : '#EE6363',
        textAlign: 'left',
        
      
       
    },
    timeToNow :{
        flex:5,
        fontSize : 10,
        height : 32 ,
        marginRight:5,
        color : '#EE6363',
        textAlign: 'right',
       

    },
    userInfo :{

        flexDirection : 'row',
        marginTop : 5,
        alignItems: 'center',
        height : 50,
        padding : 8,
        //justifyContent : 'space-between'
    },
    goodTit : {
      fontSize : 14,
      height :60,
      color : '#363636',
        textAlign: 'left',
        marginTop: 8,
        marginRight: 10,
        padding : 8,
    },
    // 价格
    goodRow : {
      flexDirection : 'row',
      alignItems: 'center',
      marginTop : 5,
      marginBottom : 10,
      padding : 8,
    },
    nPrice : {
      fontSize : 18,
      fontWeight : '700',
      marginRight : 10,
      color : '#c40001'
    },
    yen :{
      fontSize : 13
    },
    oPrice : {
      fontSize : 12,
      color : '#b0b0b0'
    },

})

var ProDetail = React.createClass({
 
  render: function() {
    var item = this.props.item;
 
    return (
      <View style={styles.continer}>
        <ScrollView stickyHeaderIndices={[2]} >
                 
                   <View View style={styles.userInfo}>
                        <Image style={styles.avator} source={{uri : "http:"+item.img}}/>
                        <Text style={styles.userName} numberOfLines={2}>钢铁侠钢铁侠钢11111</Text>
                        <Text style={styles.timeToNow}>1小时前</Text>
                    </View>
                    <View View style={styles.goodTit}>
                      
                        <Text style={styles.goodTit} numberOfLines={2}>{item.txt}</Text>
                      
                        </View>

            <View style={styles.goodRow}>
              <Text style={styles.nPrice}><Text style={styles.yen}>&yen;</Text> {item.orderprice || item.price}</Text>
              <Text style={styles.oPrice}>&yen;{item.originalprice}</Text>
            </View>
          
                  <TopImg item ={this.props.item}/>
                    <View style={styles.comBar}>
                     <Text style={styles.text}>评论数：100</Text>
                    </View>
                    <CommentList />
                    
                </ScrollView>
                </View>
      );
  },
  
})
module.exports = ProDetail;


