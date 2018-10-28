import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPressEvent, children}) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPressEvent}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle : {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10
    },
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        borderColor : '#007aff',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth : 1,
        marginLeft : 5,
        marginRight : 5
    }
}

export { Button };