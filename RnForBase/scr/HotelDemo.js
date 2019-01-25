
/*view组件
*
* 问题：1.字体不能居中
*      2.线条没有颜色
*
*
* */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, PixelRatio } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (

            // <View style={styles.container}>
            // <View style={styles.item}>
            // <View style={styles.center, styles.flex}>
            // <Text>酒店</Text>
            // </View>
            // </View>
            //
            //
            // <View style={styles.item}>
            // <View style={styles.center, styles.flex}>
            // <Text>海外酒店</Text>
            // </View>
            //
            // <View style={styles.center, styles.flex}>
            // <Text>特惠酒店</Text>
            // </View>
            // </View>
            //
            //
            // <View style={styles.item}>
            // <View style={styles.center, styles.flex}>
            // <Text>团购</Text>
            // </View>
            //
            // <View style={styles.center, styles.flex}>
            // <Text>客栈。公寓</Text>
            // </View>
            // </View>
            //
            //
            // </View>



            //简化版
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.center, styles.flex}>酒店</Text>
                </View>


                <View style={styles.item}>
                    <Text style={styles.center, styles.flex}>海外酒店</Text>
                    <Text style={styles.center, styles.flex}>特惠酒店</Text>
                </View>

                <View style={styles.item}>
                    <Text  style={styles.center, styles.flex}>团购</Text>
                    <Text  style={styles.center, styles.flex}>客栈。公寓</Text>
                </View>

            </View>



        );
    }
}

//   flex: 1,  最外层的View铺满整个屏幕
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth: 1,
        // borderColor : 'black',
        // flexDirection : 'row',
        marginTop:25,
        marginLeft:5,
        marginRight:5,
        height:84,
        flexDirection:'row',
        borderRadius:5,
        padding:2,
        backgroundColor: '#FF0067',
    },

    item: {
        flex: 1,
        height : 80,
        // borderColor: 'blue',
        // borderWidth: 1,
    },


    center: {
        justifyContent: 'center',//水平居中
        alignItems:  'center',//垂直居中
    },

    flex: {
        flex: 1,
    },

    font: {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',

    },
    lineLeftRight:{
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor: 'green',
    },

    lineCenter:{

        borderBottomWidth:1/PixelRatio.get(),
        borderColor: 'green',
    },


});


AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);