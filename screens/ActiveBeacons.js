import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ActiveBeacons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activeBeacons2}>
      <View style={styles.beaconSubmission}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={styles.hello}>
          <LinearGradient
            style={styles.rectangle}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.map1}>
            <View style={styles.map}>
              <Image
                style={styles.locationIcon}
                resizeMode="cover"
                source={require("../assets/location4.png")}
              />
            </View>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery3.png")}
          />
          <View style={styles.label}>
            <LinearGradient
              style={styles.rectangle1}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.cardTips}>Active Beacons</Text>
          </View>
          <View style={styles.groupView}>
            <View style={styles.label1}>
              <LinearGradient
                style={styles.rectangle2}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              />
              <Text style={styles.cardTips1}>2W</Text>
            </View>
            <View style={styles.label2}>
              <View style={styles.rectangle3} />
              <Text style={styles.cardTips2}>1W</Text>
            </View>
            <View style={styles.label3}>
              <View style={styles.rectangle4} />
              <Text style={styles.cardTips3}>3D</Text>
            </View>
            <View style={styles.label4}>
              <View style={styles.rectangle5} />
              <Text style={styles.cardTips4}>1D</Text>
            </View>
          </View>
        </View>
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("BeaconSubmission1")}
      >
        <LinearGradient
          style={styles.rectangle6}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        />
        <Text style={styles.login}>Create Beacon</Text>
      </TouchableOpacity>
      <View style={styles.activeBeacons}>
        <View style={styles.frame}>
          <View style={styles.groupView1}>
            <LinearGradient
              style={styles.rectangle7}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
          </View>
        </View>
        <View style={styles.timePlace}>
          <View style={styles.contentFrame}>
            <View style={styles.elementsPath}>
              <View style={styles.elementsLines}>
                <View style={styles.topLine}>
                  <Image
                    style={styles.lineSolidIcon}
                    resizeMode="cover"
                    source={require("../assets/line-solid.png")}
                  />
                </View>
              </View>
              <View style={styles.iconSpacing}>
                <View style={styles.number}>
                  <View style={styles.wrapper}>
                    <View style={styles.placeholder}>
                      <Text style={styles.text}>1</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.checkbox}>
                  <Image
                    style={styles.wrapperIcon}
                    resizeMode="cover"
                    source={require("../assets/wrapper207.png")}
                  />
                </View>
                <View style={styles.placeholder1}>
                  <Image
                    style={styles.wrapperIcon1}
                    resizeMode="cover"
                    source={require("../assets/wrapper208.png")}
                  />
                </View>
              </View>
              <View style={styles.elementsLines1}>
                <View style={styles.bottomLine}>
                  <Image
                    style={styles.lineSolidIcon1}
                    resizeMode="cover"
                    source={require("../assets/line-solid1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.content1}>
              <View style={styles.textFrame}>
                <View style={styles.elementsTextBoxTableRow}>
                  <Text style={styles.title}>John V. Lindsay</Text>
                  <Text style={styles.subtitle}>
                    <Text style={styles.newYorkNY1}>
                      <Text style={styles.newYorkNY}>New York, NY</Text>
                    </Text>
                    <Text style={styles.court11}>
                      <Text style={styles.court1}>Court 1</Text>
                    </Text>
                  </Text>
                </View>
                <View style={styles.controlFrame}>
                  <View style={styles.chevron}>
                    <View style={styles.content}>
                      <Text style={styles.detail}>10:40 AM</Text>
                      <Text style={[styles.info, styles.mt2]}>
                        <Text style={styles.aCTIVE1}>
                          <Text style={styles.aCTIVE}>ACTIVE</Text>
                        </Text>
                        <Text style={styles.in100m1}>
                          <Text style={styles.in100m}>in 100m</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.buttonFrame}>
                <View style={styles.master}>
                  <View style={styles.labelIconLeftChevron}>
                    <View style={styles.labelIconLeft}>
                      <View style={styles.placeholder2}>
                        <Image
                          style={styles.wrapperIcon2}
                          resizeMode="cover"
                          source={require("../assets/wrapper209.png")}
                        />
                      </View>
                      <Text style={[styles.label5, styles.ml8]}>
                        Total 2h 25m
                      </Text>
                      <View style={[styles.placeholder3, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon3}
                          resizeMode="cover"
                          source={require("../assets/wrapper210.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.master1, styles.ml10]}>
                  <View style={styles.labelIconLeftChevron1}>
                    <View style={styles.labelIconLeft1}>
                      <View style={styles.placeholder4}>
                        <Image
                          style={styles.wrapperIcon4}
                          resizeMode="cover"
                          source={require("../assets/wrapper210.png")}
                        />
                      </View>
                      <Text style={[styles.label6, styles.ml8]}>880 mi</Text>
                      <View style={[styles.placeholder5, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon5}
                          resizeMode="cover"
                          source={require("../assets/wrapper210.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.players}>
          <Text style={styles.people}>3 people</Text>
          <Image
            style={styles.ovalCopy2}
            resizeMode="cover"
            source={require("../assets/oval-copy-2.png")}
          />
          <Image
            style={styles.ovalCopyIcon}
            resizeMode="cover"
            source={require("../assets/oval-copy.png")}
          />
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval4.png")}
          />
        </View>
      </View>
      <Pressable style={styles.activeBeacons1}>
        <Pressable
          style={styles.frame1}
          onPress={() => navigation.navigate("ActiveReceiverRoster")}
        >
          <View style={styles.groupView2}>
            <LinearGradient
              style={styles.rectangle8}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
          </View>
        </Pressable>
        <View style={styles.timePlace1}>
          <View style={styles.contentFrame1}>
            <View style={styles.elementsPath1}>
              <View style={styles.elementsLines2}>
                <View style={styles.topLine1}>
                  <Image
                    style={styles.lineSolidIcon2}
                    resizeMode="cover"
                    source={require("../assets/line-solid.png")}
                  />
                </View>
              </View>
              <View style={styles.iconSpacing1}>
                <View style={styles.number1}>
                  <View style={styles.wrapper1}>
                    <View style={styles.placeholder6}>
                      <Text style={styles.text1}>1</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.checkbox1}>
                  <Image
                    style={styles.wrapperIcon6}
                    resizeMode="cover"
                    source={require("../assets/wrapper207.png")}
                  />
                </View>
                <View style={styles.placeholder7}>
                  <Image
                    style={styles.wrapperIcon7}
                    resizeMode="cover"
                    source={require("../assets/wrapper208.png")}
                  />
                </View>
              </View>
              <View style={styles.elementsLines3}>
                <View style={styles.bottomLine1}>
                  <Image
                    style={styles.lineSolidIcon3}
                    resizeMode="cover"
                    source={require("../assets/line-solid1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.content3}>
              <View style={styles.textFrame1}>
                <View style={styles.elementsTextBoxTableRow1}>
                  <Text style={styles.title1}>Midtown Tennis Club</Text>
                  <Text style={styles.subtitle1}>
                    <Text style={styles.newYorkNY3}>
                      <Text style={styles.newYorkNY2}>New York, NY</Text>
                    </Text>
                    <Text style={styles.court13}>
                      <Text style={styles.court12}>Court 1</Text>
                    </Text>
                  </Text>
                </View>
                <View style={styles.controlFrame1}>
                  <View style={styles.chevron1}>
                    <View style={styles.content2}>
                      <Text style={styles.detail1}>8:30PM</Text>
                      <Text style={[styles.info1, styles.mt2]}>
                        <Text style={styles.aCTIVE3}>
                          <Text style={styles.aCTIVE2}>ACTIVE</Text>
                        </Text>
                        <Text style={styles.text3}>
                          <Text style={styles.text2}>12/24</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.buttonFrame1}>
                <View style={styles.master2}>
                  <View style={styles.labelIconLeftChevron2}>
                    <View style={styles.labelIconLeft2}>
                      <View style={styles.placeholder8}>
                        <Image
                          style={styles.wrapperIcon8}
                          resizeMode="cover"
                          source={require("../assets/wrapper149.png")}
                        />
                      </View>
                      <Text style={[styles.label7, styles.ml8]}>
                        Total 2h 25m
                      </Text>
                      <View style={[styles.placeholder9, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon9}
                          resizeMode="cover"
                          source={require("../assets/wrapper149.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.master3, styles.ml10]}>
                  <View style={styles.labelIconLeftChevron3}>
                    <View style={styles.labelIconLeft3}>
                      <View style={styles.placeholder10}>
                        <Image
                          style={styles.wrapperIcon10}
                          resizeMode="cover"
                          source={require("../assets/wrapper149.png")}
                        />
                      </View>
                      <Text style={[styles.label8, styles.ml8]}>880 mi</Text>
                      <View style={[styles.placeholder11, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon11}
                          resizeMode="cover"
                          source={require("../assets/wrapper149.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.players1}>
          <Text style={styles.people1}>2 people</Text>
        </View>
        <Image
          style={styles.ovalCopy21}
          resizeMode="cover"
          source={require("../assets/oval-copy-21.png")}
        />
        <Image
          style={styles.ovalCopy3}
          resizeMode="cover"
          source={require("../assets/oval-copy-3.png")}
        />
        <Image
          style={styles.ovalCopyIcon1}
          resizeMode="cover"
          source={require("../assets/oval-copy1.png")}
        />
      </Pressable>
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
          <View style={styles.frameView} />
        </View>
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SelectDay")}
        >
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Menu")}
          >
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={require("../assets/back6.png")}
            />
          </Pressable>
        </TouchableOpacity>
      </View>
      <View style={styles.logoBeacon}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
        <Text style={styles.b}>B</Text>
      </View>
      <View style={styles.more1}>
        <LinearGradient
          style={styles.rectangle11}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.pathIcon1}
          resizeMode="cover"
          source={require("../assets/path2.png")}
        />
        <Pressable
          style={styles.logoBeacon1}
          onPress={() => navigation.navigate("SecondMenuBeacons")}
        >
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector-4.png")}
          />
          <Image
            style={styles.vectorIcon5}
            resizeMode="cover"
            source={require("../assets/vector-5.png")}
          />
          <Text style={styles.b1}>B</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.mapMarker}
        onPress={() => navigation.navigate("ActiveBeacons1")}
      >
        <View style={styles.imageCircle}>
          <View style={styles.image}>
            <Image
              style={styles.multimediaImage}
              resizeMode="cover"
              source={require("../assets/multimedia--image.png")}
            />
            <Image
              style={styles.placeholderIcon}
              resizeMode="cover"
              source={require("../assets/placeholder19.png")}
            />
            <View style={styles.badge}>
              <View style={styles.placeholder12}>
                <Image
                  style={styles.wrapperIcon12}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
            <View style={styles.badge1}>
              <View style={styles.placeholder13}>
                <Image
                  style={styles.wrapperIcon13}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={styles.mapMarker1}>
        <View style={styles.imageCircle1}>
          <View style={styles.image1}>
            <Image
              style={styles.multimediaImage1}
              resizeMode="cover"
              source={require("../assets/multimedia--image40.png")}
            />
            <Image
              style={styles.placeholderIcon1}
              resizeMode="cover"
              source={require("../assets/placeholder20.png")}
            />
            <View style={styles.badge2}>
              <View style={styles.placeholder14}>
                <Image
                  style={styles.wrapperIcon14}
                  resizeMode="cover"
                  source={require("../assets/wrapper20.png")}
                />
              </View>
            </View>
            <View style={styles.badge3}>
              <View style={styles.placeholder15}>
                <Image
                  style={styles.wrapperIcon15}
                  resizeMode="cover"
                  source={require("../assets/wrapper20.png")}
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
  mt2: {
    marginTop: 2,
  },
  ml8: {
    marginLeft: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  rectangleIcon: {
    position: "absolute",
    top: 225,
    left: 0,
    borderRadius: 30,
    width: 390,
    height: 619,
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
  locationIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  map: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  map1: {
    position: "absolute",
    width: "100%",
    top: 109,
    right: "0%",
    left: "0%",
    backgroundColor: "#fff",
    height: 555,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  rectangle1: {
    position: "absolute",
    height: "90.48%",
    width: "98.43%",
    top: "0%",
    right: "1.57%",
    bottom: "9.52%",
    left: "0%",
    borderRadius: 19,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  cardTips: {
    position: "absolute",
    marginTop: -13,
    width: "98.03%",
    top: "50%",
    left: "1.97%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 34,
  },
  label: {
    position: "absolute",
    height: "4.98%",
    width: "43.08%",
    top: "60.19%",
    right: "50%",
    bottom: "34.83%",
    left: "6.92%",
  },
  rectangle2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  cardTips1: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label1: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "78.26%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips2: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label2: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "52.17%",
    bottom: "0%",
    left: "26.09%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips3: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label3: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "26.09%",
    bottom: "0%",
    left: "52.17%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips4: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label4: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "78.26%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  groupView: {
    position: "absolute",
    height: "3.2%",
    width: "41.28%",
    top: "60.78%",
    right: "1.28%",
    bottom: "36.02%",
    left: "57.44%",
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
  beaconSubmission: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  rectangle6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.59)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  login: {
    position: "absolute",
    marginTop: -12,
    width: "41.24%",
    top: "50%",
    left: "29.38%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    height: "5.92%",
    width: "87.95%",
    top: "87.8%",
    right: "5.9%",
    bottom: "6.28%",
    left: "6.15%",
    overflow: "hidden",
  },
  rectangle7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 255,
    height: 145,
    backgroundColor: "transparent",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 255,
    height: 145,
  },
  frame: {
    position: "absolute",
    top: 15,
    left: 177,
    width: 255,
    height: 145,
  },
  lineSolidIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxHeight: "100%",
    width: 0,
    flexShrink: 0,
  },
  topLine: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#4141e7",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 8,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "none",
  },
  elementsLines: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  placeholder: {
    position: "absolute",
    height: "120%",
    width: "120%",
    top: "-10%",
    right: "-10%",
    bottom: "-10%",
    left: "-10%",
    borderRadius: 20,
    backgroundColor: "#4141e7",
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  number: {
    position: "absolute",
    marginTop: -8,
    width: "88.89%",
    top: "50%",
    right: "5.56%",
    left: "5.56%",
    borderRadius: 100,
    height: 16,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
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
  checkbox: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    borderRadius: 100,
    width: 16,
    height: 16,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
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
    position: "absolute",
    marginTop: -8,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#11bb8d",
    width: 16,
    height: 16,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSpacing: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  lineSolidIcon1: {
    position: "relative",
    width: 0,
    height: 16,
    flexShrink: 0,
  },
  bottomLine: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#11bb8d",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsLines1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  elementsPath: {
    alignSelf: "stretch",
    width: 64,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  title: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  newYorkNY: {
    fontSize: 13,
    fontFamily: "Archivo",
    color: "#747b84",
  },
  newYorkNY1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  court1: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
  },
  court11: {
    margin: 0,
  },
  subtitle: {
    alignSelf: "stretch",
    position: "relative",
    textAlign: "left",
  },
  elementsTextBoxTableRow: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  detail: {
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontFamily: "Archivo",
    color: "#5aedff",
    textAlign: "right",
  },
  aCTIVE: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#5aedff",
  },
  aCTIVE1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  in100m: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#414249",
  },
  in100m1: {
    margin: 0,
  },
  info: {
    position: "relative",
    textAlign: "right",
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  chevron: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  controlFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  label5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
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
    width: 16,
    height: 16,
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
    justifyContent: "center",
  },
  labelIconLeftChevron: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#dadee3",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  master: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  label6: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
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
    width: 16,
    height: 16,
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
    justifyContent: "center",
  },
  labelIconLeftChevron1: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#dadee3",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  master1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  content1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  timePlace: {
    position: "absolute",
    height: "80.63%",
    width: "53.7%",
    top: "0%",
    right: "0.93%",
    bottom: "19.38%",
    left: "45.37%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  people: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    left: "84.06%",
    fontSize: 14,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
    opacity: 0.48,
  },
  ovalCopy2: {
    position: "absolute",
    height: "113.56%",
    width: "11.01%",
    top: "11.86%",
    right: "21.45%",
    bottom: "-25.42%",
    left: "67.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ovalCopyIcon: {
    position: "absolute",
    height: "113.56%",
    width: "17.39%",
    top: "-25.42%",
    right: "86.09%",
    bottom: "11.86%",
    left: "-3.48%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ovalIcon: {
    position: "absolute",
    top: 7,
    left: 206,
    width: 60,
    height: 67,
  },
  players: {
    position: "absolute",
    marginTop: 8,
    width: "79.86%",
    top: "50%",
    right: "20.14%",
    left: "0%",
    height: 59,
  },
  activeBeacons: {
    position: "absolute",
    top: 550,
    left: 119,
    width: 432,
    height: 160,
  },
  rectangle8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 255,
    height: 145,
    backgroundColor: "transparent",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 255,
    height: 145,
  },
  frame1: {
    position: "absolute",
    top: 15,
    left: 0,
    width: 255,
    height: 145,
  },
  lineSolidIcon2: {
    alignSelf: "stretch",
    position: "relative",
    maxHeight: "100%",
    width: 0,
    flexShrink: 0,
  },
  topLine1: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#4141e7",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 8,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "none",
  },
  elementsLines2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  placeholder6: {
    position: "absolute",
    height: "120%",
    width: "120%",
    top: "-10%",
    right: "-10%",
    bottom: "-10%",
    left: "-10%",
    borderRadius: 20,
    backgroundColor: "#4141e7",
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  number1: {
    position: "absolute",
    marginTop: -8,
    width: "88.89%",
    top: "50%",
    right: "5.56%",
    left: "5.56%",
    borderRadius: 100,
    height: 16,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
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
  checkbox1: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    borderRadius: 100,
    width: 16,
    height: 16,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
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
  placeholder7: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#11bb8d",
    width: 16,
    height: 16,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSpacing1: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  lineSolidIcon3: {
    position: "relative",
    width: 0,
    height: 16,
    flexShrink: 0,
  },
  bottomLine1: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#11bb8d",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsLines3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  elementsPath1: {
    alignSelf: "stretch",
    width: 64,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  title1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  newYorkNY2: {
    fontSize: 13,
    fontFamily: "Archivo",
    color: "#747b84",
  },
  newYorkNY3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  court12: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
  },
  court13: {
    margin: 0,
  },
  subtitle1: {
    alignSelf: "stretch",
    position: "relative",
    textAlign: "left",
  },
  elementsTextBoxTableRow1: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  detail1: {
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontFamily: "Archivo",
    color: "#5aedff",
    textAlign: "right",
  },
  aCTIVE2: {
    color: "#5aedff",
  },
  aCTIVE3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    color: "#9ca7a8",
  },
  text3: {
    margin: 0,
  },
  info1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "right",
  },
  content2: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  chevron1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  controlFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
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
  placeholder8: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  label7: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  wrapperIcon9: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder9: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelIconLeftChevron2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#dadee3",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  master2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wrapperIcon10: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder10: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  label8: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  wrapperIcon11: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder11: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelIconLeftChevron3: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#dadee3",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  master3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  content3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  timePlace1: {
    position: "absolute",
    height: "80.63%",
    width: "70.73%",
    top: "0%",
    right: "23.48%",
    bottom: "19.38%",
    left: "5.79%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  people1: {
    position: "absolute",
    marginTop: -14,
    top: "50%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -1,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
    opacity: 0.48,
  },
  players1: {
    position: "absolute",
    marginTop: 35,
    width: "16.77%",
    top: "50%",
    right: "57.01%",
    left: "26.22%",
    height: 28,
  },
  ovalCopy21: {
    position: "absolute",
    height: "41.88%",
    width: "18.29%",
    top: "59.38%",
    right: "71.34%",
    bottom: "-1.25%",
    left: "10.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ovalCopy3: {
    position: "absolute",
    height: "41.88%",
    width: "18.29%",
    top: "59.38%",
    right: "79.57%",
    bottom: "-1.25%",
    left: "2.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ovalCopyIcon1: {
    position: "absolute",
    height: "41.88%",
    width: "18.29%",
    top: "59.38%",
    right: "-3.35%",
    bottom: "-1.25%",
    left: "85.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  activeBeacons1: {
    position: "absolute",
    top: 550,
    left: 24,
    width: 328,
    height: 160,
  },
  kitchen: {
    position: "absolute",
    top: 10,
    left: 112,
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
    display: "none",
    backgroundColor: "transparent",
  },
  pathIcon: {
    position: "absolute",
    top: 66,
    left: 339,
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
  frameView: {
    position: "absolute",
    top: 0,
    left: 299,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  more: {
    position: "absolute",
    top: 0,
    left: 7,
    width: 365,
    height: 44,
  },
  backIcon: {
    position: "relative",
    width: 27,
    height: 26,
    flexShrink: 0,
  },
  framePressable: {
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
    width: 61,
    height: 44,
  },
  head: {
    position: "absolute",
    top: 55,
    left: 7,
    width: 372,
    height: 44,
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 17,
  },
  vectorIcon1: {
    position: "absolute",
    top: 0,
    left: 35,
    width: 7,
    height: 17,
  },
  vectorIcon2: {
    position: "absolute",
    top: 0,
    left: 8,
    width: 19,
    height: 24,
  },
  b: {
    position: "absolute",
    top: 1,
    left: 13,
    fontSize: 14,
    fontFamily: "Della Respira",
    color: "#fff",
    textAlign: "center",
    width: 9,
    height: 11,
  },
  logoBeacon: {
    position: "absolute",
    top: 67,
    left: 330,
    width: 35,
    height: 24,
    display: "none",
  },
  rectangle11: {
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
  pathIcon1: {
    position: "absolute",
    top: 69,
    left: 336,
    width: 19,
    height: 19,
  },
  vectorIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 18,
  },
  vectorIcon4: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 7,
    height: 18,
  },
  vectorIcon5: {
    position: "absolute",
    top: -1,
    left: 7,
    width: 20,
    height: 26,
  },
  b1: {
    position: "absolute",
    top: 1,
    left: 13,
    fontSize: 14,
    fontFamily: "Della Respira",
    color: "#fff",
    textAlign: "center",
    width: 9,
    height: 11,
  },
  logoBeacon1: {
    position: "absolute",
    top: 10,
    left: 4,
    width: 35,
    height: 24,
  },
  more1: {
    position: "absolute",
    top: 58,
    left: 322,
    width: 44,
    height: 44,
  },
  multimediaImage: {
    position: "absolute",
    marginTop: -7.88,
    marginLeft: -7.5,
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
  wrapperIcon12: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder12: {
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
  wrapperIcon13: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder13: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge1: {
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
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
  },
  imageCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 29,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mapMarker: {
    position: "absolute",
    top: 407,
    left: 202,
    width: 29,
    height: 29,
  },
  multimediaImage1: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -11.88,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  placeholderIcon1: {
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
  wrapperIcon14: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder14: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge2: {
    position: "absolute",
    top: 42,
    left: 42,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 18,
    height: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  wrapperIcon15: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder15: {
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
    left: 42,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 18,
    height: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  image1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  imageCircle1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 60,
    height: 60,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mapMarker1: {
    position: "absolute",
    top: 233,
    left: 150,
    width: 60,
    height: 60,
  },
  activeBeacons2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ActiveBeacons;
