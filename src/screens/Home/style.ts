import {StyleSheet} from 'react-native';
import {
  brandColors,
  horizontalScale,
  verticalScale,
} from '../../components/Core/basicStyles';

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: brandColors.secondaryColor,
  },
  container: {
    marginTop: verticalScale(80),
    flex: 1,
    backgroundColor: brandColors.primaryColor,
    borderRadius: horizontalScale(30),
    justifyContent: 'space-between',
  },
  containerWrapper: {
    marginTop: verticalScale(30),
    marginHorizontal: horizontalScale(20),
  },
  subHeaderText: {
    fontSize: horizontalScale(12),
    color: brandColors.whiteColor,
    textAlign: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  headerText: {
    fontSize: horizontalScale(20),
    color: brandColors.whiteColor,
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  middleText: {
    fontSize: horizontalScale(17),
    marginTop: verticalScale(20),
    fontWeight: '400',
    color: brandColors.whiteColor,
    textAlign: 'center',
  },
  headerMiddle: {
    fontSize: horizontalScale(20),
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: brandColors.whiteColor,
  },
  userName: {
    fontSize: horizontalScale(20),
    marginTop: horizontalScale(20),
  },
  text: {
    fontSize: horizontalScale(15),
    marginTop: horizontalScale(20),
  },
  buttonText: {
    fontSize: horizontalScale(13),
    padding: horizontalScale(15),
    fontWeight: '600',
    color: brandColors.whiteColor,
  },
  continueButton: {
    borderRadius: horizontalScale(25),
    marginTop: horizontalScale(20),
    backgroundColor: brandColors.primaryLight,
    alignItems: 'center',
    marginBottom: verticalScale(50),
    marginHorizontal: horizontalScale(15),
    shadowColor: brandColors.black,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  activeButton: {
    backgroundColor: brandColors.secondaryLight,
  },
  border: {
    width: 90,
    borderBottomColor: brandColors.whiteColor,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  testQuestionWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  selectedButton: {},
  bottomModelWrapper: {
    borderRadius: horizontalScale(30),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  modalText: {
    fontSize: horizontalScale(15),
    fontWeight: '600',
    color: brandColors.whiteColor,
  },
  textCombo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(15),
  },
  image: {
    height: horizontalScale(15),
    width: horizontalScale(15),
    resizeMode: 'contain',
    tintColor: brandColors.whiteColor,
  },
});

export default style;
