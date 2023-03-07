import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.dark,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        padding: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    ></View>
  );
};
