import { View, TouchableOpacity, FlatList } from "react-native";
import List, { ListProps } from "./List";
// import { useNavigation } from "@react-navigation/native";

const data: ListProps[] = [
    {
        icon: "apple",
        iconName: "Apple",
        bgColor: "#f8d7da"
    },
    {
        icon: "fire",
        iconName: "Fire",
        bgColor: "#fdebd0"
    },
    {
        icon: "coffee",
        iconName: "Coffee",
        bgColor: "#d6eaf8"
    },
    {
        icon: "bitbucket",
        iconName: "Bucket",
        bgColor: "#d5f5e3"
    },
    {
        icon: "beer",
        iconName: "Beer",
        bgColor: "#fcf3cf"
    },
];

const ListDetails = () => {
    // const Navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, backgroundColor: "purple" }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.iconName}
                renderItem={({ item }) => (
                    <TouchableOpacity

                    >
                        <List

                            icon={item.icon}
                            iconName={item.iconName}
                            bgColor={item.bgColor}
                        />
                    </TouchableOpacity>
                )}
            />


        </View>
    );
};

export default ListDetails;
