import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

const ListWithTitle = (props) => {
    let filteredCourses = undefined
    let semester = undefined
    let count = 0
    const courses = [
        { name: "SWE 4134", sem: "1st", key: '1' },
        { name: "CSE 4134", sem: "1st", key: '2'},
        { name: "SWE 4234", sem: "2nd", key: '3'},
        { name: "CSE 4254", sem: "2nd", key: '4'},
        { name: "SWE 4334", sem: "3rd", key: '5'},
        { name: "CSE 4394", sem: "3rd", key: '6'},
        { name: "SWE 4135", sem: "1st", key: '7' },
        { name: "SWE 4136", sem: "1st", key: '8' },
        { name: "SWE 4137", sem: "1st", key: '9' },
    ];

    if (props.title=="1st") {
        semester = "First Semester"
        filteredCourses = courses.filter(function(item) {
            return item.sem == "1st"
        });
    }
    if (props.title=="2nd") {
        semester = "Second Semester"
        filteredCourses = courses.filter(function(item) {
            return item.sem == "2nd"
        });
    }
    if (props.title=="3rd") {
        semester = "Third Semester"
        filteredCourses = courses.filter(function(item) {
            return item.sem == "3rd"
        });
    }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{semester}</Text>
            <FlatList
            data={filteredCourses}          
            renderItem={function ({item}) {
                count += 1
            return <Text style={styles.textStyle}>{count}. {item.name}</Text>
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 20,
            color: 'black',
        },
        viewStyle: {
            flexDirection: "column",
            marginLeft: 30,
        },
        titleStyle:{
            fontSize: 30,
            alignSelf: "center",
            color: "green",
            marginBottom: 25,
        }
    }
);

export default ListWithTitle;