import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Component/Login';
import Register from '../Component/Register';
import Home from '../Component/Home';
import AddBuku from '../Component/AddBuku';
import UpdateBuku from '../Component/UpdateBuku';
import AddBio from '../Component/AddBio';
import Biografi from '../Component/Biografi';
const Stack = createStackNavigator();

class Router extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="Register" component={Register} /> */}
                {/* <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddBuku" component={AddBuku} />
                <Stack.Screen name="UpdateBuku" component={UpdateBuku} /> */}
                <Stack.Screen name="AddBio" component={AddBio} />
                <Stack.Screen name="Biografi" component={Biografi} />
            </Stack.Navigator>
        );
    }
}

export default Router