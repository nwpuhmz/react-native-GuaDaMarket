/**
 * App基本操作的封装
 *
 */

'use strict';

var React = require('react-native');
var {
 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} = React;

var screen = require('Dimensions').get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'transparent',
    },
    content: {
        shadowColor: '#222',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: '#fff'
    }
});

var ParallaxView = React.createClass({
    propTypes: {
        windowHeight: React.PropTypes.number,
        backgroundSource: React.PropTypes.object,
        header: React.PropTypes.node,
        contentInset: React.PropTypes.object,
    },

    getDefaultProps: function () {
        return {
            windowHeight: 300,
            contentInset: {
                top: 64
            }
        };
    },

    getInitialState: function () {
        return {
            offset: 0,
            marginTop: 0,
            height: this.props.windowHeight + 64,
            opacity : 1,
            windowIsInView: true ,
           
        };
    },

    onScroll: function (event) {
    	
        if (!this.props.windowHeight) {
            return;
        }
        var offset = event.nativeEvent.contentOffset.y + event.nativeEvent.contentInset.top;
        var windowIsInView = offset <= this.props.windowHeight;

        if (windowIsInView || this.state.windowIsInView) {

            var pullingDown = offset <= 0;
            var srcHeight = this.props.windowHeight + this.props.contentInset.top;
            var marginTop = pullingDown ? 0 : -offset / 3;
            var height = srcHeight + (pullingDown ? -offset : 0);
            var opacity = (1 - Math.min(1, 1.3 * Math.max(0, offset) / this.props.windowHeight));

            this.refs.background.setNativeProps({
                top: this.state.marginTop,
                width: screen.width,
                height: this.state.height
            });

            this.refs.header.setNativeProps({
                opacity
            });

            this.state = {
                offset,
                marginTop,
                height,
                opacity,
                windowIsInView
            };
        }
    },

    renderBackground: function () {
        if (!this.props.windowHeight) {
            return null;
        }
        if (!this.props.backgroundSource) {
            return null;
        }

        var style = {
            position: 'absolute',
            backgroundColor: 'transparent',
            marginTop: this.state.marginTop,
            width: screen.width,
            height: this.state.height
        };

        return (
            <Image ref="background" style={style} resizeMode="cover" source={this.props.backgroundSource} />
        );
    },

    renderHeader: function () {
        if (!this.props.windowHeight) {
            return null;
        }
        if (!this.props.backgroundSource) {
            return null;
        }
        return (
            <View ref="header" style={{
                position: 'relative',
                height: 100,
                opacity: this.state.opacity,
            }}>
                {this.props.header}
            </View>
        );
    },

    render: function () {
        return (
            <View {...this.props} style={[styles.container, this.props.style]}>
                {this.renderBackground()}
                <ScrollView
                    style={styles.scrollView}
                    contentInset={this.props.contentInset}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
                    {this.renderHeader()}
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        );
    }
});
module.exports = ParallaxView;