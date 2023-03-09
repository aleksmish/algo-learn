import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SectionData } from "../constants";
import { FlatList, View } from "react-native";
import { FocusedStatusBar, HomeHeader, Section } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={SectionData}
            renderItem={({ item }) => <Section data={item} />}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />

          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.light }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
