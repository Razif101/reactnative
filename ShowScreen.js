import React from "react";
import {View, Text, StyleSheet} from 'react-native';



const ShowScreen = ({navigation, route}) => {
    const {id, blog, conti } = route.params

    return <View>
        <Text> Hello</Text>
         <Text> {id} </Text>
        <Text> {blog}</Text>
        <Text> {conti}</Text>
    </View>

};

const styles = StyleSheet.create({

});

export default ShowScreen;
