import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
import axios from 'axios';

export class AddBio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email:"",
            phone: 0,
            address: "",
        }
    }

    handleAdd() {
        axios.post('http://192.168.43.215:8080/bio/add', this.state)
            .then( (response) => {
                console.log(response)
                alert(response.data)
                this.props.navigation.navigate("Biografi")
            })
                    .catch(function (error) {
                    console.log(error)
                    })
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Username</Text>
                <TextInput placeholder="Input Username" onChangeText={(data) => { this.setState({ nama: data }) }} />
                 <Text style={styles.title}> Email </Text>
                <TextInput placeholder="Input Email" onChangeText={ (data)=>{this.setState({email: data})}} />
                <Text style={styles.title}> Phone </Text>
                <TextInput placeholder="Input Phone" keyboardType='numeric' onChangeText={(data) => { this.setState({ phone: parseInt(data) }) }} />
                <Text style={styles.title}> Address </Text>
                <TextInput placeholder="Input Address" onChangeText={(data) => { this.setState({ address: data })}}/>
                <TouchableOpacity onPress={this.handleAdd.bind(this)} style={styles.button}><Text style={styles.title}>Submit</Text></TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { this.props.navigation.replace('Biografi') }} style={styles.button}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
                <View style={styles.footer}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Biografi') }} style={styles.buttonContainer}><Text style={styles.title}>LIST</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddBio') }} style={styles.buttonContainer}><Text style={styles.title}>REGISTER</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddBio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    buttonContainer: {
        alignItems:'center',
  justifyContent: 'center',
  flex:1,
    },
    button: {
      alignItems: "center",
      backgroundColor: "yellow",
        flex: 1,
        marginBottom: 350,
        minWidth:20,
        padding: 10,
        justifyContent: 'center',
        marginLeft:'auto',        
    //   left: Dimensions.get('window').width - 150,
    },
    footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'green',
  flexDirection:'row',
  height:60,
  alignItems:'center',
},
  });