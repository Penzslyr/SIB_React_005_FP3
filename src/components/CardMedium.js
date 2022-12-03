import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { wishAdded } from "../reduxState/wishSlice";
import { useDispatch } from "react-redux";


const CardMedium = (props) => {
  const dispatch = useDispatch()
  const addWishList = (item) => {
    dispatch(wishAdded(item))
  }
  const navigate = useNavigation()
  return (
    <TouchableOpacity
      className="flex-row"
      onPress={() => navigate.navigate("DetailHotel", { item: props.item })}
    >
      <Image
        source= {{ uri: props.item.images[0] }}
        className="w-28 h-36 mb-4 rounded-lg"
      />
      <View className="my-auto ml-8">
        <Text>{props.item.name}</Text>
        <Text className="text-xs font-extralight text-slate-400">
        {props.item.address}
        </Text>
        <TouchableOpacity onPress={() => addWishList(props.item)}>
          <View className="bg-[#6E6BE8] rounded-xl w-20 mt-2 ">
            <Text className="text-white text-center">WishList</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardMedium;
