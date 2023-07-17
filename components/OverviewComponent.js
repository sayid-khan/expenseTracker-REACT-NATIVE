import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'


const AddTxnView=(props)=>{
  const [amount, setAmount] = useState()
  const [desc, setDesc] = useState()
  
  // const addTransaction=()=>{
  //   props.addTransaction({amount:Number(amount),desc,id: Date.now()})
  //   console.log({amount,desc,id})
  // }
  

  return(
    <>
    <View style={styles.AddTxnContainer}>
      <View>
      <TextInput
      placeholder='Amount'
      placeholderTextColor="gray"
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      style={styles.textinput}
      />
      </View>

      <View>
      <TextInput
      placeholder='Description'
      placeholderTextColor="gray"
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      style={styles.textinput}
      />
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:5}}>

        <TouchableOpacity style={{backgroundColor:"red",borderRadius:5,padding:5}}
         onPress={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc
          })
        } >
          <Text>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"green",borderRadius:5,padding:5}} onPress={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
          })
        }>
        <Text>Income</Text>
        </TouchableOpacity>

      </View>
      
    </View>
    </>
  )
}

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.balanceBox}>
         <Text style={{color:"white",fontSize:19,marginRight:20}}>Balance: $10000</Text>
         <TouchableOpacity style={styles.button} onPress={()=>toggleAddTxn(!isAddTxnVisible)}>
          <Text style={{color:"white"}}>{isAddTxnVisible?"Cancel":"ADD"}</Text>
         </TouchableOpacity>
        </View>
        {isAddTxnVisible && <AddTxnView   addTransaction={props.addTransaction}/>}

        <View style={styles.expenseContainer}>
          <View style={styles.expenseBox}>
            <Text style={{color:"red",fontSize:15,marginBottom:3,fontWeight:"600"}}>Expense</Text>
            <Text>$700</Text>
          </View>
          <View style={styles.expenseBox}>
            <Text style={{color:"green",fontSize:15,marginBottom:3,fontWeight:"600"}}>Income</Text>
            <Text>$10000</Text>
          </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      flexDirection:"column",
      margin:10,
      width:'100%'
    },
    balanceBox:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:50
    },
    button:{
        backgroundColor:"#0096FF",
        paddingTop: 5,
        paddingBottom:5,
        paddingHorizontal:10,
        borderRadius:5

    },
    AddTxnContainer:{
      flexDirection:"column",
      borderRadius:5,
      borderWidth:1,
      borderColor:"#fff",
      paddingTop:20,
      paddingBottom:30,
      // paddingHorizontal:70,
      marginTop:20,
      width:230
    },
    textinput:{
      color:"black",
      borderColor:"blue",
      borderRadius: 4,
      padding: 12,
      backgroundColor: '#FAFAFA',
      marginBottom: 10,
      borderWidth: 1,
      margin:20
    },
    expenseContainer:{
      flexDirection:"row",
      marginTop:10,
    },
    expenseBox:{
      backgroundColor:"#F0FFFF",
      flexDirection:"column",
      padding:15,
      borderRadius:5,
      marginHorizontal:10,
      width:100,
      height:70
    }
  });

export default OverviewComponent