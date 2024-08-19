import React from 'react';
import {Text, View, Image} from 'react-native';
import {APP_ICON_URL} from '../../utils/Const';
//** Styles */
import {styles} from '../../Styles/SplashStyles';

interface ainScreenProps {
  navigation: any;
}
const MainScreen: React.FC<ainScreenProps> = ({navigation}) => {
  return (
    <View style={styles.centered}>
      <Image
        source={{
          uri: APP_ICON_URL,
        }}
        style={{width: 300, height: 250, borderRadius: 30, marginBottom: 20}}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>Assessment Test</Text>
    </View>
  );
};

export default MainScreen;
