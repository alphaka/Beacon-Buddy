import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const MenuNotFound = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuNotFound}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={styles.text}>{`<-- `}</Text>
        <View style={styles.activitiesSelecitonStuff}>
          <View style={styles.cardBoxing}>
            <LinearGradient
              style={styles.rectangle1}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name}>Boxing</Text>
            <Image
              style={styles.boxingIcon}
              resizeMode="cover"
              source={require("../assets/boxing.png")}
            />
          </View>
          <View style={styles.cardChess}>
            <LinearGradient
              style={styles.rectangle2}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name1}>Chess</Text>
            <Image
              style={styles.chessIcon}
              resizeMode="cover"
              source={require("../assets/chess.png")}
            />
          </View>
          <View style={styles.cardGymming}>
            <LinearGradient
              style={styles.rectangle3}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name2}>Boxing</Text>
            <Image
              style={styles.gymmingIcon}
              resizeMode="cover"
              source={require("../assets/gymming.png")}
            />
          </View>
          <View style={styles.cardTennis}>
            <LinearGradient
              style={styles.rectangle4}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name3}>Tennis</Text>
            <Image
              style={styles.tennisIcon}
              resizeMode="cover"
              source={require("../assets/tennis.png")}
            />
          </View>
          <View style={styles.cardTableTennis}>
            <LinearGradient
              style={styles.rectangle5}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name4}>
              <Text style={styles.table}>Table</Text>
              <Text style={styles.tennis}>Tennis</Text>
            </Text>
            <Image
              style={styles.tableTennisIcon}
              resizeMode="cover"
              source={require("../assets/table-tennis.png")}
            />
          </View>
          <View style={styles.cardRugby}>
            <LinearGradient
              style={styles.rectangle6}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name5}>Rugby</Text>
            <Image
              style={styles.rugbyIcon}
              resizeMode="cover"
              source={require("../assets/rugby.png")}
            />
          </View>
          <View style={styles.cardSoccer}>
            <LinearGradient
              style={styles.rectangle7}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.name6}>Soccer</Text>
            <Image
              style={styles.soccerIcon}
              resizeMode="cover"
              source={require("../assets/soccer.png")}
            />
          </View>
          <View style={styles.cardBasketball}>
            <LinearGradient
              style={styles.rectangle8}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Image
              style={styles.basketballIcon}
              resizeMode="cover"
              source={require("../assets/basketball.png")}
            />
            <Text style={styles.name7}>Basketball</Text>
          </View>
          <Text style={styles.name8}>Basketball</Text>
          <Text style={styles.name9}>My Activities</Text>
          <Image
            style={styles.arrowsIcon}
            resizeMode="cover"
            source={require("../assets/arrows.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.homerosterButtons}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SelectDay")}
        >
          <View style={styles.buttonGroup}>
            <View style={styles.buttons}>
              <View style={styles.mediumButtonMedium}>
                <View style={styles.master}>
                  <LinearGradient
                    style={styles.labelIconLeftChevron}
                    locations={[0, 1]}
                    colors={["#0061c8", "#5aedff"]}
                  >
                    <View style={styles.spacer} />
                    <View style={styles.labelIconLeft}>
                      <View style={styles.placeholder}>
                        <Image
                          style={styles.wrapperIcon}
                          resizeMode="cover"
                          source={require("../assets/wrapper.png")}
                        />
                      </View>
                      <Text style={[styles.label, styles.ml8]}>
                        Create Beacon
                      </Text>
                      <View style={[styles.placeholder1, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon1}
                          resizeMode="cover"
                          source={require("../assets/wrapper1.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={styles.arrowsDownArrow}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow.png")}
                    />
                  </LinearGradient>
                </View>
              </View>
              <Pressable
                style={[styles.mediumButtonMedium1, styles.ml10]}
                onPress={() => navigation.navigate("BeaconSubmission1")}
              >
                <View style={styles.master1}>
                  <LinearGradient
                    style={styles.labelIconLeftChevron1}
                    locations={[0, 1]}
                    colors={["#0061c8", "#5aedff"]}
                  >
                    <View style={styles.spacer1} />
                    <View style={styles.labelIconLeft1}>
                      <Image
                        style={styles.playersIcon}
                        resizeMode="cover"
                        source={require("../assets/players-icon.png")}
                      />
                      <Text style={[styles.label1, styles.ml8]}>
                        Create Beacon
                      </Text>
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
                      source={require("../assets/arrows--down-arrow.png")}
                    />
                  </LinearGradient>
                </View>
              </Pressable>
            </View>
            <View style={styles.homeIndicator2}>
              <View style={styles.homeIndicator1}>
                <View style={styles.homeIndicator} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.noBeaconFound}>No beacon found</Text>
      </View>
      <View style={styles.head}>
        <Text style={styles.kitchen}>BeaconBuddy</Text>
        <View style={styles.more}>
          <LinearGradient
            style={styles.rectangle9}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
          <LinearGradient
            style={styles.rectangle10}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.frameView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
        <View style={styles.back}>
          <View style={styles.frameView1}>
            <Image
              style={styles.avatarCnIcon}
              resizeMode="cover"
              source={require("../assets/avatar-cn.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.barsHomeIndicatoriPhoneLig}>
        <View style={styles.homeIndicator3} />
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
      <View style={styles.groupsLarge}>
        <View style={styles.line}>
          <View style={styles.components}>
            <View style={styles.master2}>
              <Image
                style={styles.basketballIcon1}
                resizeMode="cover"
                source={require("../assets/basketball1.png")}
              />
              <Text style={[styles.label2, styles.ml6]}>2</Text>
              <View style={[styles.placeholder3, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon3}
                  resizeMode="cover"
                  source={require("../assets/wrapper3.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.components1, styles.ml10]}>
            <View style={styles.master3}>
              <View style={styles.placeholder4}>
                <Image
                  style={styles.wrapperIcon4}
                  resizeMode="cover"
                  source={require("../assets/wrapper4.png")}
                />
              </View>
              <Text style={[styles.label3, styles.ml6]}>Feb 6</Text>
              <View style={[styles.placeholder5, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon5}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
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
  ml6: {
    marginLeft: 6,
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
  batteryIcon: {
    position: "absolute",
    height: "6.58%",
    width: "14.13%",
    top: "89.69%",
    right: "77.07%",
    bottom: "3.73%",
    left: "8.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  text: {
    position: "absolute",
    top: 313,
    left: -223,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#000",
    textAlign: "left",
    display: "none",
    alignItems: "center",
    width: 198,
    height: 109,
  },
  rectangle1: {
    position: "absolute",
    height: "125%",
    width: "94.83%",
    top: "-5.17%",
    right: "6.9%",
    bottom: "-19.83%",
    left: "-1.72%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name: {
    position: "absolute",
    height: "14.53%",
    width: "95.03%",
    top: "98.2%",
    left: "-1.69%",
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  boxingIcon: {
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
  cardBoxing: {
    position: "absolute",
    height: "25.93%",
    width: "25.51%",
    top: "15.42%",
    right: "50.82%",
    bottom: "58.64%",
    left: "23.68%",
  },
  rectangle2: {
    position: "absolute",
    height: "151.04%",
    width: "114.58%",
    top: "-19.79%",
    right: "1.04%",
    bottom: "-31.25%",
    left: "-15.62%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name1: {
    position: "absolute",
    height: "17.56%",
    width: "114.83%",
    top: "105.12%",
    left: "-15.59%",
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  chessIcon: {
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
  cardChess: {
    position: "absolute",
    height: "21.46%",
    width: "21.11%",
    top: "13.86%",
    right: "34.76%",
    bottom: "64.68%",
    left: "44.13%",
  },
  rectangle3: {
    position: "absolute",
    height: "139.42%",
    width: "105.77%",
    top: "-8.65%",
    right: "7.69%",
    bottom: "-30.77%",
    left: "-13.46%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name2: {
    position: "absolute",
    height: "16.21%",
    width: "106%",
    top: "106.65%",
    left: "-13.43%",
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  gymmingIcon: {
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
  cardGymming: {
    position: "absolute",
    height: "23.25%",
    width: "22.87%",
    top: "16.1%",
    right: "15.63%",
    bottom: "60.66%",
    left: "61.5%",
  },
  rectangle4: {
    position: "absolute",
    height: "68.14%",
    width: "57.22%",
    top: "7.62%",
    right: "-7.58%",
    bottom: "24.24%",
    left: "50.36%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name3: {
    position: "absolute",
    height: "8.77%",
    width: "57.34%",
    top: "62.71%",
    left: "50.38%",
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  tennisIcon: {
    position: "absolute",
    height: "78.02%",
    width: "78.02%",
    top: "73.32%",
    right: "21.98%",
    bottom: "-51.34%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardTennis: {
    position: "absolute",
    height: "45.87%",
    width: "45.12%",
    top: "14.19%",
    right: "54.88%",
    bottom: "39.94%",
    left: "0%",
  },
  rectangle5: {
    position: "absolute",
    height: "96.65%",
    width: "80.82%",
    top: "-3.21%",
    right: "52.07%",
    bottom: "6.56%",
    left: "-32.89%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  table: {
    marginBlockStart: 0,
    marginBlockEnd: 2,
  },
  tennis: {
    margin: 0,
  },
  name4: {
    position: "absolute",
    height: "25.82%",
    width: "80.82%",
    top: "61.56%",
    left: "-32.89%",
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  tableTennisIcon: {
    position: "absolute",
    height: "79.23%",
    width: "78.24%",
    top: "74.32%",
    right: "21.76%",
    bottom: "-53.55%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardTableTennis: {
    position: "absolute",
    height: "32.34%",
    width: "31.94%",
    top: "23.24%",
    right: "0%",
    bottom: "44.42%",
    left: "68.06%",
  },
  rectangle6: {
    position: "absolute",
    height: "73.7%",
    width: "60.43%",
    top: "20.69%",
    right: "16.97%",
    bottom: "5.62%",
    left: "22.61%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name5: {
    position: "absolute",
    height: "9.2%",
    width: "60.7%",
    top: "78.3%",
    left: "22.54%",
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  rugbyIcon: {
    position: "absolute",
    height: "77.15%",
    width: "76.23%",
    top: "28.59%",
    right: "23.77%",
    bottom: "-5.73%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardRugby: {
    position: "absolute",
    height: "51.87%",
    width: "50.58%",
    top: "22.35%",
    right: "44.43%",
    bottom: "25.78%",
    left: "4.99%",
  },
  rectangle7: {
    position: "absolute",
    height: "95.53%",
    width: "77.65%",
    top: "10.61%",
    right: "18.99%",
    bottom: "-6.15%",
    left: "3.35%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  name6: {
    position: "absolute",
    height: "11.93%",
    width: "78.01%",
    top: "84.36%",
    left: "3.27%",
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  soccerIcon: {
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
  cardSoccer: {
    position: "absolute",
    height: "40.01%",
    width: "39.36%",
    top: "28.84%",
    right: "2.88%",
    bottom: "31.15%",
    left: "57.76%",
  },
  rectangle8: {
    position: "absolute",
    height: "76.85%",
    width: "96.12%",
    top: "30.56%",
    right: "1.94%",
    bottom: "-7.41%",
    left: "1.94%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  basketballIcon: {
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
  name7: {
    position: "absolute",
    height: "9.36%",
    width: "96.28%",
    top: "90.64%",
    left: "1.94%",
    fontSize: 25,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    display: "none",
  },
  cardBasketball: {
    position: "absolute",
    height: "72.43%",
    width: "45.3%",
    top: "22.8%",
    right: "23.99%",
    bottom: "4.77%",
    left: "30.71%",
  },
  name8: {
    position: "absolute",
    height: "6.78%",
    width: "43.61%",
    top: "93.22%",
    left: "31.59%",
    fontSize: 25,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  name9: {
    position: "absolute",
    height: "6.78%",
    width: "43.61%",
    top: "0%",
    left: "32.25%",
    fontSize: 25,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  arrowsIcon: {
    position: "absolute",
    height: "5.37%",
    width: "61.57%",
    top: "93.44%",
    right: "15.63%",
    bottom: "1.19%",
    left: "22.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  activitiesSelecitonStuff: {
    position: "absolute",
    top: 172,
    left: -50,
    width: 455,
    height: 447,
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
    display: "none",
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
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
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
    display: "none",
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
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
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
    display: "none",
  },
  buttons: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
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
  homeIndicator1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicator2: {
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
  },
  homerosterButtons: {
    position: "absolute",
    marginLeft: -180,
    top: 740,
    left: "50%",
    width: 357,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noBeaconFound: {
    position: "absolute",
    top: 622,
    left: 41,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#fc466b",
    textAlign: "center",
    width: 305,
    height: 54,
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
  kitchen: {
    position: "absolute",
    top: 25,
    left: 128,
    fontSize: 18,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 148,
    height: 30,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  rectangle9: {
    position: "absolute",
    top: 0,
    left: 310,
    borderRadius: 27,
    shadowColor: "#333541",
    shadowOffset: {
      width: -8,
      height: -2,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    width: 45,
    height: 44,
    backgroundColor: "transparent",
  },
  pathIcon: {
    position: "absolute",
    top: 11,
    left: 324,
    width: 20,
    height: 19,
  },
  rectangle10: {
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
    width: 45,
    height: 44,
    backgroundColor: "transparent",
  },
  vectorIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 299,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  more: {
    position: "absolute",
    top: 15,
    left: 23,
    width: 365,
    height: 44,
  },
  avatarCnIcon: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 89,
    height: 73,
  },
  head: {
    position: "absolute",
    top: 40,
    left: 0,
    width: 388,
    height: 73,
  },
  homeIndicator3: {
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
  basketballIcon1: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  label2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    backgroundColor: "#fff",
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
  components: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label3: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master3: {
    flex: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#303239",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  components1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupsLarge: {
    position: "absolute",
    width: "96.15%",
    top: 113,
    right: "1.79%",
    left: "2.05%",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  menuNotFound: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    display: "none",
  },
});

export default MenuNotFound;
