import React from "react";
import { Provider } from "redux";
import { createStore } from "react-redux";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import rootReducer from "./reducers";

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.head}>
          <Text>#HigTodo!</Text>
        </View>
        <ScrollView>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  scroll: {},
  header: {},
  text: {}
});
