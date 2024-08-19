import {
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  TextInputProps,
} from 'react-native';

export interface ButtonProps {
  btnString: string;
  onClick: any;
  btnStyle: ViewStyle;
  titleStyle: TextStyle;
}

export interface HeaderProps {
  leftIcon?: ImageSourcePropType;
  headerTitle?: string;
  RightIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  containerStyle?: ViewStyle;
}

export interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  RightIcon?: ImageSourcePropType;
  RightFirstIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  callBackRightFirstImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  backgroundViewColor?: string;
  editable?: boolean;
  isPassword?: boolean;
  viewStyle?: ViewStyle;
  inputStyle?: TextInputProps;
}

export interface TabItemProps {
  imageSource: any;
  focus: boolean;
  title: string;
}

export interface UserInfoProps {
  image: any;
  title: string;
}
