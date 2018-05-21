import React from "react";
import { Text } from "react-native";

import FilterLink from "../containers/FilterLink";

import { VisibilityFilters } from "../actions";

const Footer = () => (
  <View>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL} title="All" />
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} title="Active" />
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} title="Completed" />
  </View>
);

export default Footer;
