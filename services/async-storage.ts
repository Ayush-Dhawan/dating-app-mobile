import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  export{ storeData, getData}