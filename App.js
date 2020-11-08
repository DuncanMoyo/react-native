import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  return (
    <View style={{padding: 50}}>
     <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TextInput placeholder='Course Goal' style={{padding: 10, borderColor: 'black', borderWidth: 1, width: '80%'}}/>
      <Button title="ADD"/>
     </View>
    </View>
  );
}

