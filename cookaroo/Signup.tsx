import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

function SignUpScreen() {
    const Navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");




    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('SignupData', jsonValue);
        } catch (e) {
            Alert.alert("Error", "Failed to save data")
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


    const handleSignup = async () => {
        if (email.trim().length === 0) {
            Alert.alert("please put some data")
        } else if (password.trim().length === 0) {
            Alert.alert("enter password")
        } else if (confirmPassword.trim().length === 0) {
            Alert.alert("enter re-type password")
        } else if (password !== confirmPassword) {
            Alert.alert("password and confirm password does not match")
        } else {
            let a = await getData();
            let data = [...a ? a : [], {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,

            }]
            console.log('>>>>>.data', data)
            await storeData(data)
            Navigation.navigate("LoginScreen")
        }

    }


    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#f5f5f5" }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 30, textAlign: "center", }}>Sign Up</Text>
            <Text style={{ fontSize: 14, color: "#555", textAlign: "center", marginBottom: 20, }}>Please sign up to get started</Text>

            <TextInput
                style={{ height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: "#ddd", }}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={{ height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: "#ddd", }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={{ height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: "#ddd", }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TextInput
                style={{
                    height: 50, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1,
                    borderColor: "#ddd",
                }}
                placeholder="Re-type Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity style={{ backgroundColor: "#ff7f00", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 10, }}
                onPress={() => handleSignup()}
            >
                <Text style={{ backgroundColor: "#ff7f00", alignItems: "center", marginTop: 10, }}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
}


export default SignUpScreen;