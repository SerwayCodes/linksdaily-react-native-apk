import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import CenteredButton from "../components/auth/CenteredButton";
import tw from "twrnc";
const SignUp = ({ navigation }) => {
  const HandleNavigateSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={tw`px-10 flex-1 justify-center bg-blue-200`}>
      <View style={tw`justify-center items-center`}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text title center>
        SignUp
      </Text>
      <UserInput label="Name" placeholder="Enter Your Name" />
      <UserInput label="Email" placeholder="Enter Your Email" />
      <UserInput
        label="Password"
        placeholder="Enter Your Password"
        secureTextEntry
      />
      <CenteredButton btnType="Sign Up" />
      <View style={tw`pt-4`}>
        <Text style={tw`text-center text-xl`}>
          Already have an account? {""}
          <Text onPress={HandleNavigateSignIn}>
            <Text style={tw`text-blue-700 text-xl`}>Sign in</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;
