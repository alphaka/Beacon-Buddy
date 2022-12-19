import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SearchingRadar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchingRadar}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.groupView}>
          <Text style={styles.kitchen}>BeaconBuddy</Text>
          <Image
            style={styles.moreIcon}
            resizeMode="cover"
            source={require("../assets/more2.png")}
          />
          <View style={styles.back}>
            <LinearGradient
              style={styles.rectangle1}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Image
              style={styles.arrowRightLine1Icon}
              resizeMode="cover"
              source={require("../assets/arrowrightline-1.png")}
            />
          </View>
        </View>
        <View style={styles.homerosterButtons}>
          <View style={styles.buttonGroup}>
            <View style={styles.buttons}>
              <Pressable
                style={styles.mediumButtonMedium}
                onPress={() => navigation.navigate("Menu")}
              >
                <View style={styles.master}>
                  <View style={styles.labelIconLeftChevron}>
                    <View style={styles.spacer} />
                    <View style={styles.labelIconLeft}>
                      <View style={styles.placeholder}>
                        <Image
                          style={styles.wrapperIcon}
                          resizeMode="cover"
                          source={require("../assets/wrapper160.png")}
                        />
                      </View>
                      <Text style={[styles.label, styles.ml8]}>Menu</Text>
                      <View style={[styles.placeholder1, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon1}
                          resizeMode="cover"
                          source={require("../assets/wrapper161.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={styles.arrowsDownArrow}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow10.png")}
                    />
                  </View>
                </View>
              </Pressable>
              <View style={[styles.mediumButtonMedium1, styles.ml10]}>
                <Pressable
                  style={styles.master1}
                  onPress={() => navigation.navigate("Roster")}
                >
                  <View style={styles.labelIconLeftChevron1}>
                    <View style={styles.spacer1} />
                    <View style={styles.labelIconLeft1}>
                      <Image
                        style={styles.playersIcon}
                        resizeMode="cover"
                        source={require("../assets/players-icon.png")}
                      />
                      <Text style={[styles.label1, styles.ml8]}>Roster</Text>
                      <View style={[styles.placeholder2, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon2}
                          resizeMode="cover"
                          source={require("../assets/wrapper2.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={styles.arrowsDownArrow1}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow11.png")}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
            <View style={styles.homeIndicator3}>
              <View style={styles.homeIndicator2}>
                <View style={styles.homeIndicator1} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.elementsTextBoxNavBar}>
          <Text style={styles.title}>Beacon Broadcasted !</Text>
        </View>
      </View>
      <View style={styles.beaconReady}>
        <Image
          style={styles.rectangleCopyIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-copy.png")}
        />
        <Image
          style={styles.rectangleCopyIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-copy1.png")}
        />
        <Image
          style={styles.rectangleCopyIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-copy2.png")}
        />
        <Image
          style={styles.rectangleCopyIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-copy3.png")}
        />
        <Image
          style={styles.basketballIcon}
          resizeMode="cover"
          source={require("../assets/basketball12.png")}
        />
        <Image
          style={styles.basketballIcon1}
          resizeMode="cover"
          source={require("../assets/basketball13.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("SecondMenuBeacons")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-10.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 390,
    height: 844,
    backgroundColor: "transparent",
  },
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  barsHomeIndicatoriPhoneLig: {
    position: "absolute",
    top: 809,
    left: 126,
    width: 139,
    height: 35,
  },
  kitchen: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 145,
    height: 30,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  moreIcon: {
    position: "absolute",
    top: 55,
    left: 326,
    width: 44,
    height: 44,
    display: "none",
  },
  rectangle1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 27,
    shadowColor: "#333541",
    shadowOffset: {
      width: -8,
      height: -2,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    width: 44,
    height: 44,
    backgroundColor: "transparent",
  },
  arrowRightLine1Icon: {
    position: "absolute",
    top: 15,
    left: 28,
    width: 13,
    height: 13,
  },
  back: {
    position: "absolute",
    top: -10,
    left: -102,
    width: 44,
    height: 44,
    display: "none",
  },
  groupView: {
    position: "absolute",
    top: 65,
    left: 125,
    width: 145,
    height: 30,
  },
  spacer: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  wrapperIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxHeight: "100%",
    width: 20,
    flexShrink: 0,
  },
  placeholder: {
    borderRadius: 100,
    height: 20,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  wrapperIcon1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder1: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arrowsDownArrow: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  labelIconLeftChevron: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#35373d",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  master: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mediumButtonMedium: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  spacer1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  playersIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  label1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  wrapperIcon2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder2: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arrowsDownArrow1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  labelIconLeftChevron1: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#35373d",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  master1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mediumButtonMedium1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buttons: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  homeIndicator1: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  homeIndicator2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicator3: {
    alignSelf: "stretch",
    position: "relative",
    height: 34,
    flexShrink: 0,
    display: "none",
  },
  buttonGroup: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  homerosterButtons: {
    position: "absolute",
    marginLeft: -181,
    top: 688,
    left: "50%",
    width: 357,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#e8e8e8",
    textAlign: "left",
  },
  elementsTextBoxNavBar: {
    position: "absolute",
    top: 638,
    left: 89,
    width: 213,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  rectangleCopyIcon: {
    position: "absolute",
    height: "84%",
    width: "84.04%",
    top: "53.24%",
    right: "2.71%",
    bottom: "-37.24%",
    left: "13.24%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  rectangleCopyIcon1: {
    position: "absolute",
    height: "117.57%",
    width: "105.41%",
    top: "-9.46%",
    right: "-1.89%",
    bottom: "-8.11%",
    left: "-3.51%",
    borderRadius: 185,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopyIcon2: {
    position: "absolute",
    height: "79.65%",
    width: "78.34%",
    top: "9.6%",
    right: "12.59%",
    bottom: "10.74%",
    left: "9.07%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopyIcon3: {
    position: "absolute",
    height: "64.13%",
    width: "62.24%",
    top: "17.9%",
    right: "19.31%",
    bottom: "17.96%",
    left: "18.45%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basketballIcon: {
    position: "absolute",
    top: 102,
    left: 104,
    width: 166,
    height: 166,
  },
  basketballIcon1: {
    position: "absolute",
    top: 213,
    left: 102,
    width: 200,
    height: 276,
    display: "none",
  },
  beaconReady: {
    position: "absolute",
    height: "43.84%",
    width: "94.87%",
    top: "20.14%",
    right: "1.79%",
    bottom: "36.02%",
    left: "3.33%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  groupPressable: {
    position: "absolute",
    left: 46,
    top: 205,
    width: 306,
    height: 306,
  },
  searchingRadar: {
    position: "relative",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SearchingRadar;
