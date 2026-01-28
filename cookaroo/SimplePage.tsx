import { Text, TouchableOpacity, View } from "react-native";
// import Navigation from "../startingtoAsyncstorage/Navigation";
// import { useNavigation } from "@react-navigation/native";

const SimplePage = () => {
    // const Navigation = useNavigation();
    return (
<View style={{flex:1,backgroundColor:"brown",justifyContent:"center",alignItems:"center"}}>

    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda reiciendis tenetur asperiores fuga excepturi consectetur temporibus amet culpa non, eveniet beatae adipisci impedit reprehenderit inventore quasi cupiditate ipsum sequi voluptate illum necessitatibus eum quidem id. Nihil omnis quis ea quos aliquid exercitationem aut, id sunt a voluptatem reprehenderit? Omnis, corrupti.</Text>


<TouchableOpacity
style={{height:40,width:"50%",backgroundColor:"white",justifyContent:"center",alignItems:"center",marginTop:50,borderRadius:20}}
// onPress={()=>Navigation.navigate("LoginScreen")}
>
<Text>Back to Login</Text>
</TouchableOpacity>
</View>
    )
}


export default SimplePage ;