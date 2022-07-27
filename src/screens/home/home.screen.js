import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Screen } from '../../components'
import { theme } from '../../constants'
import { useSelector } from 'react-redux'
import HotelFlatList from './components/hotelFlatList.component'

const HomeScreen = () => {
  const user = useSelector(state => state.auth.userData)
  return (
    <Screen style={{paddingTop: 70}}>
      <Text style={styles.heading}>
        Good Morning
      </Text>

      <Text style={styles.heading}>{user.name}</Text>

      <HotelFlatList />
      
    </Screen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  heading: {
    ...theme.FONTS.h1,
    color: theme.COLORS.dark,
    marginBottom: theme.SIZES.base,
    fontWeight: '700'
  },
})