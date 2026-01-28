import { Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export type ListProps = {
    icon: string;
    iconName: string;
    bgColor: string;
};

const List = ({ iconName, icon, bgColor }: ListProps) => {
    return (
        <View style={{width: "90%",height: 180,backgroundColor: bgColor,alignSelf: "center",alignItems: "center",justifyContent: "center",borderRadius: 16,marginVertical: 12,}}>
            
            <View style={{height: 100,width: 100,backgroundColor: "white",justifyContent: "center",alignItems: "center",borderRadius: 50,}}>
                <FontAwesome name={icon} size={60} color="red" />
            </View>

            <Text style={{ fontSize: 26, marginTop: 10 }}>
                {iconName}
            </Text>
        </View>
    );
};

export default List;
