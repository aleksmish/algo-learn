import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { useTranslation } from "react-i18next";

const HomeHeader = ({ toggleDropdown }) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 40, height: 40, tintColor: COLORS.light }}
          />
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: COLORS.light,
            }}
          >
            AlgoLearn
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={toggleDropdown}>
            <Image
              source={assets.languages}
              tintColor={COLORS.light}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.light,
          }}
        >
          {t("Learn Data Structures and Algorithms interactively")}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
