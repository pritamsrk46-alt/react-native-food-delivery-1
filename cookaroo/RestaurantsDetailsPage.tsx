import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import FoodItemScrool, { itemProps } from "../cookaroo/FoodItemScroll";
import FoodDAtaScroll from "./FoodDataScroll";
import { useEffect, useState } from "react";
import axios from "axios";

const FoodData: itemProps[] = [
    {
        txt: "Burger"
    },
    {
        txt: "Sandwitch"
    },
    {
        txt: "Noodles"
    },
    {
        txt: "Biriyani"
    },
    {
        txt: "Roll"
    },
    {
        txt: "Rice"
    },
    {
        txt: "Pizza"
    },
    {
        txt: "Pasta"
    },
]


type foodDetails = {
    id: number,
    name: string,
    restaurant: string,
    price: number,
    image: string
}



const RestaurantDetailsPage = () => {

    const Navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { img, del, time, rat, restaurantName } = route.params;
    const [val, setVal] = useState<foodDetails[]>([]);
    // console.log("val>>>>>",val)

    useEffect(() => {
        axios.get('https://mocki.io/v1/65a814d5-4c77-4276-82a8-ef44adad3583')
            .then(function (response) {
                setVal(response.data)
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {

            });
    }, [])

    return (
        <ScrollView>
            <View style={{ backgroundColor: "#fbf6f6ff", marginTop: 24 }}>
                <View style={{ height: 250, width: "90%", alignSelf: "center" }}>
                    <Image
                        source={{ uri: img }}
                        style={{ height: "100%", width: "100%", borderRadius: 30 }}
                        resizeMode="cover"
                    />

                    <View
                        style={{ position: "absolute", marginTop: 40, height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, }}>

                        <TouchableOpacity
                            style={{ width: "15%", backgroundColor: "#fff", justifyContent: 'center', alignItems: "center", borderRadius: 50 }}
                            onPress={() => Navigation.goBack("HomepageScreen")}
                        >
                            <FontAwesome name="angle-left" size={30} color={"black"} />
                        </TouchableOpacity>

                    </View>


                </View>


                <View style={{ width: "90%", flexDirection: "row", alignSelf: "center", marginTop: 20 }}>

                    <View style={{ width: "15%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><FontAwesome name="star-o" size={25} color={"orange"} /></View>

                    <View style={{ width: "15%", justifyContent: 'center', paddingLeft: 8 }}>
                        <Text>{rat}</Text>
                    </View>

                    <View style={{ width: "15%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><FontAwesome name="truck" size={25} color={"orange"} style={{ transform: [{ scaleX: -1 }] }} /></View>

                    <View style={{ width: "15%", justifyContent: 'center', alignItems: "center" }}>
                        <Text>{del}</Text>
                    </View>

                    <View style={{ width: "15%", height: 50, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Ionicons name="time-outline" size={25} color={"orange"} /></View>

                    <View style={{ width: "15%", flexDirection: "row", justifyContent: 'center', alignItems: "center", }}>
                        <Text style={{ paddingTop: 3 }}>{time}</Text>
                    </View>

                </View>

                <View style={{ width: "90%", marginTop: 16, alignSelf: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {restaurantName}
                    </Text>

                    <Text style={{ fontSize: 16, color: "rgba(177, 177, 176, 1)", marginTop: 8 }}>
                        Maecenas sed diam eget risus varius blandit sit amet non magno. integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </Text>
                </View>



                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 12 }}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    {FoodData.map((item, index) => (
                        <FoodItemScrool
                            key={index}
                            txt={item.txt} />
                    ))}
                </ScrollView>

                <View style={{ height: 50, width: "90%", alignSelf: "center", marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Burger (10)</Text>
                </View>

                <FoodDAtaScroll />

            </View>
        </ScrollView>
    )
}

export default RestaurantDetailsPage;