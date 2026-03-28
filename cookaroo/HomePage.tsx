import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "./Header";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { ScrollView } from "react-native";
import ScrollItem, { ScrollItemProps } from "../cookaroo/Scroll";
import RestaurantsItem from "../cookaroo/RestaurantsItem";
import { useNavigation } from "@react-navigation/native";

const data: ScrollItemProps[] = [
    {
        icon: "fire",
        iconName: "All",
        bgColor: "#f3c57bff"
    },
    {
        icon: "apple",
        iconName: "apple",
        bgColor: "#fff"
    },
    {
        icon: "fire",
        iconName: "fire",
        bgColor: "#fff"
    },

    {
        icon: "coffee",
        iconName: "coffee",
        bgColor: "#fff"
    },
    {
        icon: "bitbucket",
        iconName: "bitbucket",
        bgColor: "#fff"
    },
    {
        icon: "beer",
        iconName: "beer",
        bgColor: "#fff"
    },
]

const HomepageScreen = () => {

    const [search, setSearch] = useState("");
    const Navigation = useNavigation<any>();
    return (

        <ScrollView>

            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Header />

                <View style={{ width: "90%", justifyContent: "center", alignSelf: "center", marginTop: "5%" }}>
                    <Text style={{ fontSize: 20 }}>Hey Food,<Text style={{ fontWeight: "bold" }}>Good Afternoon</Text></Text>
                </View>

                <View style={{ width: "90%", backgroundColor: "#ddd9d9ff", justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: "10%", borderRadius: 15, flexDirection: "row" }}>

                    <View style={{ flex: 0.1, width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                        <FontAwesome name="search" size={25} color={"black"} />

                    </View>

                    <View style={{ flex: 0.9, width: "90%", justifyContent: "center", flexDirection: "column" }}>

                        <TextInput
                            value={search}
                            placeholder="Search dishes, restaurants"
                            onChangeText={setSearch}
                        />

                    </View>

                </View>


                <View style={{ width: "90%", marginTop: "5%", alignSelf: "center", flexDirection: "row" }}>

                    <View style={{ width: "70%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 25 }}>All Categorie</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Navigation.navigate("ListDetails")}
                        style={{ width: "20%", paddingTop: 5, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>See All</Text>
                    </TouchableOpacity>

                    <View style={{ width: "10%", justifyContent: "center", paddingTop: 6 }}>

                        <FontAwesome name="chevron-right" size={22} color={"grey"} />
                    </View>
                </View>

                <View style={{ marginTop: "7%" }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            {
                                data.map((item: ScrollItemProps, index: number) => (
                                    <ScrollItem
                                        icon={item.icon}
                                        iconName={item.iconName}
                                        bgColor={item.bgColor}
                                        key={index}
                                    />
                                ))
                            }

                        </View>


                    </ScrollView>
                </View>

                <View style={{ width: "90%", marginTop: "10%", alignSelf: "center", flexDirection: "row" }}>

                    <View style={{ width: "70%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 25 }}>Open Restaurants</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Navigation.navigate("RestaurantsItem")}
                        style={{ width: "20%", paddingTop: 5, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>See All</Text>
                    </TouchableOpacity>

                    <View style={{ width: "10%", justifyContent: "center", paddingTop: 6 }}>

                        <FontAwesome name="chevron-right" size={22} color={"grey"} />
                    </View>

                </View>


                <RestaurantsItem />

            </View>
        </ScrollView>
    )
}

export default HomepageScreen;