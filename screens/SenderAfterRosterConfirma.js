import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SenderAfterRosterConfirma = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.senderAfterRosterConfirma}>
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
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("SecondMenuBeacons")}
          >
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
          </Pressable>
        </View>
        <View style={styles.homeIndicator3}>
          <View style={styles.homeIndicator2}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
        <View style={styles.time}>
          <View style={styles.components}>
            <View style={styles.master}>
              <Text style={styles.text}>1</Text>
              <View style={[styles.placeholder, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
              <Image
                style={[styles.wrapperIcon1, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/wrapper83.png")}
              />
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar, styles.ml10]}>
            <Text style={styles.title}>Dec 22 | 5:30-6:30PM</Text>
          </View>
        </View>
        <View style={styles.activity}>
          <View style={styles.components1}>
            <View style={styles.master1}>
              <Image
                style={styles.sportsBasketBall}
                resizeMode="cover"
                source={require("../assets/sports--basket-ball2.png")}
              />
              <Text style={[styles.text1, styles.ml6]}>1</Text>
              <View style={[styles.placeholder1, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon2}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
              <View style={[styles.wrapper, styles.ml6]} />
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar1, styles.ml10]}>
            <Text style={styles.title1}>Basketball</Text>
          </View>
        </View>
        <View style={styles.paul}>
          <View style={styles.imageCircle}>
            <ImageBackground
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image32.png")}
            >
              <Image
                style={styles.multimediaImage}
                resizeMode="cover"
                source={require("../assets/multimedia--image29.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa12.png")}
              />
              <View style={styles.badge}>
                <View style={styles.placeholder2}>
                  <Image
                    style={styles.wrapperIcon3}
                    resizeMode="cover"
                    source={require("../assets/wrapper189.png")}
                  />
                </View>
              </View>
              <View style={styles.badge2}>
                <Text style={styles.badge1}>Adv.</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow, styles.mt10]}>
            <Text style={styles.title2}>Paul</Text>
            <Text style={styles.subtitle}>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>
        <View style={styles.fatima}>
          <View style={styles.imageCircle1}>
            <ImageBackground
              style={styles.imageIcon1}
              resizeMode="cover"
              source={require("../assets/image.png")}
            >
              <Image
                style={styles.multimediaImage1}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon1}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge3}>
                <View style={styles.placeholder3}>
                  <Image
                    style={styles.wrapperIcon4}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge5}>
                <Text style={styles.badge4}>Adv.</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow1, styles.mt10]}>
            <Text style={styles.title3}>Fatima</Text>
            <Text style={styles.subtitle1}>⭐⭐</Text>
          </View>
        </View>
        <View style={styles.author}>
          <View style={styles.imageCircle2}>
            <ImageBackground
              style={styles.imageIcon2}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            >
              <Image
                style={styles.multimediaImage2}
                resizeMode="cover"
                source={require("../assets/multimedia--image10.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon2}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge6}>
                <View style={styles.placeholder4}>
                  <Image
                    style={styles.wrapperIcon5}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge8}>
                <Text style={styles.badge7}>85</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow2, styles.mt10]}>
            <Text style={styles.title4}>Amanda</Text>
            <Text style={styles.subtitle2}>⭐⭐⭐</Text>
          </View>
        </View>
        <View style={styles.elementsTextBoxNavBar2}>
          <Text style={styles.title5}>Active Roster ( 4 / 6)</Text>
        </View>
        <View style={styles.elementsTextBoxNavBar3}>
          <Text style={styles.title6}>Pending Requests ( 2 )</Text>
        </View>
        <View style={styles.author1}>
          <View style={styles.imageCircle3}>
            <ImageBackground
              style={styles.imageIcon3}
              resizeMode="cover"
              source={require("../assets/image2.png")}
            >
              <Image
                style={styles.multimediaImage3}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplasharxIJ2pWXXcIcon}
                resizeMode="cover"
                source={require("../assets/unsplasharxij2pwxxc.png")}
              />
              <View style={styles.badge9}>
                <View style={styles.placeholder5}>
                  <Image
                    style={styles.wrapperIcon6}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <LinearGradient
                style={styles.badge11}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              >
                <Text style={styles.badge10}>Host</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow3, styles.mt10]}>
            <Text style={styles.title7}>{`Brian `}</Text>
            <Text style={styles.subtitle3}>⭐⭐⭐⭐</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.cancelBeacon}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        >
          <Pressable style={styles.pressable}>
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
        </LinearGradient>
        <View style={styles.author2}>
          <View style={styles.imageCircle4}>
            <ImageBackground
              style={styles.imageIcon4}
              resizeMode="cover"
              source={require("../assets/image5.png")}
            >
              <Image
                style={styles.multimediaImage4}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon3}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge12}>
                <View style={styles.placeholder6}>
                  <Image
                    style={styles.wrapperIcon7}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge14}>
                <Text style={styles.badge13}>Adv.</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow4, styles.mt10]}>
            <Text style={styles.title8}>Patesh</Text>
            <Text style={styles.subtitle4}>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.moreIcon}
        resizeMode="cover"
        source={require("../assets/more.png")}
      />
      <View style={styles.author4}>
        <View style={styles.author3}>
          <View style={styles.imageCircle5}>
            <ImageBackground
              style={styles.imageIcon5}
              resizeMode="cover"
              source={require("../assets/image4.png")}
            >
              <Image
                style={styles.multimediaImage5}
                resizeMode="cover"
                source={require("../assets/multimedia--image10.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon4}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge15}>
                <View style={styles.placeholder7}>
                  <Image
                    style={styles.wrapperIcon8}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge17}>
                <Text style={styles.badge16}>85</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow5, styles.mt10]}>
            <Text style={styles.title9}>Yilin</Text>
            <Text style={styles.subtitle5}>⭐⭐⭐</Text>
          </View>
        </View>
      </View>
      <View style={styles.address}>
        <View style={styles.components2}>
          <View style={styles.master2}>
            <View style={styles.placeholder8}>
              <Image
                style={styles.wrapperIcon9}
                resizeMode="cover"
                source={require("../assets/wrapper84.png")}
              />
            </View>
            <Text style={[styles.text2, styles.ml6]}>1</Text>
            <View style={[styles.placeholder9, styles.ml6]}>
              <Image
                style={styles.wrapperIcon10}
                resizeMode="cover"
                source={require("../assets/wrapper5.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.elementsTextBoxNavBar4, styles.ml10]}>
          <Text style={styles.title10}>
            <Text
              style={styles.centralParkCourt}
            >{`Central Park, Court 5,  `}</Text>
            <Text style={styles.newYorkNY}>New York, NY</Text>
            <Text style={styles.text3}>{` `}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
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
    top: 10,
    left: 102,
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
    top: 10,
    left: 9,
    width: 27,
    height: 27,
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 44,
    height: 44,
  },
  groupView: {
    position: "absolute",
    top: 55,
    left: 23,
    width: 247,
    height: 44,
  },
  homeIndicator1: {
    position: "absolute",
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
    display: "none",
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
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 34,
  },
  text: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  wrapperIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  wrapperIcon1: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 23,
  },
  master: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxNavBar: {
    width: 294,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  time: {
    position: "absolute",
    top: 195,
    left: 14,
    width: 358,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sportsBasketBall: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  wrapperIcon2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder1: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  wrapper: {
    flex: 1,
    position: "relative",
    height: 20,
  },
  master1: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components1: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxNavBar1: {
    width: 294,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  activity: {
    position: "absolute",
    top: 251,
    left: 14,
    width: 358,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashENPezgtyAwAIcon: {
    position: "absolute",
    height: "92.94%",
    width: "92.94%",
    top: "-0.25%",
    right: "7.31%",
    bottom: "7.31%",
    left: "-0.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon3: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder2: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge1: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge2: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#5aedff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon: {
    position: "relative",
    borderRadius: 50,
    width: 85,
    height: 85,
    flexShrink: 0,
  },
  imageCircle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paul: {
    position: "absolute",
    top: 377,
    left: 360,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage1: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashENPezgtyAwAIcon1: {
    position: "absolute",
    height: "92.94%",
    width: "92.94%",
    top: "-0.25%",
    right: "7.31%",
    bottom: "7.31%",
    left: "-0.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon4: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder3: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge3: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge4: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge5: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#5aedff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon1: {
    position: "relative",
    borderRadius: 50,
    width: 85,
    height: 85,
    flexShrink: 0,
  },
  imageCircle1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title3: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle1: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fatima: {
    position: "absolute",
    top: 377,
    left: 248,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage2: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  unsplashENPezgtyAwAIcon2: {
    position: "absolute",
    height: "92.94%",
    width: "92.94%",
    top: "-0.25%",
    right: "7.31%",
    bottom: "7.31%",
    left: "-0.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon5: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder4: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge6: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge7: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
    display: "none",
  },
  badge8: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#5aedff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon2: {
    position: "relative",
    borderRadius: 50,
    width: 85,
    height: 85,
    flexShrink: 0,
  },
  imageCircle2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title4: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle2: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    position: "absolute",
    top: 377,
    left: 135,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title5: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fefefe",
    textAlign: "left",
  },
  elementsTextBoxNavBar2: {
    position: "absolute",
    top: 314,
    left: 27,
    width: 375,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title6: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fefefe",
    textAlign: "left",
  },
  elementsTextBoxNavBar3: {
    position: "absolute",
    top: 513,
    left: 27,
    width: 375,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  multimediaImage3: {
    position: "absolute",
    marginTop: -12.71,
    marginLeft: -11.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  unsplasharxIJ2pWXXcIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "-0.27%",
    right: "0.27%",
    bottom: "0.27%",
    left: "-0.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon6: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder5: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge9: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge10: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#000",
    textAlign: "left",
  },
  badge11: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  imageIcon3: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title7: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle3: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author1: {
    position: "absolute",
    top: 377,
    left: 23,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cancel: {
    position: "absolute",
    top: "30.91%",
    left: "40.48%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable: {
    borderRadius: 12,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  cancelBeacon: {
    position: "absolute",
    left: 31,
    top: 729,
    width: 331,
    height: 55,
  },
  multimediaImage4: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashENPezgtyAwAIcon3: {
    position: "absolute",
    height: "92.94%",
    width: "92.94%",
    top: "-0.25%",
    right: "7.31%",
    bottom: "7.31%",
    left: "-0.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon7: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder6: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge12: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge13: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge14: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#5aedff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon4: {
    position: "relative",
    borderRadius: 50,
    width: 85,
    height: 85,
    flexShrink: 0,
  },
  imageCircle4: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title8: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle4: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author2: {
    position: "absolute",
    top: 572,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  moreIcon: {
    position: "absolute",
    top: 39,
    left: 297,
    width: 90,
    height: 93,
  },
  multimediaImage5: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  unsplashENPezgtyAwAIcon4: {
    position: "absolute",
    height: "92.94%",
    width: "92.94%",
    top: "-0.25%",
    right: "7.31%",
    bottom: "7.31%",
    left: "-0.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  wrapperIcon8: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder7: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge15: {
    position: "absolute",
    top: 0,
    left: 55,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 24,
    height: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  badge16: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
    display: "none",
  },
  badge17: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#5aedff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon5: {
    position: "relative",
    borderRadius: 50,
    width: 85,
    height: 85,
    flexShrink: 0,
  },
  imageCircle5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title9: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle5: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  author4: {
    position: "absolute",
    top: 572,
    left: 136,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIcon9: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder8: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  wrapperIcon10: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder9: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  centralParkCourt: {
    color: "#fff",
  },
  newYorkNY: {
    color: "rgba(0, 0, 0, 0.2)",
  },
  text3: {
    color: "#fff",
  },
  title10: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  elementsTextBoxNavBar4: {
    width: 294,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address: {
    position: "absolute",
    top: 137,
    left: 14,
    width: 358,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  senderAfterRosterConfirma: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SenderAfterRosterConfirma;
