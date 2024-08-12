import React from "react";
import { View, Image } from "react-native";
import Text from "@kaloraat/react-native-text"
import UserInput from "../components/auth/UserInput";
import CenteredButton from "../components/auth/CenteredButton";
import tw from 'twrnc';

const SignUp=()=>{

    return (
    <View style={{flex:1, justifyContent:"center"}}>
        <View style={tw`justify-center items-center`}>
      <Image
        source={require('../assets/images/linkd.jpeg')}
        style={{ width: 200, height: 200,}}
        
      />
    </View>
        <Text title center >SignUp</Text>
        
        <UserInput label='Name' placeholder='Enter Your Name' />
        <UserInput label='Email' placeholder='Enter Your Email' />
        <UserInput label='Password' placeholder='Enter Your Password' secureTextEntry/>
        <CenteredButton btnType='Sign Up' />
        
        </View>

        
     )
}
export default SignUp;