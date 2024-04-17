import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e: any) {
      console.log(e.message)
    }
  };

  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value)
        return value
      }
    } catch (e: any) {
      console.log(e.message)
    }
  };

  export{ storeData, getData}