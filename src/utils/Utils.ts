import {RNToasty} from 'react-native-toasty';

const showErrorToast = title => {
  RNToasty.Error({title, withIcon: false, duration: 1});
};

const showNormalToast = (title, forceToast = false) => {
  RNToasty.Normal({title, withIcon: false});
};

const showSuccessToast = title => {
  RNToasty.Success({title, withIcon: false});
};

export default {
  showErrorToast,
  showNormalToast,
  showSuccessToast,
};
