// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const MyProfile = () => {
    const [txt, setTxt] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const Navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, width: "100%", }}>

            <View style={{ width: "90%", alignSelf: "center", marginTop: 15, flexDirection: "row", }}>

                <TouchableOpacity
                    onPress={() => Navigation.goBack()}
                    style={{ height: 60, width: 60, justifyContent: "center", alignItems: "center", borderRadius: 30, backgroundColor: "#c2c0c0ff" }}>
                    <FontAwesome name="angle-left" size={35} color={"black"} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 25 }}>Edit Profile</Text>
                </View>
            </View>

            <View style={{ height: 130, width: 130, alignSelf: "center", justifyContent: "center", alignItems: "center", overflow: "visible", position: "relative" }}>
                <View style={{ height: 120, width: 120, borderRadius: 60, backgroundColor: "#fcafafff", overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require("../cookaroo/145867-removebg-preview.png")}
                        style={{ height: 120, width: 120, }}
                        resizeMode="cover"
                    />
                </View>


                <View style={{ height: 46, width: 46, backgroundColor: "orange", position: "absolute", borderRadius: 23, bottom: 0, right: 0, elevation: 6, justifyContent: "center", alignItems: "center" }}>
                    <FontAwesome name="pencil" size={25} color={"white"} />
                </View>
            </View>


            <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
                <View style={{ width: "100%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }}>Full Name</Text>
                </View>

                <View style={{ width: "100%", backgroundColor: "#dcd9d9ff", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <TextInput
                        value={txt}
                        placeholder="Pritam Sharma"
                        onChangeText={setTxt}
                    />
                </View>
            </View>


            <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
                <View style={{ width: "100%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }}>Email</Text>
                </View>

                <View style={{ width: "100%", backgroundColor: "#dcd9d9ff", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <TextInput
                        value={email}
                        placeholder="Pritamsharma@gmail.com"
                        onChangeText={setEmail}
                    />
                </View>
            </View>


            <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
                <View style={{ width: "100%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }}>Phone Number</Text>
                </View>

                <View style={{ width: "100%", backgroundColor: "#dcd9d9ff", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <TextInput
                        value={phone}
                        placeholder="408-841-0926"
                        onChangeText={setPhone}
                    />
                </View>
            </View>


            <View style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
                <View style={{ width: "100%", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }}>Bio</Text>
                </View>

                <View style={{ width: "100%", backgroundColor: "#dcd9d9ff", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 30 }}>
                    <TextInput
                        value={bio}
                        placeholder="I love fast food"
                        onChangeText={setBio}
                    />
                </View>
            </View>

            <View style={{ width: "90%", backgroundColor: "orange", alignSelf: "center", marginTop: 15, borderRadius: 15, justifyContent: "center", alignItems: "center", paddingVertical: 15 }}>
                <Text style={{ fontSize: 20, color: "white" }}>Save</Text>
            </View>

        </View>

    )
};

export default MyProfile;