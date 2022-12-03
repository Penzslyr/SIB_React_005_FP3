import { View, Text, ScrollView } from "react-native";
import React from "react";
import CardLarge from "./CardLarge";



const TopSection = () => {
  const dataTemp = [
    {
      id: 0,
      name: 'Jakarta',
      desc: "Lorem Ipsum",
      img: 'https://th.bing.com/th/id/R.9c01c2a8b6aff74b6d5d0cfdbcc94b23?rik=1WajfMHSXWPqag&riu=http%3a%2f%2fwww.travelmarbles.com%2fwp-content%2fuploads%2f2018%2f07%2fjakarta-16.jpg&ehk=a%2f%2bEoeZ2D3R%2fbi3AqfwsAYcCMYhECF%2brOgV%2fwI6WXAU%3d&risl=&pid=ImgRaw&r=0'
    },
    { id: 1,
      name: 'Bandung',
      desc: "Lorem Ipsum",
      img: 'https://epicentrum.co.id/images/post/799682906642.jpg'
    },
    { id: 2,
      name: 'Yogyakarta',
      desc: "Lorem Ipsum",
      img: 'https://www.tripsavvy.com/thmb/VptIDd87SKdR78PUfCzMsx6GMSY=/2121x1414/filters:fill(auto,1)/GettyImages-700713456-5ab0e1298023b90036dbab7e.jpg'
    }
    ,
    { id: 3,
      name: 'Surabaya',
      desc: "Lorem Ipsum",
      img: 'https://th.bing.com/th/id/OIP.BzUA9stjk0d3FSzP3jIPLwHaEb?pid=ImgDet&rs=1'
    }
  ]
  return (
    <View className="w-5/6 mx-auto mb-5">
      <Text className="text-xl font-bold mb-2">Top Destinations</Text>
      <ScrollView horizontal={true}>
        {dataTemp && dataTemp.map((item)=>(
          <CardLarge key={item.id}  item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopSection;
