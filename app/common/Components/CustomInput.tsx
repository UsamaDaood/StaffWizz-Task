import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
//** Colors are used */
import Colors from '../../libs/Colors';
//** Interfaces */
import {CustomInputProps} from '../../Interfaces/index';

const CustomInput = ({
  leftIcon,
  placeholder,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
  backgroundViewColor,
  editable,
  isPassword,
  viewStyle,
  inputStyle,
  RightFirstIcon,
  callBackRightFirstImage,
}: CustomInputProps) => {
  return (
    <View
      style={[
        styles.container,
        viewStyle,
        {
          backgroundColor: backgroundViewColor
            ? backgroundViewColor
            : Colors.colorGray,
        },
      ]}>
      {leftIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 5},
              ]}
              source={leftIcon}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 0.9}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="grey"
          style={[inputStyle, {padding: 10}]}
          keyboardType={keyboardType ? keyboardType : 'default'}
          value={inputValue}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          selectTextOnFocus={false}
          secureTextEntry={isPassword}
        />
      </View>

      {RightFirstIcon && (
        <View style={{flex: 0.1, alignSelf: 'center'}}>
          <TouchableOpacity onPress={callBackRightFirstImage}>
            <Image
              style={[
                styles.cartIconStyle,
                // {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={RightFirstIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}

      {RightIcon && (
        <View
          style={{
            flex: 0.1,
            alignSelf: 'center',
            marginRight: 10,
            // borderWidth: 1,
          }}>
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={[
                styles.cartIconStyle,
                // {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorGray,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartIconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
});

export default CustomInput;
