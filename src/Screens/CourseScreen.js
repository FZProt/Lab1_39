import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListWithTitle from '../Components/ListWithTitle';


const CourseScreen = (props)=>{
    const sem = props.route.params.sem;

    return(
        <View style={styles.viewStyle}>
            <ListWithTitle title={sem} />             
        </View>
    );
}


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
        },
        viewStyle: {
            flexDirection: "column",
            marginTop:20,
        },
    }
);

export default CourseScreen;