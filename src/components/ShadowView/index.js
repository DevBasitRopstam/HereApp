import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React from "react";

import { Colors } from "../../assets";

export const ShadowCard = ({
  children,
  cardStyle,
  onPress,
  key,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        cardStyle,
      ]}
      onPress={onPress}
      key={key}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacity>
  );
};
