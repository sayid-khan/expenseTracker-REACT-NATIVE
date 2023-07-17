import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeComponent from './components/Index';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.header}>
          <Text style={{fontWeight:"700", fontSize:"35", color:"#00FFFF"}}>
             Expense Tracker
          </Text>
      </View>
      <HomeComponent/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454F',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#fff",
    flexDirection:"column"
  },
  header:{
     alignItems:'center',
     justifyContent:"center",
     marginTop:-300,
  }
});
