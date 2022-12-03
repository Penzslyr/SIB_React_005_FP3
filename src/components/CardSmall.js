import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const CardSmall = (props) => {
  const navigate = useNavigation()
  return (
    <TouchableOpacity
      className="flex-row"
      onPress={() => navigate.navigate("DetailHotel", { item: props.item })}
    >
    <View className="flex flex-row border-solid border-2 border-slate-200 p-4 rounded-3xl rounded-tl-none mb-6">
      <Image
        source= {{ uri: props.item.images[0] }}
        className="w-20 h-20 rounded-lg rounded-tl-none"
      />
      <View className="mx-2 px-2">
        <Text className="font-medium pb-2">{props.item.name}</Text>
        <Text className="font-thin text-xs text-slate-500 w-5/6">
        {props.item.address}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default CardSmall;
