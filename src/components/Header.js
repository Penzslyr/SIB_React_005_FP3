import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    
    <View className="flex-row my-10">
      <TouchableOpacity onPress={()=>props.onPress()}>
        <Image
          source={require("../icons/back.png")}
          className="flex-none w-8 h-8"
        />
      </TouchableOpacity>
      <Text className="flex-1 m-auto text-center text-base font-bold">
        {props.children}
      </Text>
    </View>
  );
};

export default Header;
