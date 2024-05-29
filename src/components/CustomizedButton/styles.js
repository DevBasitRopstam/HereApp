import { Colors } from "../../assets";
import { CommonStyles, FontSize, UtilityMethods } from "../../utility";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  mainContainer: (disabled) => ({
    height: UtilityMethods.hp(6),
    width: UtilityMethods.wp(90),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: disabled ? Colors.SECONDARY : Colors.PRIMARY,
    borderRadius: 17,
  }),

  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: (disabled) => ({
    color: disabled ? Colors.PRIMARY : Colors.WHITE,
    fontSize: FontSize.VALUE(17),
    ...CommonStyles.MEDIUM,
  }),
  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
