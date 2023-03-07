import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import DetailsHeader from "../components/DetailsHeader";
import { useNavigation } from "@react-navigation/native";
import { SHADOWS } from "../constants/theme";

const ListElementDataStructure = ({ data }) => {
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

const DataStructures = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <FlatList
        data={data.topics}
        renderItem={({ item }) => <ListElementDataStructure data={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader
              data={data}
              navigation={navigation}
              title="Pick a Data Structure"
            />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default DataStructures;
