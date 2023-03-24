import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../constants";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SHADOWS } from "../constants/theme";
import { FocusedStatusBar, DetailsHeader } from "../components";
import { useTranslation } from "react-i18next";

const TypeOfAlgorithm = ({ type, data }) => {
  const { t } = useTranslation()
  
  return (
    <View style={{ marginVertical: SIZES.base }}>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.large,
          color: COLORS.dark,
          textAlign: "center",
        }}
      >
        {t(type)}
      </Text>
      <FlatList
        data={data[type]}
        renderItem={({ item }) => <ListElementAlgorithm data={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
      />
    </View>
  );
};

const ListElementAlgorithm = ({ data }) => {
  const navigation = useNavigation();
  const { t } = useTranslation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate(data.name, { data })}>
      <View
        style={{
          padding: SIZES.font,
          backgroundColor: COLORS.light,
          borderRadius: SIZES.font,
          margin: SIZES.base,
          ...SHADOWS.light,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: COLORS.dark,
          }}
        >
          {t(data.name)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Algorithms = ({ route, navigation }) => {
  const { data } = route.params;
  const { t } = useTranslation()
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <FlatList
        data={Object.keys(data.topics)}
        renderItem={({ item }) => (
          <TypeOfAlgorithm type={item} data={data.topics} />
        )}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader
              data={data}
              navigation={navigation}
              title={t("Pick an Algorithm")}
            />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Algorithms;
