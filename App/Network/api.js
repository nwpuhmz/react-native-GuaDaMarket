
var API_ADDRESS = 'https://api.leancloud.cn/1.1/';

module.exports = {
  // getNewestQuestion : function() {
  //   return API_ADDRESS + '/question/newest';
  // },
  // getQuestionDetail : function(id) {
  //   return API_ADDRESS + '/question/' + id;
  // },
  // getAnswers : function(id) {
  //   return API_ADDRESS + '/answer/show/' + id;
  // },
  // getNewestArticle : function() {
  //   return API_ADDRESS + '/article/newest';
  // },
  // getArticleDetail : function(id) {
  //   return API_ADDRESS + '/article/' + id;
  // },
  getUserInfo:function( user ){
    return API_ADDRESS+'users/'+user
  }
}