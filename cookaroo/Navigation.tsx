import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarouselScreen from "../cookaroo/CarouselScreen";
import SplashScreen from "../cookaroo/SplashScreen";
import SignUpScreen from "../cookaroo/Signup";
import LoginScreen from "../cookaroo/Login";
import SimplePage from "../cookaroo/SimplePage";
import ForgotPasswordScreen from "../cookaroo/ForgotPassword";
import OtpScreen from "../cookaroo/OtpScreen";
import ResetPassword from "../cookaroo/ResetPassword";
import Flatlist from "../cookaroo/FlatList";
// import HomepageScreen from "../cookaroo/HomePage";
import RestaurantDetailsPage from "../cookaroo/RestaurantsDetailsPage";
import DrawerNav from "../cookaroo/Drawer";
// import FoodItemScrool from "../cookaroo/FoodItemScroll";
import RestaurantsItem from "../cookaroo/RestaurantsItem";
import BurgerDetailsScreen from "../cookaroo/BurgerDetailsScreen";
import { Provider } from "react-redux";
import { store } from "./REDUX/Store";
import ProfileScreen from "../cookaroo/ProfileScreen";
import ListDetails from "../cookaroo/ListDetails";
import MyProfile from "../cookaroo/MyProfile";
import CartDetails from "../cookaroo/CartDetails";
import Orders from "../cookaroo/Orders";

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>

        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>

          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />

          <Stack.Screen name="CarouselScreen" component={CarouselScreen} options={{ headerShown: false }} />

          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />

          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

          <Stack.Screen name="SimplePage" component={SimplePage} options={{ headerShown: false }} />

          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />

          <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />

          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />

          <Stack.Screen name="HomepageScreen" component={DrawerNav} options={{ headerShown: false }} />

          <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />

          <Stack.Screen name="CartDetails" component={CartDetails} options={{ headerShown: false }} />

          <Stack.Screen name="RestaurantsItem" component={RestaurantsItem} options={{ headerShown: false }} />

          <Stack.Screen name="RestaurantDetailsPage" component={RestaurantDetailsPage} options={{ headerShown: false }} />

          <Stack.Screen name="BurgerDetailsScreen" component={BurgerDetailsScreen} options={{ headerShown: false }} />

          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />

          <Stack.Screen name="Flatlist" component={Flatlist} options={{ headerShown: false }} />

          <Stack.Screen name="ListDetails" component={ListDetails} options={{ headerShown: false }} />

          <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default Navigate;
