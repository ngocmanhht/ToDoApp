import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addList } from '../redux/Action';
import { changeStatus } from '../redux/Action';
import { deleteList } from '../redux/Action';
import { List } from '../Components/listComponents';


const done= require('../Img/done.png')
const noDone= require('../Img/noDone.png')
const deleteIcon= require('../Img/delete.png')


export const Home = () => {
 
 const [status, setStatus] =useState(true)
  const dispatch = useDispatch();
  const data = useSelector((store) => store.list);
  
  const [value, setValue]= useState('')
  const ifExists =((items)=>
  data.filter((item)=>item.name.toLowerCase()== items.toLowerCase())
  )

  const handleStatus=(item)=>{
 dispatch(changeStatus(
  {
    id: item.id,
    name: item.name,
    complete: !item.complete
  }
 ))
  }
  const handleDelete= (item)=>{

    dispatch(deleteList({
      id: item.id,
     name: item.name,
      complete: item.complete
    }))
  }
  const handleAdd =()=>{
    if(ifExists(value).length>0|| value=='')

    {
      Alert.alert('ERROR')
    }
    else
    {
    dispatch(addList({
      id:10,
      name: value,
      complete: false
    }))
  }
}
 
 
  return (
    <View style={styles.backGround}>
    <View style={styles.addArea}>
    <Text style={styles.txt}> To Do List</Text> 
 
 <TextInput style={styles.textInput}
 placeholder='Enter list'
 cursorColor={'black'}
 value={value}
 onChangeText={(value)=>setValue(value)}
 />
 <TouchableOpacity style={styles.functionBtn} onPress={handleAdd}>
  <Text style={styles.addTxt}>ADD TO LIST</Text>
 </TouchableOpacity>
    </View>
   <View style={styles.listArea}>
  
   <FlatList
   style={styles.flatList}
    data={data}
    renderItem={({item})=>
  <List name={item.name} image={item.complete==false ? noDone: done} 
  delete={deleteIcon}
  handleStatus={()=>handleStatus(item)}
  deleteStatus={()=>handleDelete(item)}
  ></List>
  }
    
    />
  
   </View>
  </View>
  )
}

export default Home
const styles = StyleSheet.create({
 
  backGround:
  {
    backgroundColor: '#B5BCBB',
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-between'
  

  },
  addArea:{
    width:'80%',
     alignItems:'center',
   

  },
  listArea:{
  width:'95%', 
  height:'75%',
  borderWidth:2, 
  borderRadius:20,
  bottom:20,
   alignItems:'center',
    justifyContent:'space-around'

  },
 functionBtn:{
  borderWidth:1,
  width:'60%',
  height: 40,
  borderRadius:10,
   alignItems:'center',
   justifyContent: 'center',
 top: 20,
 backgroundColor:'black'
 },
 addTxt:{
color:'white'
 },
  txt:{
    fontSize:20

  },

  flatList:{
    width:'95%', 
    height:'75%'

  },
  textInput:{
    borderWidth:2,
    width:'80%',
    height:50,
    borderRadius:10,
    top:10,
     backgroundColor:'white'
  }
})