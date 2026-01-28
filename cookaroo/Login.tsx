import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
    const Navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    

    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('userLoginData', jsonValue);
        } catch (e) {
            Alert.alert("Error", "Failed to save data");

        }
    };



    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('SignupData');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            Alert.alert("Error", "Failed to save data")
        }
    };


    const onSignin = async () => {
        if (email.trim().length === 0) {
            Alert.alert("enter your email")
        } else if (password.trim().length === 0) {
            Alert.alert("enter your password")
        } else {
            const data = await getData();
            let dataCount = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email && data[i].password == password) {
                    // console.log("data", data[i])
                    await storeData(data[i])
                    dataCount++;
                    break;
                }

            }
            if (dataCount > 0) {
                Navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "HomepageScreen" }] }))
            } else {
                Alert.alert("user not found")
            }
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2", padding: 20, justifyContent: "center", }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center", color: "#333", }}>Welcome Back</Text>
            <Text style={{ fontSize: 16, marginBottom: 30, textAlign: "center", color: "#666", }}>Sign in to continue</Text>

            <TextInput
                style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: "#ddd", }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: "#ddd", }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={{ backgroundColor: "#FF6B00", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10, }} onPress={() => onSignin()}>
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", }}>Log In</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => Navigation.navigate("SignUpScreen")}
                >
                    <Text style={{ color: "#FF6B00", fontWeight: "bold", }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ height: 30, width: "100%", backgroundColor: "orange", marginTop: 20, justifyContent: "center", alignItems: "center", borderRadius: 20 }}
                onPress={() => Navigation.navigate("ForgotPasswordScreen")}
            >
                <Text>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    );
}




export default LoginScreen;