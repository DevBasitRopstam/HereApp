import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const ScreenWrapper = ({
  children,
  style,
  model = false,
  ref,
  req = true,
}) => {
  return (
    // <KeyboardAwareScrollView style={{flex: 1}} contentOffset={{x:10,y:20}}>
    <KeyboardAvoidingView
      style={[styles.containerMain, style]}
      behavior={Platform.OS === "ios" ? "padding" : req ? "height" : null}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS == "android" ? 15 : 0,
  },
  containerMain: {
    flex: 1,
  },
});
