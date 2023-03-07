import { Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Code from "../components/Code";
import DetailsHeader from "../components/DetailsHeader";
import { FocusedStatusBar } from "../components";
import Details from "../components/Details";

const Algorithm = ({ route, navigation }) => {
  const { data } = route.params;
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <DetailsHeader
        data={data}
        navigation={navigation}
        title={data.name}
        hasInfo={true}
      />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: FONTS.bold },
          tabBarStyle: { backgroundColor: COLORS.light },
          tabBarActiveTintColor: COLORS.light,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarActiveBackgroundColor: COLORS.primary,
          tabBarInactiveBackgroundColor: COLORS.light,
        }}
        initialRouteName="Details"
      >
        <Tab.Screen
          name="Details"
          component={Details}
          initialParams={data}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={assets.details}
                style={{
                  width: SIZES.extraLarge,
                  height: SIZES.extraLarge,
                  tintColor: focused ? COLORS.light : COLORS.dark,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Code"
          component={Code}
          initialParams={data}
          options={{
            tabBarIcon: ({ focused, colors, size }) => (
              <Image
                source={assets.code}
                style={{
                  width: SIZES.extraLarge,
                  height: SIZES.extraLarge,
                  tintColor: focused ? COLORS.light : COLORS.dark,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Algorithm;
