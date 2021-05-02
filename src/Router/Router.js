import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Component/Login';
import Home from '../Component/Home';
import Register from '../Component/Register';
const Stack = createStackNavigator();

class Router extends Component {
    render() {
        return (
            <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Register" component={Register} /> */}
            </Stack.Navigator>
        );
    }
}

export default Router