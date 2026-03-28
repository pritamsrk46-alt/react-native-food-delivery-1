import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
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

const { width, } = Dimensions.get("window");

function SignUpScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigation = useNavigation<any>();


  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('Sdata', jsonValue);
    } catch (e) {
      console.log("Storage Error:", e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Sdata');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Storage Error:", e);
      return [];
    }
  };

  const SignupPress = async () => {
    if (name.trim().length === 0) {
      Alert.alert("Please enter a valid name")
    } else if (email.trim().length === 0) {
      Alert.alert("Please enter a valid Email")
    } else if (password.trim().length === 0) {
      Alert.alert("Please enter a valid Password")
    } else if (confirmPassword.trim().length === 0) {
      Alert.alert("Password and confirmPassword does not match")
    } else if (password !== confirmPassword) {
      Alert.alert("password and confirm password should be match")
    } else {
      let a = await getData();
      let data = [...a ? a : [], {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }]
      console.log(">>>>>>>>>>>data", data)
      await storeData(data)
      Navigation.navigate("Login")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}
          onPress={() => SignupPress()}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },

  card: {
    width: width * 0.9,   // responsive width
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

});
