import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';


const FacultyScreen = ()=>{
    const facultyList = [
        { name: "Mr. A", key: '1'},
        { name: "Mr. B", key: '2'},
        { name: "Mr. C", key: '3'},
        { name: "Mr. D", key: '4'},
        { name: "Mr. E", key: '5'},
        { name: "Mr. F", key: '6'},
    ];

    return(
        <View style={styles.viewStyle}>
            <FlatList
            data={facultyList}          
            renderItem={function ({item}) {
            return <Text style={styles.textStyle}>{item.key}. {item.name}</Text>
            }}
            />
        </View>
    );
}


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'skyblue',
        },
        viewStyle: {
            flexDirection: "column",
            margin:30,
        },
    }
);

export default FacultyScreen;