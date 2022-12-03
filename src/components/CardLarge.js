import { View, Text, Image } from "react-native";
import React from "react";

const CardLarge = (props) => {
  return (
    <View className="mr-6">
      <Image
        source= {{ uri: props.item.img }}
        className="w-36 h-44 mb-2 rounded-lg"
      />
      <Text>Kota {props.item.name}</Text>
      <Text className="text-xs font-extralight text-slate-400">{props.item.desc}</Text>
    </View>
  );
};

export default CardLarge;
