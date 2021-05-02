import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'

class Gambar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            < View >
                
            <Image source = { require('./src/thumb_down.jpg') }/>   
            
            </View >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Gambar)