import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Screen } from '../../components'
import { theme } from '../../constants'
import { useSelector } from 'react-redux'
import HotelFlatList from './components/hotelFlatList.component'
import CategoryBtn from './components/categoryBtn.component'

const HomeScreen = () => {
  const user = useSelector(state => state.auth.userData)
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <Screen style={{paddingTop: 70}}>
      <Text style={styles.heading}>
        Good Morning
      </Text>

      <Text style={styles.heading}>
        {user.name}
      </Text>

      <View style={styles.categoryList}>
        {
          ['Recommended','Popular', 'Trending' ].map((item, index) => (
            <CategoryBtn key={item} name={item} isActive={index === activeCategory} onPress={() => setActiveCategory(index)} />
          ))
        }
      </View>

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
  categoryList:{
    marginTop: 'auto',
    height: theme.SIZES.height * 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})