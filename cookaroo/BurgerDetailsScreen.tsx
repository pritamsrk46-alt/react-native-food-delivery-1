import { Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "./REDUX/CartSlice";

export type Restaurant = {
    id: number;
    image: string;
    categories: string;
    name: string;
    itemName: string;
    rating: number; 
    delivery: string;
    time: number;
};

const BurgerDetailsScreen = () => {
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const navigation = useNavigation<any>();


    const route = useRoute<any>();
    const { img, nm ,pri} = route.params;
    // console.log("ROUTE PARAMS ===>", route.params)
    const [data, setData] = useState<Restaurant | null>(null);
    const cartData = useSelector((state: any) => state.cart.cartData);
    const dispatch = useDispatch();
    const unitPrice = pri;
    // const count = cartData.length;
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        axios.get('')
            .then(function (response) {
                setData(response.data[0])
                console.log(response.data[0]);
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {

            });
    }, [])

    useEffect(() => {
        setCartCount(0);
        for (let i = 0; i < cartData?.length; i++) {
            if (cartData[i].id == data?.id) {
                setCartCount((prev) => prev + 1);
            }
        }
    }, [data, cartData]);

    const totalPrice = unitPrice * (cartCount === 0 ? 1 : cartCount || 1);

    return (
        <View style={{ flex: 1, width: "100%" }}>

            <View style={{ width: "90%", alignSelf: "center", marginTop: 20, flexDirection: "row", alignItems: "center" }}>

                <TouchableOpacity
                    style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: "#b5b2b2ff", justifyContent: 'center', alignItems: "center" }}
                    onPress={() => navigation.goBack("RestaurantDetailsPage")}
                >
                    <FontAwesome name="angle-left" size={40} color={"black"} />
                </TouchableOpacity>

                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 20 }}>Details</Text>
                </View>

            </View>

            <View style={{ height: 200, width: "90%", marginTop: 30, alignSelf: "center" }}>
                <Image
                    source={{ uri: img }}
                    style={{ height: 200, width: "100%" }}
                    resizeMode="cover"
                />
            </View>

            <View style={{ width: "90%", marginTop: 20, alignSelf: 'center', justifyContent: 'center' }}>

                <View style={{ width: "60%", flexDirection: "row", borderWidth: 1, borderColor: "#cfccccff", borderRadius: 50, justifyContent: "center", alignItems: 'center' }}>

                    <View style={{ width: "20%" }}>
                        <Feather name="coffee" size={25} color={"black"} />
                    </View>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text>Uttora coffee house</Text>
                    </View>

                </View>
            </View>

            <View style={{ width: "90%", marginTop: 16, alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {nm}
                </Text>

                <Text style={{ fontSize: 16, color: "rgba(177, 177, 176, 1)", marginTop: 8 }}>
                    Maecenas sed diam eget risus varius blandit sit amet non magno. integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </Text>
            </View>

            {data && (
                <View style={{ width: "90%", flexDirection: "row", marginTop: 10, alignSelf: "center" }}>

                    <View style={{ width: "8%", flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="star-o" size={25} color={"orange"} />
                    </View>

                    <View style={{ width: "15%", justifyContent: 'center', paddingLeft: 5 }}>
                        <Text>{data.rating}</Text>
                    </View>

                    <View style={{ width: "15%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><FontAwesome name="truck" size={25} color={"orange"} style={{ transform: [{ scaleX: -1 }] }} /></View>

                    <View style={{ width: "15%", justifyContent: 'center', alignItems: "center" }}>
                        <Text>{data.delivery}</Text>
                    </View>

                    <View style={{ width: "15%", height: 50, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}><Ionicons name="time-outline" size={25} color={"orange"} /></View>

                    <View style={{ width: "22%", flexDirection: "row", alignItems: "center", paddingLeft: 5 }}>
                        <Text style={{ paddingTop: 3 }}>{data.time}</Text>
                    </View>

                </View>
            )}


            <View
                style={{ width: "90%", alignSelf: "center", flexDirection: "row", gap: 10, marginTop: 15 }}>

                <View style={{ width: 80, justifyContent: "center", }}>
                    <Text style={{ fontSize: 20 }}>SIZE:</Text>
                </View>

                <TouchableOpacity
                    style={{ height: 50, width: 50, backgroundColor: click ? "orange" : "#dcd9d9ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}
                    onPress={() => setClick(!click)}
                >
                    <Text style={{ fontSize: 20 }}>10''</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 50, width: 50, backgroundColor: click2 ? "orange" : "#dcd9d9ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}
                    onPress={() => setClick2(!click2)}
                >
                    <Text style={{ fontSize: 20 }}>14''</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 50, width: 50, backgroundColor: click3 ? "orange" : "#dcd9d9ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}
                    onPress={() => setClick3(!click3)}
                >
                    <Text style={{ fontSize: 20 }}>16''</Text>
                </TouchableOpacity>

            </View>

            <View style={{ width: "90%", marginTop: 10, alignSelf: "center", flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ height: 60, width: 60, backgroundColor: "#fbc1c1ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="hdd-o" size={25} color={"red"} />
                </View>
                <View style={{ height: 60, width: 60, backgroundColor: "#fbc1c1ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="snowflake-o" size={25} color={"red"} />
                </View>
                <View style={{ height: 60, width: 60, backgroundColor: "#fbc1c1ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="wpexplorer" size={25} color={"red"} />
                </View>
                <View style={{ height: 60, width: 60, backgroundColor: "#fbc1c1ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="hourglass-o" size={25} color={"red"} />
                </View>
                <View style={{ height: 60, width: 60, backgroundColor: "#fbc1c1ff", borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="i-cursor" size={25} color={"red"} />
                </View>

            </View>

            <View style={{ flex: 1, width: "100%", backgroundColor: "powderblue", borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: 10, flexDirection: "row" }}>

                <View style={{ flex: 1, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 25 }}>{totalPrice}</Text>
                </View>
                <View style={{ flex: 1, width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ height: 50, width: "80%", backgroundColor: "black", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingHorizontal: 10, borderRadius: 30 }}>

                        <TouchableOpacity
                            onPress={() => data && dispatch(deleteCart(data))}
                            style={{ height: 30, width: 30, backgroundColor: "#848383ff", justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                            <FontAwesome name="minus" size={20} color={"white"} />
                        </TouchableOpacity>

                        <View style={{ height: 30, width: 30, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: "white" }}>{cartData?.length || 0}</Text>
                        </View>
{/* {
    console.log("???????????????",data)
} */}
                        <TouchableOpacity
                            onPress={() => dispatch(addCart({ ...data, image:img, unitPrice: unitPrice }))}
                            style={{ height: 30, width: 30, backgroundColor: "#848383ff", borderRadius: 20, justifyContent: "center", alignItems: "center" }}
                        >
                            <FontAwesome name="plus" size={20} color={"white"} />

                        </TouchableOpacity>

                    </View>
                </View>

            </View>

        </View>
    )
};

export default BurgerDetailsScreen;