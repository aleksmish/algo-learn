import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import DetailsHeader from "../components/DetailsHeader";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SHADOWS } from "../constants/theme";

const TypeOfAlgorithm = ({ type, data }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary,
          textAlign: "center",
        }}
      >
        {type}
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
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Algorithms = ({ route, navigation }) => {
  const { data } = route.params;
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
              title="Pick an Algorithm"
            />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Algorithms;
