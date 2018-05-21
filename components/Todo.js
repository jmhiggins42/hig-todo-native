import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

const Todo = ({ onPress, completed, text, id }) => (
  <View style={styles.todo}>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ alignContent: "center" }}>
        <Text
          style={{
            color: "#FAFAFA",
            fontSize: 30
          }}
        >
          {`${id + 1}. `}
          <Text
            style={{
              textDecorationLine: completed ? "line-through" : "none",
              textDecorationColor: "#3293B7"
            }}
          >
            {text}
          </Text>
        </Text>
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
