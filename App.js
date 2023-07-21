import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, SafeAreaView, StyleSheet, Alert, Keyboard , Flatlist } from 'react-native';

const App = () => {
  const onPress = () =>{

  }
  const [loading, setLoading] = useState(true);
  const [joker, setJoker] = useState([]);
  const getJokers = async () => {
    try{
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const json = await response.json();
      setJoker(json.jokers);
    } catch (error){

    }finally {
      setLoading(false)
    }
  };

useEffect(() => {
  getJokers();
}, []);







  return (
    <SafeAreaView style={{ marginTop: 5 }}>
      <View style={{ margin: 6 }}>
        <Text>Button</Text>
       
        <Button onPress />
        </View>
  </SafeAreaView>        
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
  
