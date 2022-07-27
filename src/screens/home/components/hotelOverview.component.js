import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import React, {useState} from 'react'
import { images, theme } from '../../../constants'
import { Paragraph } from '../../../components'

const HotelOverView = ({handler, hotelItem}) => {
    const { name, imageUrl, id, description } = hotelItem;
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState({uri: imageUrl})
    
    return (
    <View>
        <TouchableOpacity 
            style={styles.largeBtn}
            activeOpacity={0.5}
            onPress = {handler}
        >
            <Image
                source={image}
                width="70"
                height="70"
                resizeMode="cover"
                style={styles.largeImage}
                onLoadEnd = {() => setLoading(false)}
                onLoadStart = {() => setLoading(true)}
                onError = {() => setImage(images.onboard)}
            />
        </TouchableOpacity>

        <View style={styles.body}>
            <Text style={styles.heading}>{name}</Text>
            <Paragraph style={{textAlign: 'center', color: theme.COLORS.white}}>{description}</Paragraph>
        </View>
    </View>
  )
}

export default HotelOverView

const styles = StyleSheet.create({
    largeBtn: {
        marginHorizontal: theme.SIZES.base,
        height: theme.SIZES.height * 0.5,
        width: theme.SIZES.width * 0.7,
        alignItems: 'center',
    },
    largeImage: {
        height: theme.SIZES.height * 0.5,
        width: theme.SIZES.width * 0.7, 
        borderRadius: 25,
        borderWidth: 0.3,
        borderColor: theme.COLORS.lightGray,
    },
    body:{
        position: 'absolute',
        width: theme.SIZES.width * 0.7,
        backgroundColor: 'transparent',
        bottom: 0,
        left: 0,
    },
    heading: {
        ...theme.FONTS.h2,
        color: theme.COLORS.white,
        marginBottom: theme.SIZES.base,
        fontWeight: '800',
        textAlign: 'center'
    },
})