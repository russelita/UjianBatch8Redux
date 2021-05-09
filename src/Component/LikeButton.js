import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default class LikeButton extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => { this.props.actionClick(this.props.urutan) }}>
                {
                    this.props.jenis === 1 ? <Image style={styles.tinyLogo} source={require('./src/thumb_down.jpg')} />
                        : <Image style={styles.tinyLogo} source={require('./src/thumb_up.jpg')} />
                }
            </TouchableOpacity>

            
        )
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });