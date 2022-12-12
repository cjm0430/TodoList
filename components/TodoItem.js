import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }){

    return(
        <TouchableOpacity onPress={() =>
            pressHandler(item.key)}>
            <Text style= {styles.item}>{item.text}</Text> 
        </TouchableOpacity>
    )// 값 추가
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        marginTop:20,
        borderColor:'#99ccff',
        borderWidth:1,
        borderRadius:10
    },
})