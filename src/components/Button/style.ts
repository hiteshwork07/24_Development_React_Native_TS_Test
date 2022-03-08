import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  verticalScale,
} from '../Core/basicStyles';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(10),
    backgroundColor: brandColors.whiteColor,
    borderRadius: horizontalScale(20),
    marginVertical: verticalScale(5),
    shadowColor: brandColors.black,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  disableButton: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: fontScale(15),
    color: brandColors.primaryColor,
    fontWeight: '600',
    padding: horizontalScale(20),
  },
  wrongButton: {
    backgroundColor: brandColors.secondaryColor,
  },
  rightButton: {
    backgroundColor: brandColors.lightRed,
  },
  textColor: {
    color: brandColors.whiteColor,
  },
  selectedColor: {
    color: brandColors.primaryLight,
  },
  selectedBackground: {
    backgroundColor: brandColors.primaryLight,
    shadowColor: brandColors.black,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});

export default style;
