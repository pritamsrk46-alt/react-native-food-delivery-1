import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import Screen1 from "../cookaroo/Screen1";
import HomepageScreen from "./HomePage";
// import Header from "./Header";

const Drawer = createDrawerNavigator();


const DrawerNav = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent{...props} />}
        >
            <Drawer.Screen name="HomepageScreen" component={HomepageScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}


function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView>
            <DrawerItem
                label={"HomepageScreen"}
                onPress={() => props.navigation.navigate("HomepageScreen")}
            />

            <DrawerItem
                label={"Orders"}
                onPress={() => props.navigation.navigate("Orders")}
            />
        </DrawerContentScrollView>
    )
}

export default DrawerNav;