import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import DataStructureVisualization from '../components/DataStructureVisualization'
import Code from '../components/Code'

const Details = ({ route }) => {
  const data = route.params
  return (
    <SafeAreaView style={{ flex: 1, padding: SIZES.font }}>
      <Text>{data.details}</Text>
    </SafeAreaView>
  )
} 

const Algorithm = ({ route }) => {
  const { data } = route.params
  const Tab = createBottomTabNavigator()
  console.log(data)
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <DataStructureVisualization />

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
          initialRouteName='Details'>
          <Tab.Screen
            name="Details" 
            component={ Details }
            initialParams={ data }
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image source={assets.details} style={{ 
                  width: SIZES.extraLarge, 
                  height: SIZES.extraLarge, 
                  tintColor: focused ? COLORS.light : COLORS.dark,
                  }} />
              )
            }} />
          <Tab.Screen
            name="Code" 
            component={ Code }
            initialParams={ data }
            options={{
              tabBarIcon: ({ focused, colors, size }) => (
                <Image source={assets.code} style={{ 
                  width: SIZES.extraLarge, 
                  height: SIZES.extraLarge, 
                  tintColor: focused ? COLORS.light : COLORS.dark,
                  }} />
              )
            }} />
        </Tab.Navigator>
        
    </SafeAreaView>
  )
}

export default Algorithm