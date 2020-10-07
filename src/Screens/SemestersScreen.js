import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';


const SemestersScreen = (props)=>{
    return(
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress= { function() {
                sem="1st"
                props.navigation.navigate("Course List", {sem});
            }}>
                <Text style={styles.touchableStyle}>1st Semester</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress= { function() {
                sem='2nd'
                props.navigation.navigate("Course List", {sem});
            }}>
                <Text style={styles.touchableStyle}>2nd Semester</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress= { function() {
                sem='3rd'
                props.navigation.navigate("Course List", {sem});
            }}>
                <Text style={styles.touchableStyle}>3rd Semester</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        touchableStyle: {
            fontSize: 25,
            color: 'white',
            alignSelf: "center",
        },
        buttonStyle: {
            marginBottom: 20,
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12
        },
        viewStyle: {
            marginTop:30,
            flexDirection: "column",
            alignSelf: "center",
        },
    }
);

export default SemestersScreen;