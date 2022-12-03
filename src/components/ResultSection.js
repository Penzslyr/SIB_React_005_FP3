import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardMedium from './CardMedium';
import { useSelector } from 'react-redux';
import axios from 'axios';


const ResultSection = ({ navigation }) => {
  const searchData = useSelector((state) => state.search);
  const [data, setData ] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location: searchData.location,
        checkin: searchData.checkIn,
        checkout: searchData.checkOut,
        adults: parseInt(searchData.adults),
        page: '1',
      },
      headers: {
        'X-RapidAPI-Key': '43f25ca292msh8580572cb9337a3p10e8cfjsn62a7d456ec79',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
      },
    };

    axios.request(options).then(function (response) {
      setData(response.data.results)
    }).catch(function (error) {
      console.error(error);
    });
  }, [searchData]);

  return (
    <View className='w-5/6 mx-auto mb-96'>
      <Text className='text-xl font-bold mb-2'>Search Result</Text>
      <View>
        { data && (data.map((item)=>(
              <CardMedium key={item.id} item={item}/>
            ))) }
      </View>
    </View>
  );
};

export default ResultSection;
