
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type foodDetails = {
    id: number;
    name: string;
    restaurant: string;
    price: number;
    image: string;
};

const FoodDAtaScroll = () => {

    const navigation = useNavigation();
    const [val, setVal] = useState<foodDetails[]>([]);

    useEffect(() => {
        axios
            .get("https://mocki.io/v1/2d4e00f7-5b25-414b-95da-ac0cdc52cb65")
            .then(res => setVal(res.data))
            .catch(err => console.log(err));
    }, []);

   

    return (
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}>
            {val.map((item, index) => (

                <View key={index} style={{ width: "50%", padding: 8, }}>

                    {/* CARD */}
                    <View style={{ borderRadius: 16, padding: 8, }}>

                        {/* IMAGE */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BurgerDetailsScreen", { img: item.image,nm:item.name,pri:item.price })}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ height: 120, width: "100%", borderRadius: 12, }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>

                        {/* TEXT */}
                        <Text style={{ marginTop: 6, fontWeight: "bold" }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: "#333" }}>
                            {/* {item.restaurant} */}
                            Burger King
                        </Text>

                        {/* PRICE + PLUS */}
                        <View
                            style={{
                                flexDirection: "row", alignItems: "center", marginTop: 6,
                            }}>

                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                ${item.price}
                            </Text>

                            <View style={{ flex: 1 }} />

                            <View
                                style={{ height: 36, width: 36, backgroundColor: "orange", borderRadius: 18, justifyContent: "center", alignItems: "center", }}>

                                <Feather name="plus" size={20} color="white" />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default FoodDAtaScroll;