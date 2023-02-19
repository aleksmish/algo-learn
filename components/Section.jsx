import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../constants'
import { SubInfo, Tags, Title } from './SubInfo'
import { SHADOWS } from '../constants/theme'
import { RectButton } from './Button'

const Section = ({ data }) => {
  console.log("SECTION")
  const navigation = useNavigation()
  console.log(data)
  return (
    <View style={{
      backgroundColor: COLORS.light,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>

      <View style={{ width: "100%", height: 250,
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,overflow: "hidden"
        }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
        />  
      </View>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <Title 
          title={data.title}
          subTitle={data.info}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Tags/>
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate(data.title, { data })}
          />
        </View>
      </View>


    </View>
  )
}

export default Section