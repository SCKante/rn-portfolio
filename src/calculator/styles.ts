import { StyleSheet, Dimensions } from 'react-native'


const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  row: { flexDirection: "row", alignItems: "center" },
  switchThemeC: {
    justifyContent: "center",
    width: 120,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  microphone: {
    width: 60,
    height: 50,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  operationContainer: {
    height: height * 0.17,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  operation: {
    fontSize: 22,
    fontWeight: "500",
  },
  resultContainer: {
    height: height * 0.12,
    width: "100%",
  },
  keyboard: {
    height: height * 0.63,
    width: "100%",
  },
  keyboardBtn: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 4,
  },
  keyboardText: {
    fontSize: 22,
    fontWeight: "600",
    opacity: 0.6,
  },
});


export default styles