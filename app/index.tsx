import { loginStyles } from '@/assets/styles/login.styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (email === 'test@gmail.com' && password === '123456') {
      Alert.alert('Success', 'Login successful!');
      router.replace('/(tabs)/home');
    } else {
      Alert.alert('Failed', 'Invalid credentials');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>

      <TextInput
        style={loginStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
