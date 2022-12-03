import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CardMedium from "./CardMedium";
import axios from "axios";

const PopularSection = () => {
  const [data, setData ] = useState(null)
    const checkin = new Date()
    const checkout = new Date();
    checkout.setDate(checkout.getDate() + 1);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location: 'Jakarta',
        checkin: checkin.toISOString().slice(0, 10),
        checkout: checkout.toISOString().slice(0, 10),
        adults: '2',
        page: '1',
      },
      headers: {
        'X-RapidAPI-Key': '43f25ca292msh8580572cb9337a3p10e8cfjsn62a7d456ec79',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
      },
    };

    axios.request(options).then(function (response) {
      setData(response.data.results.slice(0,5))
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  return (
    <View className="w-5/6 mx-auto mb-96">
      <Text className="text-xl font-bold mb-2">Popular Hotels</Text>
      <View>
      { data && (data.map((item)=>(
              <CardMedium key={item.id} item={item}/>
            ))) }
      </View>
    </View>
  );
};

export default PopularSection;
