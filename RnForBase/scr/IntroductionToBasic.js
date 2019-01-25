import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform, FlatList, SectionList} from 'react-native';


// export default class Bananas extends Component {
//     render() {
//
//         return (
//
//             <View>
//                 <Text>Hello world!</Text
//             </View>
//
//
//         );
//     }
// }


/*************************************/


export default class asdfg extends Component {
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (

            <View>
                <Text>Hello world!</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={require('../img/favicon.png')} />

            </View>
        );
    }
}


/*************************************/

//
// class Greeting extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 <Text>Hello {this.props.name}!</Text>
//             </View>
//         );
//     }
// }
//
// export default class LotsOfGreetings extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 <Greeting name='Rexxar' />
//                 <Greeting name='Jaina' />
//                 <Greeting name='Valeera' />
//             </View>
//         );
//     }
// }



/*************************************/
//
// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { isShowingText: true };
//
//         // 每1000毫秒对showText状态做一次取反操作
//         setInterval(() => {
//             this.setState(previousState => {
//                 return { isShowingText: !previousState.isShowingText };
//             });
//         }, 1000);
//     }
//
//     render() {
//         // 根据当前showText的值决定是否显示text内容
//         if (!this.state.isShowingText) {
//             return null;
//         }
//
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }
//
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blink text='I love to blink' />
//                 <Blink text='Yes blinking is so great' />
//                 <Blink text='Why did they ever take this out of HTML' />
//                 <Blink text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }


/*************************************/

// export default class LotsOfStyles extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={styles.red}>just red</Text>
//                 <Text style={styles.bigblue}>just bigblue</Text>
//                 <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//                 <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });


/*************************************/

// export default class TextInANest extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             titleText: "Bird's Nest",
//             bodyText: 'This is not really a bird nest.'
//         };
//     }
//
//     render() {
//         return (
//             <Text style={styles.baseText}>
//                 <Text style={styles.titleText} onPress={this.onPressTitle}>
//                     {this.state.titleText}{'\n'}{'\n'}{'\n'}
//                 </Text>
//                 <Text numberOfLines={5}>
//                     {this.state.bodyText}
//                 </Text>
//             </Text>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     baseText: {
//         fontFamily: 'Cochin',
//     },
//     titleText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
// });


/*************************************/

// export default class BoldAndBeautiful extends Component {
//     render() {
//         return (
//
//             <Text style={{fontWeight: 'bold'}}>
//                 I am bold
//                 <Text style={{color: 'red'}}>
//                     and red
//                 </Text>
//             </Text>
//
//         );
//     }
// }

/*************************************/

// export default class BoldAndBeautiful extends Component {
//     render() {
//         return (
//
//
//             <View>
//                  <Text>First part and </Text>
//                  <Text>second part</Text>
//              </View>
//
//             // <Text>
//             //     <Text>First part and </Text>
//             //     <Text>second part</Text>
//             // </Text>
//
//         );
//     }
// }


/*************************************/

// export default class FixedDimensionsBasics extends Component {
//     render() {
//         return (
//             <View>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// }


/*************************************/

// export default class FlexDimensionsBasics extends Component {
//     render() {
//         return (
//
//             /*
//             // 试试去掉父View中的`flex: 1`。
//             // 则父View不再具有尺寸，因此子组件也无法再撑开。
//             // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//             <View style={{flex: 1}}>
//                 <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//                 <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//                 <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//             </View>
//             */
//
//
//
//
//             /*
//             // 尝试把`flexDirection`改为`column`看看
//             <View style={{flex: 1, flexDirection: 'column'}}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
//             </View>
//             */
//
//
//
//             /*
//
//             // 尝试把`justifyContent`改为`center`看看
//             // 尝试把`flexDirection`改为`row`看看
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//             }}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//             </View>
//
//             */
//
//
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{height: 100, backgroundColor: 'steelblue'}} />
//             </View>
//
//
//         );
//     }
// }


/*************************************/

// export default class PizzaTranslator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//
//
//                 <Button
//                     onPress={() => {
//                         Alert.alert("你点击了按钮！");
//                     }}
//                     title="点我！！！"
//                 />
//
//
//             </View>
//         );
//     }
// }


/*************************************/

// export default class ButtonBasics extends Component {
//     _onPressButton() {
//         Alert.alert('You tapped the button!')
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this._onPressButton}
//                         title="Press Me"
//                     />
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this._onPressButton}
//                         title="Press Me"
//                         color="#841584"
//                     />
//                 </View>
//                 <View style={styles.alternativeLayoutButtonContainer}>
//                     <Button
//                         onPress={this._onPressButton}
//                         title="This looks great!"
//                     />
//                     <Button
//                         onPress={this._onPressButton}
//                         title="OK!"
//                         color="#841584"
//                     />
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     buttonContainer: {
//         margin: 20
//
//     },
//     alternativeLayoutButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// })


/*************************************/
// export default class Touchables extends Component {
//     _onPressButton() {
//         Alert.alert('You tapped the button!')
//     }
//
//     _onLongPressButton() {
//         Alert.alert('You long-pressed the button!')
//     }
//
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableHighlight</Text>
//                     </View>
//                 </TouchableHighlight>
//
//
//                 <TouchableOpacity onPress={this._onPressButton}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableOpacity</Text>
//                     </View>
//                 </TouchableOpacity>
//
//
//                 <TouchableNativeFeedback
//                     onPress={this._onPressButton}
//                     background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//                     </View>
//                 </TouchableNativeFeedback>
//
//
//                 <TouchableWithoutFeedback
//                     onPress={this._onPressButton}
//                 >
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//                     </View>
//                 </TouchableWithoutFeedback>
//
//
//                 <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>Touchable with Long Press</Text>
//                     </View>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 60,
//         alignItems: 'center'
//     },
//     button: {
//         marginBottom: 30,
//         width: 260,
//         alignItems: 'center',
//         backgroundColor: '#2196F3'
//     },
//     buttonText: {
//         padding: 20,
//         color: 'white'
//     }
// })



/*************************************/

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 <Text style={{fontSize:36}}>Scroll me plz</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>If you like</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>Scrolling down</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>What's the best</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>Framework around?</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:80}}>React Native</Text>
//             </ScrollView>
//         );
//     }
// }


// export default class FlatListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         {key: 'Devin'},
//                         {key: 'Jackson'},
//                         {key: 'James'},
//                         {key: 'Joel'},
//                         {key: 'John'},
//                         {key: 'Jillian'},
//                         {key: 'Jimmy'},
//                         {key: 'Julie'},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.itemCell}>{item.key}</Text>}
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     itemCell: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })




/*************************************/
//
// export default class SectionListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <SectionList
//                     sections={[
//                         {title: 'D', data: ['Devin']},
//                         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//                     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//                     keyExtractor={(item, index) => index}
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     sectionHeader: {
//         paddingTop: 2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 14,
//         fontWeight: 'bold',
//         backgroundColor: 'rgba(247,247,247,1.0)',
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })