import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, SectionData, assets } from '../constants'

const DataStructureVisualization = ({ data }) => {
  return (
    <View style={{ 
      width: "100%", 
      height: 300,
      marginBottom: SIZES.extraLarge
      }}>
      <Image 
        source={data}
        resizeMode="center"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  )
}

export default DataStructureVisualization