import React, { useContext} from 'react';
import { StyleSheet, TextInput} from "react-native";
import {Context} from '../context/BlogContext';
import BlogPostform from "../components/BlogPostform";

const EditScreen = ({route, navigation}) => {
    const { id } = route.params;
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === id );



    return (
 <BlogPostform
  initialValues = {{title: blogPost.title, content:blogPost.content}}
  onSubmit = {(title,content) => {
      editBlogPost(id, title,content,() => navigation.pop() );   // using navigation.navigate('Home') works fine though

  }}


 />

    );};

const styles = StyleSheet.create({});

export default EditScreen;
