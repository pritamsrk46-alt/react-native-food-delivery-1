import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";

const OtpScreen = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
    const [timer, setTimer] = useState(60);

    const box1 = useRef<any>(null);
    const box2 = useRef<any>(null);
    const box3 = useRef<any>(null);
    const box4 = useRef<any>(null);

    const navigation = useNavigation();


    useEffect(() => {
        // setTimer(60); // Screen load hote hi timer reset
        let interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval); // Timer 0 pe stop ho jaye
                    return 0;
                }
                return prev - 1; // Har second timer 1 se decrement
            });
        }, 1000);

        return () => clearInterval(interval); // Screen close hone par interval cleanup
    }, []);


    const route = useRoute();
    const { id, dataIndex } = route.params
    console.log("params", id)

    const verifyOTP = () => {
        const otp = first + second + third + fourth;

        if (otp !== id.toString()) {
            Alert.alert("Enter a valid OTP");
        } else {
            navigation.navigate("ResetPassword",{ dataIndex:dataIndex});
        }

    }



    return (
        <View style={{ flex: 1, backgroundColor: "grey", }}>


            <View style={{ flex: 0.4, backgroundColor: "#0e0222ff", width: "100%", justifyContent: "center", alignItems: "center" }}>

                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>Verification</Text>
                <Text style={{ color: "white", paddingTop: 10 }}>We have sent a code to your email </Text>
                <Text style={{ color: "white" }}>example@gmail.com</Text>

            </View>

            <View style={{ flex: 0.3, backgroundColor: "#fff", width: "100%", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, }}>
                <View style={{ marginTop: 20, height: 20, width: "100%", flexDirection: "row" }}>

                    <View style={{ height: 20, width: "50%", paddingLeft: 10 }}>
                        <Text>CODE</Text>
                    </View>
                    <View style={{ height: 20, width: "50%", alignItems: 'flex-end', paddingRight: 10 }}>
                        <Text>Resend in {timer}</Text>
                    </View>
                </View>

                <View style={{ width: "100%", marginTop: 50, flexDirection: "row", justifyContent: "space-evenly", }}>

                    <TextInput
                        style={{ height: 60, width: "15%", backgroundColor: "#c5c4c4ff", textAlign: "center" }}
                        ref={box1}
                        value={first}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={txt => {
                            setFirst(txt);
                            if (txt.length >= 1) box2.current.focus();
                        }}
                    />

                    <TextInput
                        style={{ height: 60, width: "15%", backgroundColor: "#c5c4c4ff", textAlign: "center" }}
                        ref={box2}
                        value={second}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={txt => {
                            setSecond(txt);
                            if (txt.length >= 1) box3.current.focus();
                        }}
                    />

                    <TextInput
                        style={{ height: 60, width: "15%", backgroundColor: "#c5c4c4ff", textAlign: "center" }}
                        ref={box3}
                        value={third}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={txt => {
                            setThird(txt);
                            if (txt.length >= 1) box4.current.focus();
                        }}
                    />

                    <TextInput
                        style={{ height: 60, width: "15%", backgroundColor: "#c5c4c4ff", textAlign: "center" }}
                        ref={box4}
                        value={fourth}
                        keyboardType="number-pad"
                        maxLength={1}
                        onChangeText={setFourth}
                    />


                </View>



                <View style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}>

                    <TouchableOpacity
                        onPress={verifyOTP}
                        style={{ width: "60%", backgroundColor: "orange", borderRadius: 20, justifyContent: "center", alignItems: "center", padding: 10 }}
                    >
                        <Text style={{ color: "white", fontSize: 20 }}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};


export default OtpScreen;