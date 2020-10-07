import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';


const ProfileScreen = ()=>{
    name= 'Fatema Zohra Prottyasha'
    id= '170042039'
    room_no= '403'
    email= 'fatemazohra@iut-dhaka.edu'
    return(
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle}
            source = {require('./../../assets/dp.jpg')}
        />
        <Text style={styles.textStyle}>Name:         {name}</Text>
        <Text style={styles.textStyle}>Student ID: {id}</Text>
        <Text style={styles.textStyle}>Room no:    {room_no}</Text>
        <Text style={styles.textStyle}>Email:          {email}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        color: 'white',
        margin: 15,
        marginBottom: 0,
        backgroundColor: "green",
    },
    imageStyle: {
        height: 203,
        width: 124,
        alignSelf: "center",
        marginBottom: 30,
        marginTop: 30
    },
    viewStyle: {
        flexDirection: "column",
    },
});

export default ProfileScreen;