import { formStyles } from '@/assets/styles/form.styles';
import React, { useRef, useState } from 'react';
import { Alert, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const messageInputRef = useRef<TextInput>(null);

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value.trim());

  const handleSubmit = () => {
    nameInputRef.current?.blur();
    emailInputRef.current?.blur();
    messageInputRef.current?.blur();
    Keyboard.dismiss();

    let hasError = false;

    if (!name.trim()) {
      setNameError('Please enter your name.');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Please enter your email.');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Please enter your remarks.');
      hasError = true;
    } else {
      setMessageError('');
    }

    if (hasError) {
      return;
    }

    Alert.alert('Submitted', `Thanks ${name}, your form was submitted.`);
    setName('');
    setEmail('');
    setMessage('');
    setNameError('');
    setEmailError('');
    setMessageError('');
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
            ref={nameInputRef}
            style={[formStyles.input, nameError ? formStyles.inputError : null]}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (!nameError) return;
              if (!text.trim()) {
                setNameError('Please enter your name.');
              } else {
                setNameError('');
              }
            }}
          />
          {!!nameError && <Text style={formStyles.errorText}>{nameError}</Text>}

          <Text style={formStyles.label}>Email</Text>
          <TextInput
            ref={emailInputRef}
            style={[formStyles.input, emailError ? formStyles.inputError : null]}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (!emailError) return;
              if (!text.trim()) {
                setEmailError('Please enter your email.');
              } else if (!isValidEmail(text)) {
                setEmailError('Please enter a valid email address.');
              } else {
                setEmailError('');
              }
            }}
          />
          {!!emailError && <Text style={formStyles.errorText}>{emailError}</Text>}

          <Text style={formStyles.label}>Remarks</Text>
          <TextInput
            ref={messageInputRef}
            style={[formStyles.input, formStyles.messageInput, messageError ? formStyles.inputError : null]}
            placeholder="Write your remarks"
            multiline
            textAlignVertical="top"
            value={message}
            onChangeText={(text) => {
              setMessage(text);
              if (!messageError) return;
              if (!text.trim()) {
                setMessageError('Please enter your remarks.');
              } else {
                setMessageError('');
              }
            }}
          />
          {!!messageError && <Text style={formStyles.errorText}>{messageError}</Text>}

          <TouchableOpacity style={formStyles.button} onPress={handleSubmit}>
            <Text style={formStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
