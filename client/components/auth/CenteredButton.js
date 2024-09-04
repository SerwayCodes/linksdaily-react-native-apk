import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import tw from "twrnc";

const CenteredButton = ({ btnType }) => {
  return (
    <View style={tw`justify-center text-center`}>
      <TouchableOpacity
        onPress={() => console.log("Button Pressed!")}
        style={styles.buttonType}
      >
        <View>
          <Text style={styles.buttonText}> {btnType}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonType: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignSelf: "center",
    width: 200,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "",
    textAlign: "center",
    fontSize: 20,
  },
});
export default CenteredButton;
