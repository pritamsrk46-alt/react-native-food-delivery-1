import { useNavigation } from "@react-navigation/native";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

type Restaurant = {
  id: number;
  image: string;
  categories: string;
  name: string;
  itemName: string;
  rating: number;
  delivery: string;
  time: number;
};




const RestaurantsItem = () => {

  const navigation = useNavigation();
  const [value, setValue] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/bc5238c9-24ef-4300-8ac2-e593573a4e6d')
      .then(function (response) {
        setValue(response.data)
        console.log(response);
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {

      });
  }, [])




  return (

    <>
      <ScrollView>
        {
          value.map((item: Restaurant, index: number) => (

            <View style={{ height: 350, width: "90%", marginTop: "10%", alignSelf: "center" }} key={index}>


              <TouchableOpacity
                onPress={() => navigation.navigate("RestaurantDetailsPage", { img: item.image, rat: item.rating, del: item.delivery, time: item.time, restaurantName: item.name })}
                style={{ height: 200, width: "100%", }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <View style={{ height: 150, width: "100%" }}>

                <View style={{ height: 50, width: "100%" }}>
                  <Text style={{ fontSize: 25 }}>{item.name}</Text>
                </View>

                <View style={{ height: 50, width: "100%" }}>
                  <Text>{item.categories}</Text>
                </View>

                <View style={{ height: 50, width: "100%", flexDirection: "row" }}>

                  <View style={{ height: 50, width: "20%", }}>
                    <Text>{item.rating}</Text>
                  </View>

                  <View style={{ height: 50, width: "20%", }}>
                    <Text>{item.delivery}</Text>
                  </View>

                  <View style={{ height: 50, width: "30%", flexDirection: "row" }}>
                    <View style={{ height: 50, width: "30%" }}><Ionicons name="time-outline" size={25} color={"black"} /></View>
                    <Text style={{ paddingTop: 3 }}>{item.time}</Text>
                  </View>

                </View>
              </View>

            </View>
          ))}
      </ScrollView>
    </>

  )
}

export default RestaurantsItem;