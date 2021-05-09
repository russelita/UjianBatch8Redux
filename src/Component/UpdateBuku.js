import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, TextInput, } from 'react-native'
import axios from 'axios';

export class UpdateBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.route.params.id,
            judulBuku: this.props.route.params.judulBuku,
            jumlahHalaman: this.props.route.params.jumlahHalaman,
            author: this.props.route.params.author
        }
    }

    handleUpdate() {
        axios.put(`http://192.168.43.215:8080/buku/update/${this.state.id}`,this.state)
            .then( (response) => {
                // console.log(response)
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
                <Text style={styles.title}> Update Judul Buku </Text>
                <TextInput value={this.state.judulBuku} placeholder="Judul Buku" onChangeText={ (data)=>{this.setState({judulBuku: data})}} />
                <Text style={styles.title}> Update Halaman Buku </Text>
                <TextInput value={String(this.state.jumlahHalaman)} placeholder="Jumlah Halaman" keyboardType='numeric' onChangeText={(data) => { this.setState({ jumlahHalaman: parseInt(data) }) }} />
                <Text style={styles.title}> Update Nama Penulis </Text>
                <TextInput value={this.state.author} placeholder="Nama Penulis" onChangeText={(data) => { this.setState({ author: data })}}/>
                <TouchableOpacity onPress={this.handleUpdate.bind(this)} style={styles.button}><Text style={styles.title}>Update Buku</Text></TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { this.props.navigation.replace('Home') }} style={styles.button}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
            </View>
        )
    }
}

export default UpdateBuku

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