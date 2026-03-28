import { StyleSheet, Text, View } from "react-native";

const Simple = () => {
    return (
<View style={styles.container}>
    <Text>yes you learned create Login ans Signin Page.</Text>
</View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"powderblue",
        justifyContent:"center",
        alignItems:"center"
    },
    txt:{
        fontSize:20,
        color:"blue",
        fontWeight:"bold"
    }
})

export default Simple;