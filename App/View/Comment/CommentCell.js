'use strict';

var React = require('react-native');


var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} = React;


var CommentCellView = React.createClass({

	render() {
		var item = this.props.item;
		// console.log(this.props)
		return (
			<TouchableOpacity onPress={() => this.selectDetail(item)}>
				<View style={styles.container}>
				
					
					
					<View style={styles.goodInfo}>
                        
                        <View View style={styles.userInfo}>
                        <Image style={styles.avator} source={{uri : "http:"+item.author.avatar_url}}/>
                        <Text style={styles.userName} numberOfLines={2}>{item.author.loginname}</Text>
                        <Text style={styles.timeToNow}>1小时前</Text>
                        </View>
                        <View View style={styles.goodTit}>
                      
                        <Text style={styles.goodTit} numberOfLines={2}>{item.title}</Text>
                      
                        </View>
						
					</View>
					
				</View>
			</TouchableOpacity>
		);
	},

    selectDetail(item ){
        
        React.AlertIOS.alert("hello"+item.title);
        
    }


})



// 组件样式
var styles = StyleSheet.create({
    container: {
    	flex : 1,
    	padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
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
        //justifyContent : 'space-between'
    },

    goodTit : {
    	fontSize : 14,
    	height : 40,
    	color : '#363636',
        textAlign: 'left',
        marginTop: 8,
        marginRight: 10,
    },
    // 价格
    goodRow : {
    	flexDirection : 'row',
    	alignItems: 'center',
    	marginTop : 5,
    	marginBottom : 10
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
    // 购买及按钮
    goodExtra : {
    	flexDirection :'row',
    	alignItems: 'center',
    	justifyContent : 'space-between'
    },
    goodSold : {
    	color : '#b0b0b0'
    },
    goodBtnWarp : {
    	

    	// position : 'absolute',
    	// right : 10,
    	// top : -7,

    	// height : 35,
    	borderWidth : 1,
    	padding : 5,
    	borderColor : '#3164ce',
    	borderRadius : 3
    },
    goodBtn : {
    	color : '#3164ce'
    }

});

module.exports = CommentCellView;