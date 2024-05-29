import { Alert } from "react-native";

export const AlertWithTwoButtons = ({ title, subtitle, btnTitleFirst, btnTitleSecond, onPressButtonFirst,onPressButtonSecond }) => {
  return (
    Alert.alert(title, subtitle, [
        {text: btnTitleFirst, onPress: onPressButtonFirst},
        {text: btnTitleSecond, onPress: onPressButtonSecond},
      ],
      {cancelable: true}, // Only for Android
    )
  );
};

