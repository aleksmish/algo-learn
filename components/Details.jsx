import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FONTS, SIZES } from "../constants";

const Details = ({ route }) => {
  const data = route.params;
  return (
    <View style={{ flex: 1, padding: SIZES.font }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            marginBottom: FONTS.extraLarge,
          }}
        >
          {data.details}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Details;
