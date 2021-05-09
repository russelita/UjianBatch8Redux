import React, { Component } from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            gambarLike :this.gambarDefault()
        }
    }

    ganjil() {
        let dummyData = new Array();
        let counter = 0;

        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++){
                if (counter % 2 !== 0) {
                    dummyData[counter] = 1
                } else {
                    dummyData[counter] = 0
                }
                counter++;
            }
        }

        return dummyData
    }

    genap() {
        let dummyData = new Array();
        let counter = 0;

        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++){
                if (counter % 2 == 0) {
                    dummyData[counter] = 1
                } else {
                    dummyData[counter] = 0
                }
                counter++;
            }
        }
        return dummyData
    }

    listFibonacci(n) {
    // declare the array starting with the first 2 values of the fibonacci sequence
    // starting at array index 1, and push current index + previous index to the array
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
    }

    gambarFibonaci() {
        let dummyData = new Array();
        let counter = 0;

        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++){
                if (this.listFibonaci(15).includes(counter)) {
                    dummyData[counter] = 1
                } else {
                    dummyData[counter] = 0
                }
                counter++
            }
        }
        return dummyData
    }

     isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    // storing the calculated value would be much 
    // better than calculating in each iteration
    var sqrt = Math.sqrt(num);
  
    for (var i = 2; i <= sqrt; i++) 
      if (num % i === 0) return false;
    return true;
    }

    gambarDefault() {
        let dummyData = new Array();
        let counter = 0;

        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++){
                dummyData[counter] = 0
            }
            counter++
        }
        return dummyData
    }

    componentDidMount() {
        let x = this.ganjil();
        console.log(x);

        let y = this.genap();
        console.log(y);

        let z = this.gambarFibonaci();
        console.log(z);
    }

    isChildPressed = (number) => {
        let dummyArray = []

        if (number % 2 === 0) {
            dummyArray = this.genap();
        } else if (this.isPrime(number)) {
            dummyArray = this.gambarFibonaci(15);
        } else {
            dummyArray = this.ganjil();
        }
        this.setState({gambarLike:dummyArray})
    }

    gambarCheck() {
        if (document.getElementById("imgClick").source === '../thumb_up.jpg') {
            for (let x = 0; x < this.props.dataGambar; x++) {
                for (let y = 0; y < this.props.dataGambar; y++) {
                }
            }
            return (
                <View>
                    <Image id="imgClick" onclick={this.gambarCheck.bind(this)} source={require('../thumb_down.jpg')} />
                </View>
            )            
        } else {
            
            document.getElementById("imgClick").source = '../thumb_up.jpg'
        }
    }

    render() {
        
        return (
             
            <View style={styles.container}>
                <Text>Selamat Datang {JSON.stringify(this.props.userData.username)} </Text>
                {this.state.gambarLike.map((data, i) => {
                     return (
                         <view style={styles.container}>
                             <LikeButton jenis = {data} urutan = {i} actionClick = {this.isChildPressed}/>
                         </view>
                     )
                 })
             }   
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
}

const styles = StyleSheet.create({
    container: {
     
     width:75,
     height:60,
     
     backgroundColor:"red"
     
    },
    container2: {
     
        flexDirection: 'row',
        backgroundColor:"red",
        flexWrap:"wrap"
        
       },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home)