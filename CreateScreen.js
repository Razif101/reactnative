import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Indexscreen from "./src/screens";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from "./src/context/BlogContext";
import {Feather, EvilIcons} from '@expo/vector-icons'
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

const App = ()=> {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Indexscreen}
              options={({ navigation }) => ({
              headerTitle: 'Blogs',
              headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
               <Feather style  = {styles.icon} name = "plus"/>
            </TouchableOpacity>
         ),
     })}

            />
            <Stack.Screen name={'Show'} component={ShowScreen}
             options={({ route,navigation }) => ({
              headerTitle: 'Edit Blog',
              headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id:route.params.id,
                blog: route.params.blog, conti:route.params.conti})}>
               <EvilIcons style  = {styles.icon} name = "pencil"/>
            </TouchableOpacity>),})}


            />
            <Stack.Screen name={'Create'} component={CreateScreen}/>
            <Stack.Screen name={'Edit'} component={EditScreen}/>

        </Stack.Navigator>

      </NavigationContainer>

  )


}

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

export default () => {
    return(
        <Provider>
            <App/>
        </Provider>

    )



}
