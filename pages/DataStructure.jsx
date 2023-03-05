import { Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import Code from "../components/Code";
import DetailsHeader from "../components/DetailsHeader";

const Details = ({ route }) => {
  const data = route.params;
  return (
    <SafeAreaView style={{ flex: 1, padding: SIZES.font }}>
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
    </SafeAreaView>
  );
};

const DataStructure = ({ route, navigation }) => {
  const { data } = route.params;

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DetailsHeader data={data} navigation={navigation} title={data.name} />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontFamily: FONTS.medium },
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

export default DataStructure;
