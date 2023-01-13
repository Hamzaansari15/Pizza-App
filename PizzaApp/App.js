import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import StackNavigation from './screens/StackNavigation'

const App = () => {



  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c6f60a4ad4d8ef31bf998fb79ebd1ae1&mode=HTML')
  // .then(response => response.json())
  // .then(response => {console.log(response)
  // })
  // .catch(err => console.error(err));
  // })

  return (
      <StackNavigation />
  )
}

export default App

const styles = StyleSheet.create({})