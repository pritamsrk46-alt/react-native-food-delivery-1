import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";


export default function ForgotPasswordScreen() {

    const Navigation = useNavigation();
    const [email, setEmail] = useState("");
    const route = useRoute();
    console.log("route", route)



    const handleSendOTP = async () => {
        if (email.trim().length === 0) {
            Alert.alert("enter your email")

        } else {
            const resetData = await getData();
            console.log("resetData",resetData)
            for (let i = 0; i < resetData?.length; i++) {
                if (resetData[i].email == email) {
                    Navigation.navigate("OtpScreen", { id: "1234", dataIndex:i });//i means array of object er index jache
                    break;
                }
            }
        }

        // const generateOTP = Math.floor(100000 + Math.random() * 900000).toString();
        // console.log("generateOTP", generateOTP);

    }


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('SignupData');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            Alert.alert("Error", "Failed to save data")
        }
    };


    return (
        <View style={styles.container}>

            {/*header*/}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    {/* <Ionicons name="arrow-back" size={26} color="#fff" /> */}
                </TouchableOpacity>

                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>
                    Please sign in to your existing account
                </Text>
            </View>

            {/* White Card Box */}
            <View style={styles.card}>
                <Text style={styles.label}>EMAIL</Text>

                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={styles.button}
                    onPress={handleSendOTP}
                >
                    <Text style={styles.buttonText}>SEND CODE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
    },

    header: {
        padding: 20,
        paddingTop: 40,
    },

    title: {
        fontSize: 26,
        fontWeight: "800",
        color: "#fff",
        marginTop: 20,
    },

    subtitle: {
        fontSize: 14,
        color: "#d1d5db",
        marginTop: 5,
    },

    card: {
        backgroundColor: "#fff",
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        elevation: 4,
    },

    label: {
        fontSize: 12,
        fontWeight: "700",
        color: "#6b7280",
        marginBottom: 6,
    },

    input: {
        backgroundColor: "#f3f4f6",
        padding: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 25,
    },

    button: {
        backgroundColor: "#FF7A00",
        padding: 16,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});
