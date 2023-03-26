import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { languages } from "../i18n";
import { COLORS, SHADOWS, SIZES } from "../constants";
import { fromLanguageToImage } from "../utils/languages";

const Dropdown = ({ currentLanguage, changeLanguage, isDropdownVisible }) => {
  return (
    <View
      style={[
        {
          zIndex: 10,
          position: "absolute",
          top: 85,
          right: 10,
          width: 170,
          backgroundColor: COLORS.charcoal,
          borderRadius: SIZES.font,
          padding: SIZES.medium,
          ...SHADOWS.dark,
        },
        !isDropdownVisible && { display: "none" },
      ]}
    >
      {languages.map((lang, ind) => (
        <TouchableOpacity key={lang} onPress={() => changeLanguage(lang)}>
          <View
            style={[
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: SIZES.base,
                borderRadius: SIZES.font,
                overflow: "hidden",
              },
              ind !== languages.length - 1 && { marginBottom: 5 },
              lang === currentLanguage && { backgroundColor: COLORS.primary },
            ]}
          >
            <Image
              source={fromLanguageToImage[lang]}
              style={{
                width: 20,
                height: 20,
                marginLeft: SIZES.base
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.light,
                fontSize: SIZES.font,
              }}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Dropdown;