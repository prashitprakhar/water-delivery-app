import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    )
}

const styles = {
    containerStyle: {
        borderColor: '#dddddd',
        borderWidth: 1,
        broderRadius: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation : 1
    }
}

export { Card };