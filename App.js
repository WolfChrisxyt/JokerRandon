import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, SafeAreaView, StyleSheet, Alert, Keyboard } from 'react-native';
import axios from 'axios';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [fromAxios, setFromAxios] = useState(false);
  const [joker, setJoker] = useState('');

  const setJokes = (value) => {
    setJoker(value);
  }

  const goAPIJoke = () => {
    setFromAxios(false);
    setLoading(true);
    axios
      .get('https://official-joke-api.appspot.com/random_joke/${jokers}json')
      .then(response => {
        console.log(response.joker);
        setTimeout(() => {
          setLoading(false);
          setJoker(response.joke);
          setFromAxios(true);
          Keyboard.dismiss();
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      });
  };













  return (
    <SafeAreaView style={{ marginTop: 5 }}>
      <View style={{ margin: 6 }}>
        <TextInput
          style={{ margin: 10 }}
          onChangeText={setJokes}
          placeholder="Digite uma piada"
        />
        <Button
          title="Piadas aleatórias"
          onPress={goAPIJoke}
        />
        <Text>{loading ? 'Carregando...' : fromAxios ? joker : null}</Text>
      </View>
    </SafeAreaView>
  );
}
