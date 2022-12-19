import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const PastBeaconRoster = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pastBeaconRoster}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.barsStatusBariPhoneLight}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <View style={styles.groupView}>
          <Text style={styles.kitchen}>BeaconBuddy</Text>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("ProfileAttendance")}
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
        <View style={styles.activity}>
          <View style={styles.components}>
            <View style={styles.master}>
              <Image
                style={styles.sportsBasketBall}
                resizeMode="cover"
                source={require("../assets/sports--basket-ball2.png")}
              />
              <Text style={[styles.text, styles.ml6]}>1</Text>
              <View style={[styles.placeholder, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
              <View style={[styles.wrapper, styles.ml6]} />
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar, styles.ml10]}>
            <Text style={styles.title}>Basketball</Text>
          </View>
        </View>
        <View style={styles.author}>
          <View style={styles.imageCircle}>
            <ImageBackground
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image.png")}
            >
              <Image
                style={styles.multimediaImage}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge}>
                <View style={styles.placeholder1}>
                  <Image
                    style={styles.wrapperIcon1}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge2}>
                <Text style={styles.badge1}>Adv.</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow, styles.mt10]}>
            <Text style={styles.title1}>Fatima</Text>
            <Text style={styles.subtitle}>⭐⭐</Text>
          </View>
        </View>
        <View style={styles.author1}>
          <View style={styles.imageCircle1}>
            <ImageBackground
              style={styles.imageIcon1}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            >
              <Image
                style={styles.multimediaImage1}
                resizeMode="cover"
                source={require("../assets/multimedia--image10.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon1}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge3}>
                <View style={styles.placeholder2}>
                  <Image
                    style={styles.wrapperIcon2}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge5}>
                <Text style={styles.badge4}>85</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow1, styles.mt10]}>
            <Text style={styles.title2}>Amanda</Text>
            <Text style={styles.subtitle1}>⭐⭐⭐</Text>
          </View>
        </View>
        <View style={styles.elementsTextBoxNavBar1}>
          <Text style={styles.title3}>Active Roster ( 6 / 6)</Text>
        </View>
        <View style={styles.author2}>
          <View style={styles.imageCircle2}>
            <ImageBackground
              style={styles.imageIcon2}
              resizeMode="cover"
              source={require("../assets/image2.png")}
            >
              <Image
                style={styles.multimediaImage2}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplasharxIJ2pWXXcIcon}
                resizeMode="cover"
                source={require("../assets/unsplasharxij2pwxxc.png")}
              />
              <View style={styles.badge6}>
                <View style={styles.placeholder3}>
                  <Image
                    style={styles.wrapperIcon3}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <LinearGradient
                style={styles.badge8}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              >
                <Text style={styles.badge7}>Host</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow2, styles.mt10]}>
            <Text style={styles.title4}>{`Brian `}</Text>
            <Text style={styles.subtitle2}>⭐⭐⭐⭐</Text>
          </View>
        </View>
        <View style={styles.imageCircle3}>
          <View style={styles.image}>
            <Image
              style={styles.multimediaImage3}
              resizeMode="cover"
              source={require("../assets/multimedia--image.png")}
            />
            <Image
              style={styles.placeholderIcon}
              resizeMode="cover"
              source={require("../assets/placeholder13.png")}
            />
            <View style={styles.badge9}>
              <View style={styles.placeholder4}>
                <Image
                  style={styles.wrapperIcon4}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
            <View style={styles.badge10}>
              <View style={styles.placeholder5}>
                <Image
                  style={styles.wrapperIcon5}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.time1}>
        <View style={styles.components1}>
          <View style={styles.master1}>
            <Text style={styles.text1}>1</Text>
            <View style={[styles.placeholder6, styles.ml6]}>
              <Image
                style={styles.wrapperIcon6}
                resizeMode="cover"
                source={require("../assets/wrapper5.png")}
              />
            </View>
            <Image
              style={[styles.wrapperIcon7, styles.ml6]}
              resizeMode="cover"
              source={require("../assets/wrapper83.png")}
            />
          </View>
        </View>
        <View style={[styles.elementsTextBoxNavBar2, styles.ml10]}>
          <Text style={styles.title5}>
            <Text style={styles.dec22}>Dec 22 | 5:30-6:30PM — (</Text>
            <Text style={styles.attended}>Attended</Text>
            <Text style={styles.text2}>)</Text>
          </Text>
        </View>
      </View>
      <View style={styles.address}>
        <View style={styles.components2}>
          <View style={styles.master2}>
            <View style={styles.placeholder7}>
              <Image
                style={styles.wrapperIcon8}
                resizeMode="cover"
                source={require("../assets/wrapper84.png")}
              />
            </View>
            <Text style={[styles.text3, styles.ml6]}>1</Text>
            <View style={[styles.placeholder8, styles.ml6]}>
              <Image
                style={styles.wrapperIcon9}
                resizeMode="cover"
                source={require("../assets/wrapper5.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.elementsTextBoxNavBar3, styles.ml10]}>
          <Text style={styles.title6}>
            <Text
              style={styles.centralParkCourt}
            >{`Central Park, Court 5,  `}</Text>
            <Text style={styles.newYorkNY}>New York, NY</Text>
            <Text style={styles.text4}>{` `}</Text>
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.more}
        onPress={() => navigation.navigate("ChatRoom")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/more.png")}
        />
      </Pressable>
      <View style={styles.paul}>
        <View style={styles.author3}>
          <View style={styles.imageCircle4}>
            <ImageBackground
              style={styles.imageIcon3}
              resizeMode="cover"
              source={require("../assets/image3.png")}
            >
              <Image
                style={styles.multimediaImage4}
                resizeMode="cover"
                source={require("../assets/multimedia--image9.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon2}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa.png")}
              />
              <View style={styles.badge11}>
                <View style={styles.placeholder9}>
                  <Image
                    style={styles.wrapperIcon10}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge13}>
                <Text style={styles.badge12}>Adv.</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow3, styles.mt10]}>
            <Text style={styles.title7}>Paul</Text>
            <Text style={styles.subtitle3}>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>
      </View>
      <View style={styles.author4}>
        <View style={styles.imageCircle5}>
          <ImageBackground
            style={styles.imageIcon4}
            resizeMode="cover"
            source={require("../assets/image4.png")}
          >
            <Image
              style={styles.multimediaImage5}
              resizeMode="cover"
              source={require("../assets/multimedia--image10.png")}
            />
            <Image
              style={styles.unsplashENPezgtyAwAIcon3}
              resizeMode="cover"
              source={require("../assets/unsplashenpezgtyawa.png")}
            />
            <View style={styles.badge14}>
              <View style={styles.placeholder10}>
                <Image
                  style={styles.wrapperIcon11}
                  resizeMode="cover"
                  source={require("../assets/wrapper36.png")}
                />
              </View>
            </View>
            <View style={styles.badge16}>
              <Text style={styles.badge15}>85</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.elementsTextBoxTableRow4, styles.mt10]}>
          <Text style={styles.title8}>Yilin</Text>
          <Text style={styles.subtitle4}>⭐⭐⭐</Text>
        </View>
      </View>
      <View style={styles.author5}>
        <View style={styles.imageCircle6}>
          <ImageBackground
            style={styles.imageIcon5}
            resizeMode="cover"
            source={require("../assets/image5.png")}
          >
            <Image
              style={styles.multimediaImage6}
              resizeMode="cover"
              source={require("../assets/multimedia--image9.png")}
            />
            <Image
              style={styles.unsplashENPezgtyAwAIcon4}
              resizeMode="cover"
              source={require("../assets/unsplashenpezgtyawa.png")}
            />
            <View style={styles.badge17}>
              <View style={styles.placeholder11}>
                <Image
                  style={styles.wrapperIcon12}
                  resizeMode="cover"
                  source={require("../assets/wrapper36.png")}
                />
              </View>
            </View>
            <View style={styles.badge19}>
              <Text style={styles.badge18}>Adv.</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.elementsTextBoxTableRow5, styles.mt10]}>
          <Text style={styles.title9}>Patesh</Text>
          <Text style={styles.subtitle5}>⭐⭐⭐⭐⭐</Text>
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
  border: {
    position: "absolute",
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    height: 11,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    position: "absolute",
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: "#fff",
    width: 18,
    height: 7,
  },
  battery: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    position: "relative",
    width: 14,
    height: 11,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 16,
    height: 11,
  },
  time: {
    position: "absolute",
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "100",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    position: "absolute",
    top: 7,
    left: 21,
    width: 54,
    height: 21,
  },
  barsStatusBariPhoneLight: {
    position: "absolute",
    top: 0,
    left: 17,
    width: 353,
    height: 44,
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
  sportsBasketBall: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
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
  wrapper: {
    flex: 1,
    position: "relative",
    height: 20,
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
  title1: {
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
  author: {
    position: "absolute",
    top: 373,
    left: 281,
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
    display: "none",
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
    display: "none",
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
  title2: {
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
  author1: {
    position: "absolute",
    top: 373,
    left: 154,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fefefe",
    textAlign: "left",
  },
  elementsTextBoxNavBar1: {
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
  multimediaImage2: {
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
  wrapperIcon3: {
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
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge8: {
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
  imageIcon2: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
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
  author2: {
    position: "absolute",
    top: 373,
    left: 32,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage3: {
    position: "absolute",
    marginTop: -8.38,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  placeholderIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  wrapperIcon4: {
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
  badge9: {
    position: "absolute",
    top: 18,
    left: 18,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 12,
    height: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  badge10: {
    position: "absolute",
    top: 0,
    left: 18,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 12,
    height: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  image: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 30,
    height: 30,
    flexShrink: 0,
    display: "none",
  },
  imageCircle3: {
    position: "absolute",
    top: 620,
    left: 234,
    flexDirection: "row",
    alignItems: "center",
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
  wrapperIcon6: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder6: {
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
  wrapperIcon7: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 23,
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
  dec22: {
    color: "#fff",
  },
  attended: {
    color: "#37ff05",
  },
  text2: {
    color: "#fff",
  },
  title5: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  elementsTextBoxNavBar2: {
    width: 294,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  time1: {
    position: "absolute",
    top: 195,
    left: 14,
    width: 358,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
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
  text4: {
    color: "#fff",
  },
  title6: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  elementsTextBoxNavBar3: {
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
    top: 140,
    left: 14,
    width: 358,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  more: {
    position: "absolute",
    left: 297,
    top: 39,
    width: 90,
    height: 93,
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge11: {
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
  badge12: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge13: {
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
  imageIcon3: {
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
  author3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paul: {
    position: "absolute",
    top: 533,
    left: 154,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  wrapperIcon11: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder10: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge14: {
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
  badge15: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
    display: "none",
  },
  badge16: {
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
  imageCircle5: {
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
  author4: {
    position: "absolute",
    top: 533,
    left: 281,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage6: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -14.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
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
  wrapperIcon12: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder11: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge17: {
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
  badge18: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge19: {
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
  imageCircle6: {
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
  author5: {
    position: "absolute",
    top: 533,
    left: 31,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  pastBeaconRoster: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PastBeaconRoster;
