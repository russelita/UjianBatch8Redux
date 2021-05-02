import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class Gambar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            < View >
                
            { require('./src/thumb_up.jpg') }   
            
            </View >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Gambar)