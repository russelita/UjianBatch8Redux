import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { GambarReducer } from '../Redux/Action'

class Home extends Component {
    constructor(props) {
        super(props)
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
        
        let temp=[], current
        for (let x = 0; x < this.props.dataGambar; x++) {
            for (let y = 0; y < this.props.dataGambar; y++) {
                document.getElementById(`imgClick`)
            }
        }
         return (
             <View>
                
                <Text>Selamat Datang {JSON.stringify(this.props.userData.username)} </Text>
                <Image
                        id="imgClick"
                        onclick={this.gambarCheck.bind(this)}
                        source={require('../thumb_up.jpg')} /> 
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.RegisterReducer,
    dataGambar : state.GambarReducer
})

const mapDispatchToProps = {
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 10
    },
    inputStyle: {
        borderWidth: 10,
        borderColor: "red",
    },
    ImgStyle: {
        maxWidth: '50px'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)