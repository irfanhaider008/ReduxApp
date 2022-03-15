import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const SubPart = () => {
    const dataval = useSelector(state=>state.name)

    const wishval = useSelector(state=>state.wishes)

    console.log("Wishval",wishval)
  return (
    <View>
      <Text style={{fontSize:30,color:'green',alignItems:'center'}}>{dataval}</Text>

      <Text style={{fontSize:30,color:'green',alignItems:'center'}}>{wishval}</Text>

    </View>
  )
}

export default SubPart

const styles = StyleSheet.create({})