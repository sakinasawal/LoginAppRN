import { loginStyles } from '@/assets/styles/login.styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (!email.trim()) {
      setEmailError('Email is required.');
      hasError = true;
    }
    if (!password.trim()) {
      setPasswordError('Password is required.');
      hasError = true;
    }
    if (hasError) return;

    if (email === 'test@gmail.com' && password === '123456') {
      router.replace('/(tabs)/home');
    } else {
      Alert.alert('Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>

      <TextInput
        style={[loginStyles.input, emailError ? loginStyles.inputError : null]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (emailError) setEmailError('');
        }}
      />
      {emailError ? <Text style={loginStyles.errorText}>{emailError}</Text> : null}

      <View style={[loginStyles.passwordContainer, passwordError ? loginStyles.inputError : null]}>
        <TextInput
          style={loginStyles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError) setPasswordError('');
          }}
        />
        <TouchableOpacity style={loginStyles.eyeButton} onPress={() => setShowPassword((prev) => !prev)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#64748b" />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={loginStyles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
