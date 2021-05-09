import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TextInput, Alert, StatusBar } from 'react-native'
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
          data: [],
          namaBuku:""
        };

      }

  componentDidMount(){
     this.getData();
  }
  
  componentDidUpdate(){
      this.getData();
    }

  getData = () => {
    axios.get('http://192.168.43.215:8080/buku/get')
            .then( (response) => {
              // console.log(response.data)
              let data = response.data;
              this.setState({ data: data })      
            })
                    .catch(function (error) {
                    console.log(error)
                    })
  }

  cariData = () => {
    axios.get(`http://192.168.43.215:8080/buku/search/${this.state.namaBuku}`)
            .then( (response) => {
              // console.log(response.data)
              let data = response.data;
              this.setState({ data: data })      
            })
                    .catch(function (error) {
                    console.log(error)
                    })
  }
  
  deleteData(id) {
    axios.delete(`http://192.168.43.215:8080/buku/delete/${id}`)
    .then( (response) => {
              alert(response.data)
              // let data = response.data;
              // this.setState({ data: data })      
            })
                    .catch(function (error) {
                    console.log(error)
                    })
  }
    
    // Item = ({ title }) => (
    //     <View style={styles.item}>
    //         <Text style={styles.title}>{title}</Text>
    //     </View>
    // )

  renderItem = ({ item }) => (
    <View  style = {{borderWidth:5, borderColor:"red"}}>
      <Text style={styles.title}>Judul Buku : {item.judulBuku} </Text>
      <Text style={styles.title}>Jumlah Halaman : {item.jumlahHalaman} </Text>
      <Text style={styles.title}>Nama Penulis : {item.author} </Text>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('UpdateBuku', item) }} style={styles.button}><Text style={styles.title}>Update Buku</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {
        Alert.alert('Anda yakin?', 'Saya sih tidak...',
          [
        {text: 'Tidak', onPress:()=> console.warn('NO Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => this.deleteData(item.id)},
      ])
      }} style={styles.button}><Text style={styles.title}>Delete Buku</Text></TouchableOpacity>
    </View>
    )

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                   data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddBuku') }} style={styles.button}><Text style={styles.title}>Tambahkan Buku</Text></TouchableOpacity>
            {/* <TextInput TextInput placeholder="Cari Buku" onChangeText={(data) => { this.setState({ namaBuku: data }) }} /> */}
            {/* <TouchableOpacity onPress={ this.getData.bind(this) } style={styles.button}><Text style={styles.title}>Cari Buku</Text></TouchableOpacity> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
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
    button: {
     
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      margin:10,
    },
  });

export default Home
