import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "redux";
import { createStore } from "react-redux";

import rootReducer from "./reducers";

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.main}>
          <View style={styles.header}>
            <Text>#HigTodo!</Text>
          </View>
          <ScrollView style={styles.body}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    backgroundColor: "#4A4A4A",
    color: "#FFAD00"
  },
  header: {
    flex: 0.2
  },
  body: {
    flex: 0.8
  }
});
