import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Header = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ width: "90%", backgroundColor: "white", marginTop: 25, flexDirection: "row", alignSelf: "center" }}>

            <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center", backgroundColor: "#d1ccccff", borderRadius: 20, padding: 10 }}>

                <TouchableOpacity
                    onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <FontAwesome name="bars" size={25} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.5, paddingLeft: 10 }}>
                <Text style={{ color: "orange", fontWeight: "bold" }}>DELIVER TO</Text>
                <Text>Food Lab office</Text>
            </View>

            <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center", }}>
                <TouchableOpacity
                    style={{ height: 40, width: 40, borderRadius: 20 }}
                    onPress={()=>navigation.navigate("ProfileScreen")}
                    >
                    <Image
                        source={require("../cookaroo/user-male-circle--v2.jpg")}
                        resizeMode="cover"
                        style={{ height: 40, width: 40 }}
                    />
                </TouchableOpacity>

            </View>

            <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center", backgroundColor: "#d1ccccff", borderRadius: 20 }}>

                <TouchableOpacity
                onPress={()=>navigation.navigate("CartDetails")}
                >
                    <FontAwesome name="shopping-cart" size={30} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header;
