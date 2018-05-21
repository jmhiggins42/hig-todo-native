import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.text}>#HigTodo!</Text>
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
    justifyContent: "center",
    backgroundColor: "#4A4A4A",
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    flex: 0.2,
    paddingTop: 24
  },
  body: {
    flex: 0.8
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    color: "#FFAD00",
    textAlign: "center"
  }
});
