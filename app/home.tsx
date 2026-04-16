import { loginStyles } from '@/assets/styles/login.styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Home Screen</Text>
      <Text style={{ textAlign: 'center' }}>Welcome! You are logged in.</Text>
    </View>
  );
}
