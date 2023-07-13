import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Text, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../components/layout';

const NewUserLandingPage = ({ navigation }) => {
  return (
  
    <Layout showNav={false}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
         <Text>Hello!!! My name is Jim and I'm here to help you get cut, ripped, jacked, or swole and everything in between! Are you finally ready to put in the work?</Text>
        
        </Card.Content>
        <Icon name="dumbbell" size={100} color="#007aff" />
      </Card>
      
      <Button 
  mode="contained" 
  onPress={() => navigation.navigate('CreateAccount')}
  style={styles.button}
>
  Yes, I'm going to do it
</Button>

    </View>
  </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default NewUserLandingPage;
