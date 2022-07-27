import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { theme } from '../../../constants'
import HotelOverView from './hotelOverview.component';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../navigation/routes';

const HotelFlatList = (hotelList=[]) => {
    const navigation = useNavigation()
    const renderItem = ({item}) =>( 
        <HotelOverView 
            hotelItem={item} 
            handler={() => navigation.navigate(routes.HOTEL_DETAILS,  {hotelId: item.id})} 
        />
    );

    return (
        <FlatList
            style={{maxHeight: theme.SIZES.height * 0.5, marginTop: 'auto', marginBottom: theme.SIZES.base}}
            contentContainerStyle={styles.flatList}
            horizontal
            data={dummyHotels}
            renderItem={renderItem}
            showsHorizontalScrollIndicator = {false}
        />
    )
}

export default HotelFlatList

const styles = StyleSheet.create({
    flatList: {
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
})

const dummyHotels = [
    { name : "Hotel No One", description: 'description',  id: '1', imageUrl: 'https://s7g10.scene7.com/is/image/accorhotels/Kuredhivaru_xxxxxx_i128875:13by5?wid=1920&hei=738&resMode=sharp2&op_usm=1.75,0.3,2,0&dpr=off&iccEmbed=true&icc=sRGB' },
    { name : "Hotel No Two",  description: 'description', id: '2', imageUrl: 'https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg' },
    { name : "Hotel No Three",  description: 'description',  id: '3', imageUrl: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/headmast-desktop/itchotels-boutique.jpg', },
]