import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUpScreen from "../Practice/Signup";
import LoginScreen from "../Practice/Login";
import Simple from "../Practice/Simple";

const Stack = createNativeStackNavigator();

const SignupNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Simple" component={Simple} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignupNavigation;