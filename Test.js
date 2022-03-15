import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import reducer from './Redux/reducer'
import { useSelector,useDispatch, connect } from 'react-redux'

// import {connect} from 'react-redux'
import { anotherName,anotherWish } from './Redux/actions/action'
import {apiGet} from './Redux/actions/apiAction'

const Test = (props) => {

    console.log(props)
    const dataval = useSelector(state=>state.name)
    const wishval = useSelector(state=>state.wishes)
    const getApi = useSelector(state=>state.apiName)
    console.log("dataval",dataval)
    console.log("getAPI",getApi)

    const dispatch = useDispatch()

let nameis = "Aqib"
  return (
    <View>

        <Text style={{fontSize:30,color:'red',alignItems:'center'}}>My Name Is {dataval}</Text>
        <Text style={{fontSize:30,color:'red',alignItems:'center'}}>My Hobby Is {wishval}</Text>
        <Text style={{fontSize:30,color:'red',alignItems:'center'}}>UserName is  {getApi}</Text>


        <Button onPress={()=>{dispatch(anotherName(nameis))}} title="Click Name" color="#841584" />
        <Button onPress={()=>{dispatch(anotherWish("Football"))}} title="Click Hobby" color="#841584" />

        {/* <Button onPress={()=>{dispatch(dis(apiGet())}} title="Get Api User name" color="#841584" /> */}

        <Button onPress={()=>{props.getApiName()}} title="Click Wish" color="#841584" />
       

   
    </View>
  )
}
const mapStateTOProps = (state)=>{
    return {
        apiNameUser:state.apiName,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      getApiName:()=>{dispatch(apiGet())},
    }
}
export default connect(mapStateTOProps,mapDispatchToProps)(Test);

const styles = StyleSheet.create({})