import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Screen1 = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <Button
                title="open"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequuntur laborum aspernatur, itaque cumque reiciendis adipisci, sed quos minus distinctio ducimus error eligendi ipsam non. Voluptas culpa dolores omnis modi sunt ipsa, illum ipsam, impedit id deleniti, molestias cum. Dignissimos perspiciatis nobis laudantium minus, excepturi ullam. Voluptatem officiis adipisci nulla?</Text>
        </View>
    )
}

export default Screen1;