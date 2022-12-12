import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => { //val에 충족되면 텍스트 선언
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='추가할 항목을 입력하세요.'//유저가 입력하면 사라짐
                placeholderTextColor={'#999'}
                onChangeText={changeHandler}//입력된 텍스트가 변할 때 마다 호출
            />
            <Button onPress={() => submitHandler(text)} //submithandler의 텍스트가 버튼이 눌릴 때 마다 호출
                title='추가하기' 
                color='#3143e8'>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'#99ccff'
    }

})