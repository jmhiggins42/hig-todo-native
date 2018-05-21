import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const { addOne } = this.props;

    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={() => {
            if (!this.state.text.trim()) return;
            addOne(this.state.text);
            this.setState({ text: "" });
          }}
          color="#FFAD00"
          title="Add Todo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "#FFAD00",
    borderWidth: 1
  }
});

const mapDispatchToProps = dispatch => {
  return { addOne: text => dispatch(addTodo(text)) };
};

export default connect(null, mapDispatchToProps)(AddTodo);
