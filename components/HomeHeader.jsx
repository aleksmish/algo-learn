import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Image 
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 40, height: 25 }}
          />
          <Text style={{
            fontFamily: FONTS.bold,
            color: COLORS.light,
            
          }}>AlgoLearn</Text>
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.light}}>Learn Data Structures and Algorithms interactively</Text>
      </View>
    </View>
  )
}

export default HomeHeader