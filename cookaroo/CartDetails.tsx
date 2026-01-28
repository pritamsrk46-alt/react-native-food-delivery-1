import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {useSelector } from "react-redux";


type Product = {
    id: number;
    name: string;
    categories: string;
    rating: number;
    delivery: string;
    time: string;
    image: string;
    unitPrice: number;
};

type GroupedProduct = {
    id: number;
    name: string;
    categories: string;
    rating: number;
    delivery: string;
    time: string;
    image: string;
    totalPrice: number;
    productCount: number;
};




const CartDetails = () => {
    const [input, setInput] = useState<any>("");
    const Navigation = useNavigation<any>();
    const cartData = useSelector((state: any) => state.cart.cartData);
    // console.log(">>>>>>>>>ffffffffff>>>>>>>>", cartData)
    const [tempCartData, setTempCartData] = useState<GroupedProduct[]>([])
    const groupProducts = (data: Product[]): GroupedProduct[] => {
        const map: Record<number, GroupedProduct> = {};

        data.forEach((item) => {
            if (!map[item.id]) {
                map[item.id] = {
                    id: item.id,
                    name: item.name,
                    categories: item.categories,
                    rating: item.rating,
                    delivery: item.delivery,
                    time: item.time,
                    image: item.image,
                    totalPrice: item.unitPrice,
                    productCount: 1,
                };
            } else {
                map[item.id].totalPrice += item.unitPrice;
                map[item.id].productCount += 1;
            }
        });

        return Object.values(map);
    };

    useEffect(() => {
        setTempCartData(groupProducts(cartData))
    }, [cartData, setTempCartData])

    const finalPrice = tempCartData.reduce(
        (sum, item) => sum + item.totalPrice, 0);

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView>

                <View style={{ width: "90%", alignSelf: "center", marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <TouchableOpacity
                        style={{ height: 50, width: 50, backgroundColor: "grey", borderRadius: 30, justifyContent: "center", alignItems: "center" }}
                        onPress={() => Navigation.goBack()}
                    >
                        <FontAwesome name="angle-left" size={30} color={"white"} />
                    </TouchableOpacity>

                    <View
                        style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, paddingHorizontal: 15, color: "white" }}>Cart</Text>
                    </View>

                    <TouchableOpacity
                        style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                        onPress={() => Navigation.navigate("HomepageScreen")}
                    >
                        <Text style={{ color: "green", fontSize: 20, textDecorationLine: "underline", textDecorationColor: "green" }}>Done</Text>
                    </TouchableOpacity>
                </View>

                {tempCartData?.map((item: GroupedProduct, index: number) => (
                    <View style={{ height: 150, width: "90%", alignSelf: "center", flexDirection: "row", marginTop: 15 }} key={index}>

                        <View style={{ flex: 1, width: "50%", justifyContent: "center", alignItems: "center" }}>
                            <Image source={{ uri: item?.image }} style={{ height: 135, width: 135, backgroundColor: "powderblue", borderRadius: 25 }} />
                        </View>
                        <View style={{ flex: 1, width: "50%", }}>

                            <View style={{ flex: 0.3, width: "100%", }}>
                                <Text style={{ color: "white" }}>{item?.name}</Text>
                                <Text style={{ color: "white" }}>{item?.categories}</Text>
                            </View>
                            <View style={{ flex: 0.3, width: "100%", justifyContent: "center", }}>
                                <Text style={{ color: "white" }}>${item?.totalPrice}</Text>
                            </View>
                            <View style={{ flex: 0.4, width: "100%", flexDirection: "row", }}>

                                <View style={{ flex: 0.2, justifyContent: "center" }}>
                                    <Text style={{ color: "white" }}>14''</Text>
                                </View>
                                <View style={{ flex: 0.8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                                    <TouchableOpacity 
                                    style={{ height: 35, width: 35, backgroundColor: "#9e9d9dff", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                                    // onPress={()=>dispatch(deleteCart(item))}
                                    >
                                        <FontAwesome name="minus" size={20} color={"white"} />
                                    </TouchableOpacity>
                                    <View style={{ height: 35, width: 35, borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 20, color: "white" }}>2</Text>
                                    </View>
                                    <TouchableOpacity 
                                    style={{ height: 35, width: 35, backgroundColor: "#9e9d9dff", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                                    // onPress={()=>dispatch(addCart(item))}
                                    >
                                        <FontAwesome name="plus" size={20} color={"white"} />
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>

                    </View>

                ))}

            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "white", alignSelf: "center", alignItems: "flex-end", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <View style={{ height: 50, width: "90%", alignSelf: "center", marginTop: 20, flexDirection: "row", }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, color: "#b7b7b7ff" }}>DELIVERY ADDRESS</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 20, textDecorationLine: "underline", color: "orange" }}>EDIT</Text>
                    </View>
                </View>

                <View style={{ height: 50, width: "90%", backgroundColor: "#e8f1f5ff", alignSelf: "center", borderRadius: 10, paddingHorizontal: 10, justifyContent: "center", }}>
                    <TextInput
                        value={input}
                        placeholder="2118 Thornridge Cir.Syracuse"
                        onChangeText={setInput}
                    />
                </View>

                <View style={{ width: "90%", alignSelf: "center", flexDirection: "row" }}>

                    <View style={{ height: 50, width: "50%", justifyContent: "center", }}>
                        <Text>TOTAL:<Text style={{ fontSize: 22, }}>${finalPrice}</Text></Text>
                    </View>
                    <View style={{ height: 50, width: "45%", justifyContent: "center", alignItems: "flex-end" }}>
                        <Text>Breakdown</Text>
                    </View>

                    <View style={{ height: 50, width: "5%", justifyContent: "center", alignItems: "flex-end" }}>
                        <FontAwesome name="angle-right" size={20} color={"black"} />
                    </View>

                </View>

                <TouchableOpacity 
                style={{ paddingVertical: 10, width: '90%', backgroundColor: "orange", alignSelf: "center", justifyContent: "center", alignItems: "center" }}
                onPress={() =>Navigation.navigate("Orders")}
                >
                    <Text style={{ color: "white", fontSize: 22 }}>PLACE ORDER</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

export default CartDetails;