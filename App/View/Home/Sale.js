'use strict';

var React = require('react-native');
var Base = require('../../Common/Base');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;


var {
   ActionSheetIOS,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
   TouchableHighlight,
  Image,
  } = React;



var BUTTONS = [
  'Button Index: 0',
  'Button Index: 1',
  'Button Index: 2',
  'Destruct',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
  // Specify any or all of these keys
var options = {
  title: 'Select Avatar',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  returnBase64Image: false,
  returnIsVertical: false
};


var SaleView = React.createClass({
  
    getInitialState() {
    return {
      clicked: 'none',
      avatarSource : null,
    };
  },



  render: function () {
    return (

      <ScrollView>
      <View style={styles.container}>
        <View style={styles.cell}>
          <Text style={styles.label}>宝贝标题</Text>
          <TextInput
              style={styles.input} placeholder="请输入标题，不超过15字"
                    clearButtonMode="while-editing"
                    returnKeyType="next"/>
        </View> 
        <View style={styles.line} />

        <View style={styles.cell}>
          <Text onPress={this.showActionSheet} style={styles.label}>宝贝分类</Text>
         
       </View>
     
        <View style={styles.line} />



         <View style={styles.cell}>
          <Text style={styles.label}>价钱 ￥</Text>
          <TextInput
              style={styles.input} placeholder="请输入价格"
                    clearButtonMode="while-editing"
                    keyboardType="numbers-and-punctuation"
                    returnKeyType="next"/>
        </View> 
        <View style={styles.line} />


       

         <View style={styles.cell}>
          <Text style={styles.label}>宝贝描述</Text>
          <TextInput
              style={{height:100,
                width: Base.width/1.3,
                fontSize: 14,
                marginTop:20,
                marginLeft:10}} placeholder="描述一下你的宝贝吧..."
                                multiline={true}
                                maxLength ={20}
                                returnKeyType="next"/>
          </View> 
        <View style={styles.line} />
          <View style={styles.cell}>
          <Text style={styles.label}>价钱 ￥</Text>
          <TextInput
              style={styles.input} placeholder="请输入价格"
                    clearButtonMode="while-editing"
                    keyboardType="numbers-and-punctuation"
                    returnKeyType="next"/>
        </View> 
        <View style={styles.line} />
         
        
        <View style={styles.cell}>
           
        <TouchableHighlight onPress={this._onPressButton} underlayColor="transparent">
          <Text style={styles.label}>添加图片</Text>
        </TouchableHighlight>
        
          <Image source={this.state.avatarSource} style={styles.uploadImage} resizeMode={Image.resizeMode.cover} />
                    
          </View>

      </View>
      </ScrollView>
    );
  },
  
  _onPressButton:function() {
    // The first arg will be the options object for customization, the second is
// your callback which sends string: type, string: response


UIImagePickerManager.showImagePicker(options, (type, response) => {
   console.log(response);
  if (type !== 'cancel') {
    var source;
    if (type === 'data') { // New photo taken OR passed returnBase64Image true -  response is the 64 bit encoded image data string
      source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
    } else { // Selected from library - response is the URI to the local file asset
      source = {uri: response};
    }

    this.setState({avatarSource:source});
  } else {
    console.log('Cancel');
  }
});
  },

    showActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://code.facebook.com',
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text})
    });
  }
 
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   cell :{
    flexDirection : 'row',
    
   },
   label:{
    height:20,
    
    fontSize : 14,
    color : '#EE6363',
    paddingLeft :8,
    marginTop:20,
   },
   input :{
    height:20,
   
    width: Base.width/1.3,
    fontSize: 14,
    marginTop:20,
    marginLeft:10
   },
   line :{
    backgroundColor :'#D3D3D3',
    borderWidth:0.2,
    marginTop :8,
    marginLeft:8,
    marginRight:8
   },
   button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  uploadImage:{
    width: 60,
    height: 60,
  },

});

module.exports = SaleView;