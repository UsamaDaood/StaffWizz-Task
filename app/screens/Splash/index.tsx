import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { APP_ICON_URL } from "../../utils/Const";
//** Styles */
import { styles } from "../../Styles/SplashStyles";

interface SplashProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    handlingSplash();
  }, []);

  // Getting Go to Screen
  const goToScreen = async () => {
    return "ProductDetails";
  };

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: await goToScreen(),
          },
        ],
      });
    }, 3000);
  };

  return (
    <View style={styles.centered}>
      <Image
        source={{
          uri: APP_ICON_URL,
        }}
        style={{ width: 300, height: 250 }}
        resizeMode={"contain"}
      />
      <Text style={styles.title}>Assessment Task</Text>
    </View>
  );
};

export default SplashScreen;
