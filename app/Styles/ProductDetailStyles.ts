import { StyleSheet, Dimensions } from "react-native";
import Colors from "../libs/Colors";

const { width: viewportWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 15,
  },

  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sizeSelector: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sizeTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  sizesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sizeBox: {
    width: "25%", // approximately 1/4th of the row minus spacing
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedSizeBox: {
    borderColor: Colors.black,
  },
  sizeText: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
  },
  selectedSizeText: {
    color: "#000",
  },
  addToBagButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  addToBagText: {
    color: "#fff",
    fontSize: 16,
  },
  carouselContainer: {
    position: "relative",
    alignItems: "center",
  },
  productImage: {
    width: viewportWidth,
    height: 250,
  },
  prevButton: {
    position: "absolute",
    left: 10,
    top: "40%",
    zIndex: 1,
  },
  nextButton: {
    position: "absolute",
    right: 10,
    top: "40%",
    zIndex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    // position: "absolute",
    // bottom: 10,
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#000",
  },
  inactiveIndicator: {
    backgroundColor: "#ccc",
  },
  sizesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // space between items for spacing
  },
  lastInRow: {
    marginRight: 0, // Removes margin from the last item in each row
  },
  rowSize: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
