import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native';


const HomeScreen = (props)=>{
    // console.log(props)
    return(
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle}
            source = {require('./../../assets/logo.png')}
            />

            <Text style={styles.textStyle}>Department of CSE</Text>
            <Text style={styles.textStyle}>Programme: SWE</Text>

            <TouchableOpacity onPress= {
                function() {
                    props.navigation.navigate("Profile");    
                }
            } style={styles.buttonStyle}> 
            <Text style={styles.touchableStyle}>My Profile</Text>
            </TouchableOpacity>
                        
            <Button 
            title='Semester Wise Course List'
            onPress= {
                function() {
                    props.navigation.navigate("Semesters");    
                }
            }
            />

            <Text>  </Text>            


            <Button
            title='List of Faculty Members'
            onPress= {
                function() {
                    props.navigation.navigate("Faculty List");    
                }
            } 
            />
        </View>
    );
}


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'black',
            alignSelf: "center",
        },
        imageStyle: {
            height: 203,
            width: 124,
            alignSelf: "center",
            margin: 30,
        },
        viewStyle: {
            flexDirection: "column",
            alignSelf: "center",
        },
        buttonStyle: {
            marginTop: 100,
            marginBottom: 20,
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12
        },
        touchableStyle: {
            fontSize: 20,
            color: 'white',
            alignSelf: "center",
        }
    }
);

export default HomeScreen;