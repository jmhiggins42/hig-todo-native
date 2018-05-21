import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, title, onPress }) => (
  <Button title={title} onPress={onPress} disabled={active} />
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Link;
