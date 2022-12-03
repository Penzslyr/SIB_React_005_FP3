import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  const className = ["button"];

  return (
    <TouchableOpacity onPress={()=>props.onPress()}>
      <View className="bg-blue-600 p-4 rounded-xl mb-8">
        <Text className="text-white text-center">{props.children}</Text>
      </View>
    </TouchableOpacity>
  );

  Button.propTypes = {
    buttonLogin: propTypes.bool,
  };
};

export default Button;
