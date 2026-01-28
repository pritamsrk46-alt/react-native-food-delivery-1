import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, View } from "react-native";

const SplashScreen = () => {

  const navigation = useNavigation();
  const [loading,setLoading] = useState(true);


  const navigationCheck = useCallback(async () => {
    // clearAll();
    const valData = await getData();
    if (valData === null) {
      navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "LoginScreen" }] }))
    } else {
      navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "HomepageScreen" }] }))
    }
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigationCheck();
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigationCheck]);





  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('SignupData');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      Alert.alert("Error", "Failed to save data")
    }
  };



  // const clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //   } catch (e) {
  //     // clear error
  //   }

  //   console.log('Done.')
  // }

// if (loading){
//   return(
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <ActivityIndicator size={"large"} color={"black"}/>
//     </View>
//   )
// } 

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../cookaroo/a036cadf95c6f2c31dcb75375fd0ffde.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    {loading && (
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    )}
    </View>
  );
};

export default SplashScreen;
