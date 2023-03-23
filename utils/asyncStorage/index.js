import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItemToAyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getItemFromAsyncStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(error);
  }
};
