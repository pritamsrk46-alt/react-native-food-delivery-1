import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
    "https://picsum.photos/800/400",
    "https://picsum.photos/801/400",
    "https://picsum.photos/802/400",
];

export default function CarouselScreen() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                width={width}
                height={200}
                data={images}
                autoPlay={true}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    />
                )}
            />
            <View style={{ width: "90%", backgroundColor: "orange", justifyContent: "center", alignItems: "center", marginTop: 40, margin: "auto", borderRadius: 20 ,paddingVertical:10}}>
                <TouchableOpacity
                    style={{ backgroundColor: "orange" }}
                    onPress={() => Navigation.navigate("SignUpScreen")}
                >
                    <Text style={{color:"white",fontSize:18}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
