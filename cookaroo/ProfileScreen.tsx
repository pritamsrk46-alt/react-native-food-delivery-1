import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons"

const ProfileScreen = () => {
    const Navigation = useNavigation<any>();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white", width: "100%" }}>

            <View style={{ width: "90%", flexDirection: "row", justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 20 }}>

                <TouchableOpacity
                    onPress={() => Navigation.goBack()}
                    style={{ height: 55, width: 55, backgroundColor: "rgba(215, 215, 215, 1)", borderRadius: 30, justifyContent: "center", alignItems: "center" }}
                >
                    <FontAwesome name="angle-left" size={30} color={"black"} />
                </TouchableOpacity>

                <View style={{ height: 60, flex: 1, justifyContent: "center", paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Profile</Text>
                </View>

            </View>

            <View style={{ width: "90%", alignSelf: "center", flexDirection: "row", marginTop: 10 }}>

                <View style={{ height: 100, width: 100, backgroundColor: "#f6c4c4ff", borderRadius: 50, justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                    <Image
                        source={require("../cookaroo/145867-removebg-preview.png")}
                        style={{ height: 100, width: 100 }}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ flex: 1, width: 100, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pritam Sharma</Text>
                    <Text style={{ color: "rgba(145, 145, 144, 1)" }}>I love fast food</Text>
                </View>
            </View>


            <View style={{ backgroundColor: "#f0f0f0ff", height: 140, width: "90%", alignSelf: "center", marginTop: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff" }}>
                        <Image
                            source={require("../cookaroo/user-man-account-profile-human-member-icon-symbol-sign-free-vector-removebg-preview.png")}
                            style={{ height: 50, width: 50, tintColor: "orange", }}
                        />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Personal Info</Text>
                    </View>
                    <TouchableOpacity
                        style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}
                        onPress={() => Navigation.navigate("MyProfile")}
                    >
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, width: "100%" }}>

                    <View style={{ flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 10 }}>
                        <View style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", paddingVertical: 10, }}>
                            <FontAwesome name="address-card-o" size={25} color={"orange"} />
                        </View>
                        <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20 }}>Address</Text>
                        </View>
                        <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                            <FontAwesome name="angle-right" size={30} color={"black"} />
                        </View>
                    </View>
                </View>

            </View>




            <View style={{ backgroundColor: "#f0f0f0ff", height: 270, width: "90%", alignSelf: "center", marginTop: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome name="shopping-bag" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Cart</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>

                <View style={{ flex: 1, width: "100%" }}>

                    <View style={{ flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 10 }}>
                        <View style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", paddingVertical: 10, }}>
                            <FontAwesome name="heart-o" size={25} color={"orange"} />
                        </View>
                        <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20 }}>Favourite</Text>
                        </View>
                        <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                            <FontAwesome name="angle-right" size={30} color={"black"} />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="bell-o" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Notifications</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="list-alt" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Payment Method</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>

            </View>





            <View style={{ backgroundColor: "#f0f0f0ff", height: 210, width: "90%", alignSelf: "center", marginTop: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="question-circle" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>FAQs</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>

                <View style={{ flex: 1, width: "100%" }}>

                    <View style={{ flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 10 }}>
                        <View style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", paddingVertical: 10, }}>
                            <FontAwesome name="address-card-o" size={25} color={"orange"} />
                        </View>
                        <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20 }}>User Reviews</Text>
                        </View>
                        <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                            <FontAwesome name="angle-right" size={30} color={"black"} />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome name="star-o" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Settings</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>


            </View>


            <View style={{ backgroundColor: "#f0f0f0ff", height: 80, width: "90%", alignSelf: "center", marginTop: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingLeft: 10, justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="log-out-outline" size={25} color={"orange"} />
                    </View>
                    <View style={{ height: 50, width: "55%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20 }}>Log Out</Text>
                    </View>
                    <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <FontAwesome name="angle-right" size={30} color={"black"} />
                    </View>
                </View>

            </View>







        </ScrollView>
    )
}

export default ProfileScreen;