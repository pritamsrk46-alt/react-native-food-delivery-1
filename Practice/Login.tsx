import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    Alert
} from "react-native";



const { width } = Dimensions.get("window");

function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<any>();

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Sdata');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("Storage Error:", e);
            return [];
        }
    };


    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('LoginData', jsonValue);
        } catch (e) {
            console.log("Storage Error:", e);
            Alert.alert("Error", "Failed to save data");

        }
    };

    const Slogin = async () => {
        if (email.trim().length === 0) {
            Alert.alert("enter your valid email")
        } else if (password.trim().length === 0) {
            Alert.alert("enter valid password")
        } else {
            const data = await getData();
            let dataCount = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email && data[i].password === password) {
                    await storeData(data[i])
                    dataCount++;
                    break;
                }
            }

            if (dataCount > 0) {
                navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Simple" }] }))
            } else {
                Alert.alert("user not found")
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>Go back</Text>
            </TouchableOpacity>

            <View style={styles.card}>

                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => Slogin()}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={styles.linkText}>
                        Don’t have an account? Sign Up
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: 20,
    },

    card: {
        width: width * 0.9,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        elevation: 5,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginBottom: 20,
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },

    button: {
        backgroundColor: "#ff7f00",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    linkText: {
        textAlign: "center",
        marginTop: 15,
        color: "#ff7f00",
        fontSize: 14,
    }

});
