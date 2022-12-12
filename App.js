import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const[todos, setTodos] = useState([
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header></Header>
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
          <View style={styles.list}> 
            <FlatList 
              data={todos}
              renderItem={({ item }) =>(
              <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list: {
    marginTop:20,
  }
});