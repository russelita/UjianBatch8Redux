import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { RegisterAction } from '../Redux/Action'

export class Register extends Component {
    constructor(props) {
        super(props)
    }

    registerCheck(){
        alert(`Selamat datang ${this.props.namaUser}`)
        this.props.navigation.navigate('Login');
    
    }
    render() {
        return (
            <View>
                <Text style={styles.textStyle}> Username </Text> 
                <TextInput styles={styles.inputStyle} placeholder="Username" onChangeText={(data)=>{this.props.RegisterAction(data,"username")}}/>
                <Text style={styles.textStyle}> Password </Text>
                <TextInput styles={styles.inputStyle} placeholder="Password" onChangeText={(data)=>{this.props.RegisterAction(data,"password")}}/>
                <Text style={styles.textStyle}> Name </Text>
                <TextInput styles={styles.inputStyle} placeholder="Name" onChangeText={(data)=>{this.props.RegisterAction(data,"name")}}/>
                <Text style={styles.textStyle}> Address </Text>
                <TextInput styles={styles.inputStyle} placeholder="Address" onChangeText={(data)=>{this.props.RegisterAction(data,"address")}}/>
                {/* <Button title="Login" color="#f194ff" onPress={this.onText.bind(this,this.state.username,this.state.password)}/> */}
                <Button title="Register" color="#f194ff" onPress={this.registerCheck.bind(this)}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        padding:10
    },
    inputStyle:{
        borderWidth:10,
        borderColor:"red",
    }
})


const mapStateToProps = (state) => {
    // console.log(state)
    return {namaUser:state.RegisterReducer.username}
}

const mapDispatchToProps = {
    RegisterAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
