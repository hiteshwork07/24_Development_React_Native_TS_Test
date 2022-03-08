import { ViewStyle } from "react-native";

export type Props = {
  disabled?:boolean,
  active?:boolean,
  selected?:boolean,
  text?:string,
  onPress?: () => void,
  isRight?:boolean,
  isWrong?:boolean,
  buttonStyle?:ViewStyle,
};
