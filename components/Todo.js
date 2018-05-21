import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

const Todo = ({ onPress, completed, text }) => (
  <View style={styles.todo}>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  todo: {
    margin: 5
  }
});

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
