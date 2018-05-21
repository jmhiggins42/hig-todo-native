import React from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoPress }) => (
  <View>
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo {...item} onPress={() => onTodoPress(item.id)} />
      )}
      keyExtractor={(item, index) => item.id}
    />
  </View>
);

TodoList.propTypes = {
  onTodoPress: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
