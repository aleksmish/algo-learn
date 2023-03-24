import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { useTranslation } from "react-i18next";

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
  const { t } = useTranslation()

  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {t(title)}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.dark,
        }}
      >
        {t(subTitle)}
      </Text>
    </View>
  );
};
