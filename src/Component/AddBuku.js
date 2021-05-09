import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, TextInput, } from 'react-native'
import axios from 'axios';

export class AddBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            judulBuku: "",
            jumlahHalaman: 0,
            author: "",
        }
    }

    handleAdd() {
        axios.post('http://192.168.43.215:8080/buku/add', this.state)
            .then( (response) => {
                console.log(response)
                alert(response.data)
                this.props.navigation.navigate("Home")
            })
                    .catch(function (error) {
                    console.log(error)
                    })
        
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Input Judul Buku </Text>
                <TextInput placeholder="Judul Buku" onChangeText={ (data)=>{this.setState({judulBuku: data})}} />
                <Text style={styles.title}> Input Halaman Buku </Text>
                <TextInput placeholder="Jumlah Halaman" keyboardType='numeric' onChangeText={(data) => { this.setState({ jumlahHalaman: parseInt(data) }) }} />
                <Text style={styles.title}> Input Nama Penulis </Text>
                <TextInput placeholder="Nama Penulis" onChangeText={(data) => { this.setState({ author: data })}}/>
                <TouchableOpacity onPress={this.handleAdd.bind(this)} style={styles.button}><Text style={styles.title}>Tambahkan Buku</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.replace('Home') }} style={styles.button}><Text style={styles.title}>Cancel</Text></TouchableOpacity>
                
            </View>
        )
    }
}

export default AddBuku

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });