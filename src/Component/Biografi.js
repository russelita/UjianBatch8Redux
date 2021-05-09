import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TextInput, Alert, StatusBar, Button, Dimensions } from 'react-native'
import axios from 'axios';

export class Biografi extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
          data: [],
          nama:"",
          email: "",
          phone: "",
          address: "",
          filter: "",
          value: "",
        };

  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  componentDidMount(){
     this.getData();
  }
  
  // componentDidUpdate(){
  //     this.getData();
  //   }

  getData = () => {
    axios.get('http://192.168.43.215:8080/bio/get')
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
    axios.get(`http://192.168.43.215:8080/bio/search/${this.state.value}`)

            .then( (response) => {
              // console.log(response.data)
              let data = response.data;
              this.setState({ data: data })      
            })
                    .catch(function (error) {
                    console.log(error)
                    })
  }

  cariKeyword = () => {
    if (this.state.value === "nama") {
                  { this.setState({ nama: data }) }
                } else if (this.state.value === "email") {
                  { this.setState({ email: data }) }
                } else if (this.state.value === "email") {
                  { this.setState({ phone: data }) }
                } else {
                  { this.setState({ address: data }) }
                }
  }
  
  deleteData(id) {
    axios.delete(`http://192.168.43.215:8080/bio/delete/${id}`)
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
      <View style={{ borderWidth: 5, borderColor: "red" }}>
          <Text style={styles.title}>Username : {item.nama} </Text>
          <Text style={styles.title}>Email : {item.email} </Text>
          <Text style={styles.title}>Phone : {item.phone} </Text>
          <Text style={styles.title}>Address : {item.address} </Text>
          {/* <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('UpdateBio', item) }}
              style={styles.button}>
              <Text style={styles.title}>Update Biografi</Text></TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                  Alert.alert('Anda yakin?', 'Saya tidak yakin!',
                      [{ text: 'Tidak', onPress: () => console.warn('NO Pressed'), style: 'cancel' },
                          { text: 'YES', onPress: () => this.deleteData(item.id) },
                      ])
              }}
              style={styles.button}
          >
              <Text style={styles.title}>Delete Biografi</Text>
          </TouchableOpacity> */}
    </View>
    )

    render() {
        return (
          <SafeAreaView style={styles.container}>
             {/* <TextInput TextInput placeholder="Cari Buku" 
                                      onChangeText={(data) => { this.setState({ namaBuku: data }) }} /> */}
            {/* <TouchableOpacity onPress={ this.getData.bind(this) } 
                                  style={styles.button}>
                <Text style={styles.title}>Cari Buku</Text>
                </TouchableOpacity> */}
            {/* <form onSubmit={this.cariData}>
            <Text style={styles.title}> Search By </Text>
                <select value={this.state.value} onChange={this.handleChange}> 
                  <option value="nama"></option>
                  <option value="email"></option>
                  <option value="phone"></option>
                  <option value="address"></option>
                </select>
            <Text style={styles.title}> Keyword </Text>
                <TextInput placeholder="kata kunci" onChangeText={this.cariKeyword.bind(this)} />
        <input type="search" value="Submit" /> 
       </form> */}
            
            <TouchableOpacity onPress={this.cariData.bind(this)} style={styles.buttonSearch}><Text style={styles.title}>Search</Text></TouchableOpacity>
                <FlatList
                   data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Biografi') }} style={styles.button}><Text style={styles.title}>LIST</Text></TouchableOpacity>
          
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddBio') }} style={styles.button}><Text style={styles.title}>REGISTER</Text></TouchableOpacity>  
           </View>
            
                
            
           
            </SafeAreaView>
        )
    }
}

export default Biografi

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
    // left: Dimensions.get('window').width - 300,
    alignItems:'center',
  justifyContent: 'center',
  flex:1,
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
  buttonSearch: {
      alignItems: "center",
      backgroundColor: "yellow",
        flex: 1,
        marginBottom: 170,
        minWidth:20,
        padding: 10,
        justifyContent: 'center',
        marginLeft:'auto',        
    //   left: Dimensions.get('window').width - 150,
    },
  });