import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FONTS, SIZES } from "../constants";
import { useTranslation } from "react-i18next";

const Details = ({ route }) => {
  const data = route.params;
  const { t } = useTranslation()

  return (
    <View style={{ flex: 1, padding: SIZES.font }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            marginBottom: FONTS.extraLarge,
          }}
        >
          {t(data.details)}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Details;
