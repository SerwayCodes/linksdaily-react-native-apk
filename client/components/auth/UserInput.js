import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import tw from "twrnc";
import * as Font from "expo-font";

const UserInput = ({ label, secureTextEntry = false, placeholder }) => {
  return (
    <View style={tw`px-2`}>
      <Text style={tw`text-xl  mb-2`}>{label}</Text>
      <TextInput
        style={styles.inputline}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputline: {
    height: 30,
    fontSize: 20,
    Font: "EduVICWANTBeginner-Regular",
    marginBottom: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 2,
    borderBottomColor: "#3A1078",
  },
});

export default UserInput;
