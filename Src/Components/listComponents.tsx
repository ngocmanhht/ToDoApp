import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'


export const List = (props) => {
  return (
    <View style={styles.background}>
        <View style={styles.txtView}>
        <Text >{props.name}</Text>
        </View>
        <View style={styles.functionView}>
        <TouchableOpacity onPress={props.handleStatus}  >
          <Image
          source={props.image} style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.deleteStatus}>
        <Image
          source={props.delete} style={styles.image}/>
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default List

const styles = StyleSheet.create({
  background:{
    width:'100%', 
    height:60,
    borderWidth:2, 
    flexDirection:'row',
    justifyContent:'space-around', 
    alignItems:'center',
    marginTop:10,
    borderRadius:15
  },
   image:{
    width:20, 
    height:20
   },
   txtView:{
    width:'50%',
      height:'95%',
       justifyContent:'center',
       alignItems:'center'

   },
   functionView:{
    width:'45%',
     height:'95%',
     flexDirection:'row', 
     justifyContent:'space-between',
      alignItems:'center'
   }
})