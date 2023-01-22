import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import GeneticsScreen from './GeneticsScreen';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
export default class Home extends Component{
render(){
  return(

    <View>
    <Header 
     centerComponent = {{
       text: 'DiscoverDNA',
     }}
    />       
 
    <Image source = { require('../assets/bird.png')} style = {{width:100,height:100, marginLeft:107,marginTop:50}}/>
    <Text style = {{marginLeft:70, fontSize:20, color:'blue'}}>
     Discover your childs genetics!
    </Text>
        <Text>  </Text>
       <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Blood Type
    </Text>
        <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Eye Color
    </Text>
    <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Hair Color
    </Text>
   <Text style = {{marginLeft: 65, fontSize: 20}}>
   - Childs Earlobe
   </Text>
      <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('GeneticsScreen')}} style = {{backgroundColor:"black", width:200, height:50, marginLeft:90, marginTop:70}}>      
      <Text style = {{fontSize:40, marginLeft:20,color:'white'}}>Continue!</Text>
      </TouchableOpacity>
     
     
 <TextAnimationReverse value={" Dr. Finnegan White " } delay={20} duration={400} style={{color: '#ff1493', fontSize:30}} />
     </View>
  )
}
}