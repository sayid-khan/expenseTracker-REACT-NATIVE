import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'

const TransactionCell=(props)=>{
    return(
      <View style={styles.cell}>
        <Text>
          {props.payload.desc}
        </Text>
        <Text>
          ${props.payload.amount}
        </Text>
      </View>
    )
}

const TransactionComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:19,marginRight:20,left:-40}}>Transactions</Text>
      <View>
      <TextInput
      placeholder='search'
      placeholderTextColor="gray"
      style={styles.search}
      />
      </View>
      {props.transactions?.length?props.transactions.map((payload)=>(<TransactionCell payload={payload}/>)):""}
    </View>
  )
}

export default TransactionComponent

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    flexDirection:"column",
    margin:10,
    width:'100%',
  },
  search:{
      color:"black",
      borderColor:"blue",
      borderRadius: 50,
      padding: 12,
      backgroundColor: '#FAFAFA',
      marginTop: 10,
      borderWidth: 1,
      width:230
  },
  cell:{
    flexDirection:"row",
    fontSize:14,
    borderRadius:2
  }
});