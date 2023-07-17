import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TransactionComponent from './TransactionComponent'
import OverviewComponent from './OverviewComponent'

const HomeComponent = (props) => {
  const [transactions, setTransactions] = useState([])

  const addTransaction =(payload)=>{
    const transactionArray=[...transactions]
    transactionArray.push(payload)
    setTransactions(transactionArray)
  }
  return (
    <View>
      <OverviewComponent addTransaction={addTransaction}/>
      <TransactionComponent transactions={transactions}/>
    </View>
  )
}

export default HomeComponent