import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, sectionData } from "../constants";
import { FlatList, View } from "react-native";
import { FocusedStatusBar, HomeHeader, Section } from "../components";
import Dropdown from "../components/Dropdown";
import { useTranslation } from "react-i18next";
import {
  getItemFromAsyncStorage,
  setItemToAyncStorage,
} from "../utils/asyncStorage";

const Home = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("english");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const getLanguage = async () => {
      await getItemFromAsyncStorage("lang").then((data) => {setLang(data); i18n.changeLanguage(data)});
    };
    getLanguage();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = async (lang) => {
    await setItemToAyncStorage("lang", lang);
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }} >
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={sectionData}
            renderItem={({ item }) => <Section data={item} />}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader toggleDropdown={toggleDropdown} />}
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
      <Dropdown
        currentLanguage={lang}
        changeLanguage={changeLanguage}
        isDropdownVisible={isDropdownVisible}
      />
    </SafeAreaView>
  );
};

export default Home;
