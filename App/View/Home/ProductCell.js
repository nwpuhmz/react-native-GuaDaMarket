'use strict';

var React = require('react-native');
var ProDetail = require('./ProDetail');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} = React;


var ProCellView = React.createClass({

	render() {
		var item = this.props.item;
		// console.log(this.props)
		return (
			<TouchableOpacity onPress={() => this.selectDetail(item)}>
				<View style={styles.container}>
				
					<Image style={styles.goodImg} source={{uri : "http:"+item.img}} />
					
					<View style={styles.goodInfo}>
                        
                        <View View style={styles.userInfo}>
                        <Image style={styles.avator} source={{uri : "http:"+item.img}} />
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
						<View style={styles.goodExtra}>
							<Text style={styles.goodSold}>{item.realMonthSellNum || 0}人已购买</Text>
							<View style={styles.goodBtnWarp}>
								<Text style={styles.goodBtn}>立即购买</Text>
							</View>
							
						</View>
					</View>
					
				</View>
			</TouchableOpacity>
		);
	},

    selectDetail(item ){
        this.props.navigator.push({
            title:"详情",
            component:ProDetail,
            passProps: {item: item}
        });

        //React.AlertIOS.alert("hello"+item.txt);
        
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
    //左侧商品图
    goodImg : {
    	width : 110,
    	height : 110,
    	marginRight: 15,
        borderRadius:10,
        
        
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
        fontSize : 12,
        fontWeight : 'bold',
        height : 32 ,
        width :100,
        color : '#EE6363',
        textAlign: 'left',
        marginLeft : 10,
      
       
    },
    timeToNow :{
        fontSize : 10,
        height : 32 ,
       
        color : '#EE6363',
        textAlign: 'right',
       

    },
    userInfo :{
        flexDirection : 'row',
        marginTop : 5,
        alignItems: 'center',
        justifyContent : 'space-between'
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

module.exports = ProCellView;