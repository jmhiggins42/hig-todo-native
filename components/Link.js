import React from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

const Link = ({ active, title, onPress }) => (
  <View style={styles.button}>
    <Button title={title} onPress={onPress} disabled={active} />
  </View>
);

const styles = StyleSheet.create({
  button: {
    margin: 5
  }
});

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Link;
