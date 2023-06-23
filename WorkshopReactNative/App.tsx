/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from './Component/button/button';

const Profile= ({ route }) => {
  const { name, age, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text>{name}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Age:</Text>
        <Text>{age}</Text>
      </View>
        <Text style={styles.label}>Email:</Text>
        <Text>{email}</Text>
    </View>
  );
};


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


function ButtonValider() {
  console.log("Bonjour")
}

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{width: 100, height: 60, marginLeft: 160, marginTop: 70, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>ACCUEIL</Text>
      </View>
      <View>
      <TextInput
        style={{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        }}
      />
    </View>
      <View style={{width: 100, height: 40, alignItems: 'center', marginLeft: 160}}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.button}>
          <Text style={{fontSize: 10}}>Valider</Text>
        </TouchableOpacity>
        <CustomButton title={"accolade"}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default MyStack;
