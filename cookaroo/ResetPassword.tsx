import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";

const ResetPassword = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const route = useRoute();
    const { dataIndex } = route.params

    const resetPassword = async () => {
        if (password.trim().length === 0) {
            Alert.alert("please enter new password")
            return;
        } else if (confirmPassword.trim().length === 0) {
            Alert.alert("please enter confirm new password")
            return;
        } else if (password !== confirmPassword) {
            Alert.alert("password and confirm password do not match")
            return;
        } else {

            let resetData = await getData();
            resetData[dataIndex].password = password;
            resetData[dataIndex].confirmPassword = password;
            await storeData(resetData);
            Alert.alert("Success", "Password reset successfully");

            navigation.navigate("LoginScreen")//dispatch korte hobe

        }
    }


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



    return (
        <View style={{ flex: 1, backgroundColor: "#c9c7c7ff" }}>

            <View style={{ flex: 0.3, backgroundColor: "rgba(37, 30, 96, 1)", height: 70, width: "100%" }}></View>


            <View style={{ flex: 0.4, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderTopRightRadius: 40, borderTopLeftRadius: 40, marginTop: -25, rowGap: 30 }}>

                <TextInput
                    style={{ width: "50%", borderWidth: 1, borderColor: "black", borderRadius: 10, padding: 20 }}
                    value={password}
                    placeholder="Password"
                    onChangeText={setPassword}
                />

                <TextInput
                    style={{ width: "50%", borderWidth: 1, borderColor: "black", borderRadius: 10, padding: 20 }}
                    value={confirmPassword}
                    placeholder="confirm Password"
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity
                    style={{ width: "30%", backgroundColor: "orange", justifyContent: "center", alignItems: "center", padding: 10, borderRadius: 20 }}
                    onPress={resetPassword}
                >
                    <Text>Reset Password</Text>
                </TouchableOpacity>
            </View>







        </View>

    )
}

export default ResetPassword;  
