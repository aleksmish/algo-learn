import { Image, StatusBar, Text, View } from "react-native"
import { CircleButton } from "./Button"
import { SIZES, assets } from "../constants"
import { COLORS, FONTS, SHADOWS } from "../constants/theme"

const DetailsHeader = ({ data, navigation, title }) => (
  <View style={{
    flexDirection: "column",
    alignItems: "center",
  }}>
    
    <View style={{ width: "100%", height: 250 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }} 
      />
    </View>
    
    <Text style={{ 
      margin: SIZES.base,
      fontFamily: FONTS.semiBold, fontSize: SIZES.large,
      color: COLORS.primary }}
      >{title}</Text>

    <CircleButton
      opacity={0.9}
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 5}
    />
  </View>
)

export default DetailsHeader