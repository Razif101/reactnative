import React, {useContext, useReducer} from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'


const Indexscreen = ({navigation}) => {
    const {state, deleteBlogPost } = useContext(Context)

    return (
        <View>



            <FlatList data={state}
                      renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress = {() =>
                                navigation.navigate('Show', {id: item.id, blog:item.title, conti:item.content})}>
                               <View style = {styles.row}>
                               <Text style = {styles.title}> {item.title} - {item.id} - {item.content} </Text>
                                <TouchableOpacity onPress =
                                                      {() => deleteBlogPost(item.id)}
                                >
                                 <Feather style  = {styles.icon} name = "trash"/>
                                </TouchableOpacity>

                               </View>
                             </TouchableOpacity>
                        )
                          }}
                      keyExtractor={(item) => item.title} />
        </View>

    );
};

Indexscreen.navia

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth:1,
        borderColor: 'gray'
    },

    title: {
        fontSize: 18
    },

    icon: { fontSize: 24}

});


export default Indexscreen;
