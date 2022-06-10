import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({

  containerTouchable: {
    flex: 1,
    padding:20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    padding:20,
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
    textAlign:"center",
  },
  inputContainer: {
    width: width / 1.2,
    marginVertical: height > 600 ? 30:20,
    paddingVertical: height > 600 ? 30:20,
    alignItems:"center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  button: {
    width: width / 3.2,
  },
  summaryContainer: {
    width: width / 1.2,
    marginVertical: height > 600 ? 30:20,
    paddingVertical: height > 600 ? 30:20,
    alignItems:"center",
  },
  subtitle: {
    fontSize:16,
  }
});