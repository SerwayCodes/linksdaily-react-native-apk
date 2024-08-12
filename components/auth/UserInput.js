import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';

const UserInput = ({label, secureTextEntry=false, placeholder}) => {
  return (
    <View style={tw`px-6`}>
      <Text style={tw`font-semibold text-lg mb-2`}>{label}</Text>
      <TextInput
        style={tw`border border-gray-400 h-10 rounded-lg mb-6 px-4 `}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default UserInput;
