import { Stack} from "expo-router";


export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name ="index" options ={{title: "Home"}}/>
            <Stack.Screen name ="login" options = {{title: "Login"}}/>
            <Stack.Screen name="register" options={{ title: "Register" }} />
            <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />

            <Stack.Screen name="menu/index" options={{ title: "Menu" }} />
            <Stack.Screen name="menu/new" options={{ title: "New Menu Item" }} />

            <Stack.Screen name="orders/index" options={{ title: "Orders" }} />
            <Stack.Screen name="orders/new" options={{ title: "New Order" }} />

            <Stack.Screen name="kitchen/index" options={{ title: "Kitchen" }} />
            <Stack.Screen name="reports/index" options={{ title: "Reports" }} />

        </Stack>
    )
}