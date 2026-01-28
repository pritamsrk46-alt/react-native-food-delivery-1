import { Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export type ScrollItemProps = {icon:string,iconName:string,bgColor:string}


const ScrollItem = ({iconName="All",icon="fire",bgColor="#f3c57bff"}:ScrollItemProps) => {
    return (
        <View style={{ height: 80, width: 150, backgroundColor: bgColor, marginRight:12, flexDirection: "row",alignItems:"center",borderRadius:30,paddingHorizontal:10 ,justifyContent:"space-evenly"}}>

            <View style={{ height: 50, width: 50, backgroundColor: "#f8f6f6ff", justifyContent: "center", alignItems: "center", borderRadius: 40, marginLeft: "5%" ,}}>
                <FontAwesome name={icon} size={40} color={"red"} />
            </View>

            <View style={{ height: 80, width: "60%", justifyContent: "center", alignItems: "center", }}>
                <Text style={{ fontSize: 20 }}>{iconName}</Text>
            </View>

        </View>
    )
}

export default ScrollItem;