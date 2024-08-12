import React from 'react';
import { View, Button } from 'react-native';
import tw from 'twrnc';

const CenteredButton = ({btnType}) => {
  return (
    <View style={tw`justify-center items-center`}>
      <Button title={btnType} onPress={() => console.log('Button Pressed!')} />
    </View>
  );
};

export default CenteredButton;
