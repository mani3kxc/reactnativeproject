/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   View
} from 'react-native';

var bgimages = { 
                  "skrzyczne" : require('./images/menu_skrzyczne.jpg'),
                  "zar" : require('./images/menu_zar.jpg'),
               };

export default class Paragliding extends Component {

  constructor(props)
  {
    super(props);
      this.state = {
        data: []
      };
    this.getMoviesFromApi();
  }


  triggerAnim() {

    
  }

async getMoviesFromApi() {
  fetch('http://paralotniarz.com.pl/backend/?spot=zar', {
    method: 'get',
    dataType: 'json',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) =>
    {
      return response.json()
    })
  .then((responseData) => {
        return responseData;
    })
  .then((data) => {
    this.setState({data: data})

    }).catch(function(err) {
      console.log(err);
    })
    .done();

   }

   render() {
     return (
      <View style={{ flex: 1}}>
<Text style={styles.title}>LATANIE W BESKIDACH</Text>
        <View style={{ flex: 1 }}>
       <View style={styles.container}>
       <Spot spotid="zar" spotname="GÓRA ŻAR"></Spot>
       <Spot spotid="skrzyczne" spotname="SKRZYCZNE"></Spot>
       <View style={styles.downcontainer}>
         <View style={styles.paralotniarzlink}>
         <Image source={require('image!logo_znak')} style={styles.pglogo}/><Text style={styles.pgtext}>PARALOTNIARZ.COM.PL</Text>
         </View>  
       </View>  
       </View>
       </View>
       </View>
     );
   }
}


export class Spot extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      spotid: this.props.spotname,
      spotname: bgimages[this.props.spotid]
    };
  }

  render() {

    return (
        <Image source={this.state.spotname} style={styles.spotimg}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 2}}>
            <View style={styles.spottag}>
              <Text style={styles.spotname}>{this.state.spotid}</Text>
              <Text style={styles.spotalt}>1257 m n.p.m.</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            
          <View style={styles.iconcontainer}>
          <Image source={require('./images/webcam.png')} style={styles.webcamicon}></Image>
          <Image source={require('./images/webcam.png')} style={styles.webcamicon}></Image>
          <Image source={require('./images/webcam.png')} style={styles.webcamicon}></Image>
          </View>
            
          </View>
            
          
        </Image>
            
          );
  }

}

const styles = StyleSheet.create({
  
  title: {
        fontSize: 20,
        color: '#333333',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
  },

   container: {
        flex: 1,
  }, 

   spotcontainer: {
        flex: -1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#333333'
   },

   downcontainer: {
        flex: 0.75,
        flexDirection: 'column',
        justifyContent: 'flex-start',
   },

   spotimg: {
        width: undefined,
        height: undefined,
        margin: 0,
        padding: 0,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
   },

   spottag: {
        borderColor: '#ffffff',
        borderWidth: 1,
        backgroundColor: '#333333',
        opacity: 0.95,
        alignItems: 'center',
        justifyContent: 'center',
   },

   spotname: {
        fontSize: 30,
        color: '#ffffff',
        paddingLeft: 5,
        paddingRight: 5,
  },

  spotalt: {
        fontSize: 20,
        color: '#333333',
        backgroundColor: '#ffffff',
        alignSelf: 'stretch',

        textAlign: 'center',
  },

  paralotniarzlink: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
  },

  pglogo: {
        width: 40, 
        height: 40,
        margin: 5,
  },

  pgtext: {
        fontSize: 20,
        textAlignVertical: 'center',

  },

  iconcontainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    left: 10,
  },

  webcamicon: {
    height: 30,
    width: 30,
  }


});

AppRegistry.registerComponent('Paragliding', () => Paragliding);
