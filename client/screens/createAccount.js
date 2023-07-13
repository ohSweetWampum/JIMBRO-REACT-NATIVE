import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, Text, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../components/layout';

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Layout showNav={false}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Create Account</Title>
            <Paragraph>Please enter your email and password to create a new account.</Paragraph>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              mode="outlined"
              style={styles.input}
              placeholder="example@email.com"
              autoCapitalize="none"
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              placeholder="Enter a Password"
            />
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              placeholder="Re-Enter Password"
            />
          </Card.Actions>
        </Card>
        <View style={styles.buttonContainer}>
          <Button 
            mode="contained" 
            onPress={() => console.log('Submit pressed')}
            style={styles.button}
          >
          Create Account
          </Button>
        </View>
      </View>
   </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',

  },
  actions: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginTop: 10,
    
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default CreateAccount;
