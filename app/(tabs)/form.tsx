import { formStyles } from '@/assets/styles/form.styles';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Missing info', 'Please fill in all form fields.');
      return;
    }

    Alert.alert('Submitted', `Thanks ${name}, your form was submitted.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <SafeAreaView style={formStyles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={formStyles.content} showsVerticalScrollIndicator={false}>
        <View style={formStyles.headerBox}>
          <Text style={formStyles.title}>Contact Form</Text>
          <Text style={formStyles.subtitle}>Fill in your details and send a quick message.</Text>
        </View>

        <View style={formStyles.card}>
          <Text style={formStyles.label}>Full Name</Text>
          <TextInput
            style={formStyles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <Text style={formStyles.label}>Email</Text>
          <TextInput
            style={formStyles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={formStyles.label}>Message</Text>
          <TextInput
            style={[formStyles.input, formStyles.messageInput]}
            placeholder="Write your message"
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={formStyles.button} onPress={handleSubmit}>
            <Text style={formStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
