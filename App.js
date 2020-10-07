import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import CourseScreen from './src/Screens/CourseScreen';
import FacultyScreen from './src/Screens/FacultyScreen';
import SemestersScreen from './src/Screens/SemestersScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component= {HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}/>
        <stack.Screen name='Profile' component= {ProfileScreen} options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 100,
          },
        }}/>
        <stack.Screen name='Semesters' component= {SemestersScreen} options={{
          title: 'Semesters',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 80,
          },
        }}/>
        <stack.Screen name='Faculty List' component= {FacultyScreen} options={{
          title: 'Faculty List',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            marginLeft: 80,
            fontWeight: 'bold',
          },
        }}/>
        <stack.Screen name='Course List' component= {CourseScreen} options={{
          title: 'Course List',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 80,
          },
        }}/>
      </stack.Navigator>      
    </NavigationContainer>
  );
}

export default App;