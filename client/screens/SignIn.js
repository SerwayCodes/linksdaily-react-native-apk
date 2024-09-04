import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import CenteredButton from "../components/auth/CenteredButton";
import tw from "twrnc";

const SignUp = ({ navigation }) => {
  const HandleNavigateSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={tw`px-10 flex-1 justify-center bg-blue-200`}>
      <View style={tw`justify-center items-center mb-10`}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text title center>
        Sign In
      </Text>

      <UserInput label="Email" placeholder="Enter Your Email" />
      <UserInput
        label="Password"
        placeholder="Enter Your Password"
        secureTextEntry
      />
      <CenteredButton btnType="Sign In" />
      <View style={tw`pt-4`}>
        <Text style={tw`text-center text-gray-900 text-xl`}>
          Do not Have an account yet?{" "}
          <Text onPress={HandleNavigateSignUp}>
            <Text style={tw`text-xl text-blue-700 `}>Sign Up</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;
