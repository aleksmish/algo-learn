import { View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants";
import { Title } from "./SubInfo";
import { RectButton } from "./Button";
import { useTranslation } from "react-i18next";

const Section = ({ data }) => {
  const navigation = useNavigation();
  const { t } = useTranslation()
  
  return (
    <View
      style={{
        backgroundColor: COLORS.light,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
          overflow: "hidden",
        }}
      >
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
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            text={t("Go")}
            handlePress={() => navigation.navigate(data.title, { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default Section;
