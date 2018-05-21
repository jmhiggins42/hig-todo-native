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
    const { dispatch } = this.props;

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          selectionColor="#FAFAFA"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
          onKeyPress={e => {
            if (e.nativeEvent.key === "Enter") {
              dispatch(addTodo(this.state.text));
              this.setState({ text: "" });
            }
          }}
          value={this.state.text}
        />
        <View style={styles.button}>
          <Button
            onPress={() => {
              if (!this.state.text.trim()) return;
              dispatch(addTodo(this.state.text));
              this.setState({ text: "" });
            }}
            color="#FFAD00"
            title="Add Todo"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 0.7,
    height: 45,
    fontSize: 30,
    borderColor: "#FFAD00",
    borderWidth: 1,
    borderRadius: 10,
    color: "#FAFAFA",
    paddingLeft: 8,
    paddingRight: 8
  },
  button: {
    flex: 0.3,
    marginLeft: 5,
    marginRight: 5
  }
});

export default connect()(AddTodo);
