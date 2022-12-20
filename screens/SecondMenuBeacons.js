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

const SecondMenuBeacons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.secondMenuBeacons}>
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
        <View style={styles.more}>
          <LinearGradient
            style={styles.rectangle1}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Pressable
            style={styles.whatsAppImage20221215At6}
            onPress={() => navigation.navigate("Menu")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/whatsapp-image-20221215-at-620-1.png")}
            />
          </Pressable>
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path2.png")}
          />
        </View>
      </View>
      <View style={styles.components}>
        <View style={styles.master}>
          <View style={styles.placeholder}>
            <Image
              style={styles.wrapperIcon}
              resizeMode="cover"
              source={require("../assets/wrapper11.png")}
            />
          </View>
          <Text style={[styles.label, styles.ml6]}>2/5</Text>
          <View style={[styles.placeholder1, styles.ml6]}>
            <Image
              style={styles.wrapperIcon1}
              resizeMode="cover"
              source={require("../assets/wrapper5.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupsMediumCardVert}>
        <View style={styles.author}>
          <View style={styles.imageCircle}>
            <View style={styles.image}>
              <Image
                style={styles.multimediaImage}
                resizeMode="cover"
                source={require("../assets/multimedia--image43.png")}
              />
              <Image
                style={styles.unsplashHatkchPiQMIcon}
                resizeMode="cover"
                source={require("../assets/unsplashhatkch-piqm.png")}
              />
              <View style={styles.badge}>
                <View style={styles.placeholder2}>
                  <Image
                    style={styles.wrapperIcon2}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge2}>
                <Text style={styles.badge1}>+</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow, styles.mt10]}>
            <Text style={styles.title}>Whitney</Text>
            <Text style={styles.subtitle}>⭐⭐⭐</Text>
          </View>
        </View>
        <View style={[styles.author1, styles.ml30]}>
          <View style={styles.imageCircle1}>
            <View style={styles.image1}>
              <Image
                style={styles.multimediaImage1}
                resizeMode="cover"
                source={require("../assets/multimedia--image43.png")}
              />
              <Image
                style={styles.unsplasharxIJ2pWXXcIcon}
                resizeMode="cover"
                source={require("../assets/unsplasharxij2pwxxc6.png")}
              />
              <View style={styles.badge3}>
                <View style={styles.placeholder3}>
                  <Image
                    style={styles.wrapperIcon3}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge5}>
                <Text style={styles.badge4}>+</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow1, styles.mt10]}>
            <Text style={styles.title1}>Ben</Text>
            <Text style={styles.subtitle1}>⭐⭐</Text>
          </View>
        </View>
        <View style={[styles.author2, styles.ml30]}>
          <View style={styles.imageCircle2}>
            <View style={styles.image2}>
              <Image
                style={styles.multimediaImage2}
                resizeMode="cover"
                source={require("../assets/multimedia--image43.png")}
              />
              <Image
                style={styles.unsplashENPezgtyAwAIcon}
                resizeMode="cover"
                source={require("../assets/unsplashenpezgtyawa19.png")}
              />
              <View style={styles.badge6}>
                <View style={styles.placeholder4}>
                  <Image
                    style={styles.wrapperIcon4}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <View style={styles.badge8}>
                <Text style={styles.badge7}>+</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow2, styles.mt10]}>
            <Text style={styles.title2}>George</Text>
            <Text style={styles.subtitle2}>⭐⭐⭐</Text>
          </View>
        </View>
        <View style={[styles.author3, styles.ml30]}>
          <View style={styles.imageCircle3}>
            <View style={styles.image3}>
              <Image
                style={styles.multimediaImage3}
                resizeMode="cover"
                source={require("../assets/multimedia--image46.png")}
              />
              <Image
                style={styles.unsplash4u7VzDgNgLIIcon}
                resizeMode="cover"
                source={require("../assets/unsplash4u7vzdgngli.png")}
              />
              <View style={styles.badge9}>
                <View style={styles.placeholder5}>
                  <Image
                    style={styles.wrapperIcon5}
                    resizeMode="cover"
                    source={require("../assets/wrapper189.png")}
                  />
                </View>
              </View>
              <View style={styles.badge11}>
                <Text style={styles.badge10}>4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow3, styles.mt10]}>
            <Text style={styles.title3}>James</Text>
            <Text style={styles.subtitle3}>⭐⭐</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <View style={styles.container}>
          <View style={styles.title5}>
            <Text style={styles.title4}>Past Beacons</Text>
          </View>
          <View style={styles.action1}>
            <Text style={styles.action}>See all</Text>
          </View>
        </View>
      </View>
      <View style={styles.pastBeacons}>
        <View style={styles.author4}>
          <View style={styles.imageCircle4}>
            <ImageBackground
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image41.png")}
            >
              <Image
                style={styles.multimediaImage4}
                resizeMode="cover"
                source={require("../assets/multimedia--image43.png")}
              />
              <Image
                style={styles.unsplashHatkchPiQMIcon1}
                resizeMode="cover"
                source={require("../assets/unsplashhatkch-piqm1.png")}
              />
              <View style={styles.badge12}>
                <View style={styles.placeholder6}>
                  <Image
                    style={styles.wrapperIcon6}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <LinearGradient
                style={styles.badge14}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              >
                <Text style={styles.badge13}>+</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow4, styles.mt10]}>
            <Text style={styles.title6}>Central Park</Text>
            <Text style={styles.subtitle4}>Dec 18</Text>
          </View>
        </View>
        <View style={[styles.author5, styles.ml30]}>
          <View style={styles.imageCircle5}>
            <ImageBackground
              style={styles.imageIcon1}
              resizeMode="cover"
              source={require("../assets/image42.png")}
            >
              <Image
                style={styles.multimediaImage5}
                resizeMode="cover"
                source={require("../assets/multimedia--image43.png")}
              />
              <Image
                style={styles.unsplashHatkchPiQMIcon2}
                resizeMode="cover"
                source={require("../assets/unsplashhatkch-piqm1.png")}
              />
              <View style={styles.badge15}>
                <View style={styles.placeholder7}>
                  <Image
                    style={styles.wrapperIcon7}
                    resizeMode="cover"
                    source={require("../assets/wrapper36.png")}
                  />
                </View>
              </View>
              <LinearGradient
                style={styles.badge17}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              >
                <Text style={styles.badge16}>+</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={[styles.elementsTextBoxTableRow5, styles.mt10]}>
            <Text style={styles.title7}>Levien Gym</Text>
            <Text style={styles.subtitle5}>Dec 17</Text>
          </View>
        </View>
        <View style={[styles.author7, styles.ml30]}>
          <View style={styles.author6}>
            <View style={styles.imageCircle6}>
              <ImageBackground
                style={styles.imageIcon2}
                resizeMode="cover"
                source={require("../assets/image43.png")}
              >
                <Image
                  style={styles.multimediaImage6}
                  resizeMode="cover"
                  source={require("../assets/multimedia--image43.png")}
                />
                <Image
                  style={styles.unsplashHatkchPiQMIcon3}
                  resizeMode="cover"
                  source={require("../assets/unsplashhatkch-piqm1.png")}
                />
                <View style={styles.badge18}>
                  <View style={styles.placeholder8}>
                    <Image
                      style={styles.wrapperIcon8}
                      resizeMode="cover"
                      source={require("../assets/wrapper36.png")}
                    />
                  </View>
                </View>
                <LinearGradient
                  style={styles.badge20}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.badge19}>+</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={[styles.elementsTextBoxTableRow6, styles.mt10]}>
              <Text style={styles.title8}>12/22 | 15:00-16:30</Text>
              <Text style={styles.subtitle6}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow7, styles.mt10]}>
            <Text style={styles.title9}>Riverside Park</Text>
            <Text style={styles.subtitle7}>Dec 16</Text>
          </View>
        </View>
        <View style={[styles.author9, styles.ml30]}>
          <View style={styles.author8}>
            <View style={styles.imageCircle7}>
              <ImageBackground
                style={styles.imageIcon3}
                resizeMode="cover"
                source={require("../assets/image44.png")}
              >
                <Image
                  style={styles.multimediaImage7}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
                <Image
                  style={styles.unsplashHatkchPiQMIcon4}
                  resizeMode="cover"
                  source={require("../assets/unsplashhatkch-piqm4.png")}
                />
                <View style={styles.badge21}>
                  <View style={styles.placeholder9}>
                    <Image
                      style={styles.wrapperIcon9}
                      resizeMode="cover"
                      source={require("../assets/wrapper189.png")}
                    />
                  </View>
                </View>
                <LinearGradient
                  style={styles.badge23}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.badge22}>+</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={[styles.elementsTextBoxTableRow8, styles.mt10]}>
              <Text style={styles.title10}>12/22 | 15:00-16:30</Text>
              <Text style={styles.subtitle8}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow9, styles.mt10]}>
            <Text style={styles.title11}>Dodge Center</Text>
            <Text style={styles.subtitle9}>Dec 16</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationBars}>
        <View style={styles.container1}>
          <View style={styles.wrapper}>
            <View style={styles.title13}>
              <View style={styles.elementsTextBoxTableRow10}>
                <Text style={styles.title12}>Beacons</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pendingJoins}>
        <View style={styles.content1}>
          <View style={styles.author10}>
            <View style={styles.imageCircle8}>
              <ImageBackground
                style={styles.imageIcon4}
                resizeMode="cover"
                source={require("../assets/image43.png")}
              >
                <Image
                  style={styles.multimediaImage8}
                  resizeMode="cover"
                  source={require("../assets/multimedia--image43.png")}
                />
                <Image
                  style={styles.unsplashHatkchPiQMIcon5}
                  resizeMode="cover"
                  source={require("../assets/unsplashhatkch-piqm1.png")}
                />
                <View style={styles.badge24}>
                  <View style={styles.placeholder10}>
                    <Image
                      style={styles.wrapperIcon10}
                      resizeMode="cover"
                      source={require("../assets/wrapper36.png")}
                    />
                  </View>
                </View>
                <LinearGradient
                  style={styles.badge26}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.badge25}>+</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={[styles.elementsTextBoxTableRow11, styles.mt10]}>
              <Text style={styles.title14}>12/22 | 15:00-16:30</Text>
              <Text style={styles.subtitle10}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={styles.textFrame}>
            <View style={styles.elementsTextBoxTableRow12}>
              <Text style={styles.title15}>Riverside Park</Text>
              <Text style={styles.subtitle11}>New York</Text>
            </View>
            <View style={styles.controlFrame}>
              <View style={styles.chevron}>
                <View style={styles.content}>
                  <Text style={styles.detail}>Dec 23</Text>
                  <Text style={[styles.info, styles.mt2]}>11:00AM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonFrame} />
        </View>
      </View>
      <View style={styles.sectionHeader1}>
        <View style={styles.container2}>
          <View style={styles.title17}>
            <Text style={styles.title16}>Pending</Text>
          </View>
          <View style={styles.action3}>
            <Text style={styles.action2}>See all</Text>
          </View>
        </View>
      </View>
      <View style={styles.activeBeacons}>
        <Pressable
          style={styles.content3}
          onPress={() => navigation.navigate("Roster")}
        >
          <View style={styles.author11}>
            <View style={styles.imageCircle9}>
              <ImageBackground
                style={styles.imageIcon5}
                resizeMode="cover"
                source={require("../assets/image46.png")}
              >
                <Image
                  style={styles.multimediaImage9}
                  resizeMode="cover"
                  source={require("../assets/multimedia--image52.png")}
                />
                <Image
                  style={styles.unsplashHatkchPiQMIcon6}
                  resizeMode="cover"
                  source={require("../assets/unsplashhatkch-piqm6.png")}
                />
                <View style={styles.badge27}>
                  <View style={styles.placeholder11}>
                    <Image
                      style={styles.wrapperIcon11}
                      resizeMode="cover"
                      source={require("../assets/wrapper250.png")}
                    />
                  </View>
                </View>
                <LinearGradient
                  style={styles.badge29}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.badge28}>Host</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={[styles.elementsTextBoxTableRow13, styles.mt10]}>
              <Text style={styles.title18}>12/22 | 15:00-16:30</Text>
              <Text style={styles.subtitle12}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={styles.textFrame1}>
            <View style={styles.elementsTextBoxTableRow14}>
              <Text style={styles.title19}>Central Park</Text>
              <Text style={styles.subtitle13}>New York</Text>
            </View>
            <View style={styles.controlFrame1}>
              <View style={styles.chevron1}>
                <View style={styles.content2}>
                  <Text style={styles.detail1}>Dec 22</Text>
                  <Text style={[styles.info1, styles.mt2]}>5:30PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonFrame1} />
        </Pressable>
        <View style={[styles.content5, styles.ml30]}>
          <View style={styles.author12}>
            <View style={styles.imageCircle10}>
              <ImageBackground
                style={styles.imageIcon6}
                resizeMode="cover"
                source={require("../assets/image47.png")}
              >
                <Image
                  style={styles.multimediaImage10}
                  resizeMode="cover"
                  source={require("../assets/multimedia--image52.png")}
                />
                <Image
                  style={styles.unsplashHatkchPiQMIcon7}
                  resizeMode="cover"
                  source={require("../assets/unsplashhatkch-piqm6.png")}
                />
                <View style={styles.badge30}>
                  <View style={styles.placeholder12}>
                    <Image
                      style={styles.wrapperIcon12}
                      resizeMode="cover"
                      source={require("../assets/wrapper250.png")}
                    />
                  </View>
                </View>
                <LinearGradient
                  style={styles.badge32}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.badge31}>+</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
            <View style={[styles.elementsTextBoxTableRow15, styles.mt10]}>
              <Text style={styles.title20}>12/22 | 15:00-16:30</Text>
              <Text style={styles.subtitle14}>⭐⭐⭐</Text>
            </View>
          </View>
          <View style={styles.textFrame2}>
            <View style={styles.elementsTextBoxTableRow16}>
              <Text style={styles.title21}>Levien Gymnasium</Text>
              <Text style={styles.subtitle15}>New York</Text>
            </View>
            <View style={styles.controlFrame2}>
              <View style={styles.chevron2}>
                <View style={styles.content4}>
                  <Text style={styles.detail2}>Dec 23</Text>
                  <Text style={[styles.info2, styles.mt2]}>7:00PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonFrame2} />
        </View>
        <View style={[styles.author13, styles.ml30]}>
          <Image
            style={styles.footballIcon}
            resizeMode="cover"
            source={require("../assets/football.png")}
          />
          <View style={[styles.elementsTextBoxTableRow17, styles.mt10]}>
            <Text style={styles.title22}>Soccer</Text>
            <Text style={styles.subtitle16}>⭐⭐⭐</Text>
          </View>
        </View>
        <View style={[styles.author14, styles.ml30]}>
          <View style={styles.imageCircle11}>
            <View style={styles.image4}>
              <Image
                style={styles.multimediaImage11}
                resizeMode="cover"
                source={require("../assets/arrows--down-arrow3.png")}
              />
              <Image
                style={styles.unsplashS2XSvVyUxpoIcon}
                resizeMode="cover"
                source={require("../assets/unsplashs2xsvvyuxpo.png")}
              />
              <View style={styles.badge33}>
                <View style={styles.placeholder13}>
                  <Image
                    style={styles.wrapperIcon13}
                    resizeMode="cover"
                    source={require("../assets/wrapper189.png")}
                  />
                </View>
              </View>
              <View style={styles.badge35}>
                <Text style={styles.badge34}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow18, styles.mt10]}>
            <Text style={styles.title23}>Food</Text>
            <Text style={styles.subtitle17}>82 726 US$</Text>
          </View>
        </View>
        <View style={[styles.author15, styles.ml30]}>
          <View style={styles.imageCircle12}>
            <View style={styles.image5}>
              <Image
                style={styles.multimediaImage12}
                resizeMode="cover"
                source={require("../assets/arrows--down-arrow3.png")}
              />
              <Image
                style={styles.unsplashrdHrrFA1KKgIcon}
                resizeMode="cover"
                source={require("../assets/unsplashs2xsvvyuxpo.png")}
              />
              <View style={styles.badge36}>
                <View style={styles.placeholder14}>
                  <Image
                    style={styles.wrapperIcon14}
                    resizeMode="cover"
                    source={require("../assets/wrapper189.png")}
                  />
                </View>
              </View>
              <View style={styles.badge38}>
                <Text style={styles.badge37}>4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxTableRow19, styles.mt10]}>
            <Text style={styles.title24}>Bull Run</Text>
            <Text style={styles.subtitle18}>81 736 US$</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionHeader2}>
        <View style={styles.container3}>
          <View style={styles.title26}>
            <Text style={styles.title25}>Active</Text>
          </View>
          <View style={styles.action5}>
            <Text style={styles.action4}>See all</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView1}>
        <View style={styles.label1}>
          <LinearGradient
            style={styles.rectangle2}
            locations={[0, 1]}
            colors={["#0061c8", "#5aedff"]}
          />
          <Text style={styles.cardTips}>2W</Text>
        </View>
        <View style={styles.label2}>
          <View style={styles.rectangle3} />
          <Text style={styles.cardTips1}>1W</Text>
        </View>
        <View style={styles.label3}>
          <View style={styles.rectangle4} />
          <Text style={styles.cardTips2}>3D</Text>
        </View>
        <View style={styles.label4}>
          <View style={styles.rectangle5} />
          <Text style={styles.cardTips3}>1D</Text>
        </View>
      </View>
      <Pressable
        style={styles.avatarCn}
        onPress={() => navigation.navigate("ProfileRevision")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/avatar-cn4.png")}
        />
      </Pressable>
      <Image
        style={styles.basketballIcon}
        resizeMode="cover"
        source={require("../assets/basketball19.png")}
      />
      <Image
        style={styles.tennisIcon}
        resizeMode="cover"
        source={require("../assets/tennis4.png")}
      />
      <Image
        style={styles.tennisIcon1}
        resizeMode="cover"
        source={require("../assets/tennis5.png")}
      />
      <Image
        style={styles.basketballIcon1}
        resizeMode="cover"
        source={require("../assets/basketball19.png")}
      />
      <Image
        style={styles.footballIcon1}
        resizeMode="cover"
        source={require("../assets/football1.png")}
      />
      <View style={styles.back}>
        <View style={styles.frameView}>
          <Pressable
            style={styles.avatarCn1}
            onPress={() => navigation.navigate("ProfileRevision")}
          >
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/avatar-cn.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt10: {
    marginTop: 10,
  },
  ml30: {
    marginLeft: 30,
  },
  mt2: {
    marginTop: 2,
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
    top: 7,
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
  icon: {
    width: "100%",
    height: "100%",
  },
  whatsAppImage20221215At6: {
    position: "absolute",
    left: 7,
    top: 7,
    width: 29,
    height: 29,
  },
  pathIcon: {
    position: "absolute",
    top: 69,
    left: 336,
    width: 19,
    height: 19,
  },
  more: {
    position: "absolute",
    top: 0,
    left: 197,
    width: 44,
    height: 44,
  },
  groupView: {
    position: "absolute",
    top: 58,
    left: 125,
    width: 241,
    height: 44,
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
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master: {
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  components: {
    position: "absolute",
    top: 234,
    left: 136,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  multimediaImage: {
    position: "absolute",
    marginTop: -12.71,
    marginLeft: -11.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashHatkchPiQMIcon: {
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
  },
  image: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage1: {
    position: "absolute",
    marginTop: -12.71,
    marginLeft: -11.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
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
  },
  image1: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle1: {
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
    color: "#fff",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  },
  unsplashENPezgtyAwAIcon: {
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
  },
  image2: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle2: {
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
    color: "#fff",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  },
  unsplash4u7VzDgNgLIIcon: {
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
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge11: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#fff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image3: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle3: {
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
    color: "#fff",
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
  groupsMediumCardVert: {
    position: "absolute",
    width: "96.15%",
    top: 685,
    right: "3.85%",
    left: "0%",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  title4: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  title5: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  action: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#5aedff",
    textAlign: "right",
    display: "none",
  },
  action1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sectionHeader: {
    position: "absolute",
    width: "96.15%",
    top: 636,
    right: "3.85%",
    left: "0%",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  multimediaImage4: {
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
  unsplashHatkchPiQMIcon1: {
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
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle4: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title6: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage5: {
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
  unsplashHatkchPiQMIcon2: {
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
  wrapperIcon7: {
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
  },
  badge17: {
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
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon1: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle5: {
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
    color: "#fff",
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage6: {
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
  unsplashHatkchPiQMIcon3: {
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge18: {
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
  badge19: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge20: {
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
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon2: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle6: {
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
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  subtitle6: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  author6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title9: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle7: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage7: {
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
  unsplashHatkchPiQMIcon4: {
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge21: {
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
  badge22: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge23: {
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
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon3: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title10: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  subtitle8: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow8: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  author8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title11: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle9: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow9: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  pastBeacons: {
    position: "absolute",
    width: "96.15%",
    top: 694,
    right: "3.85%",
    left: "0%",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title12: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 32,
    lineHeight: 45,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow10: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title13: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wrapper: {
    alignSelf: "stretch",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationBars: {
    position: "absolute",
    width: "96.15%",
    top: 131,
    right: "3.85%",
    left: "0%",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  multimediaImage8: {
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
  unsplashHatkchPiQMIcon5: {
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge24: {
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
  badge25: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge26: {
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
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon4: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title14: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  subtitle10: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow11: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  author10: {
    flexDirection: "column",
    paddingLeft: 38,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title15: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  subtitle11: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow12: {
    alignSelf: "stretch",
    width: 100,
    flexShrink: 0,
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
    color: "#fff",
    textAlign: "right",
  },
  info: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#414249",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textFrame: {
    width: 160,
    height: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFrame: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "none",
  },
  content1: {
    width: 154,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  pendingJoins: {
    position: "absolute",
    width: "96.15%",
    top: 489,
    right: "3.85%",
    left: "0%",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title16: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  title17: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  action2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#5aedff",
    textAlign: "right",
    display: "none",
  },
  action3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sectionHeader1: {
    position: "absolute",
    width: "96.15%",
    top: 425,
    right: "3.85%",
    left: "0%",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  multimediaImage9: {
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
  unsplashHatkchPiQMIcon6: {
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge27: {
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
  badge28: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#000",
    textAlign: "left",
  },
  badge29: {
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
  imageIcon5: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle9: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title18: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  subtitle12: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow13: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  author11: {
    flexDirection: "column",
    paddingLeft: 38,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title19: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  subtitle13: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow14: {
    alignSelf: "stretch",
    width: 100,
    flexShrink: 0,
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
    color: "#fff",
    textAlign: "right",
  },
  info1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#414249",
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
    width: 160,
    height: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFrame1: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "none",
  },
  content3: {
    width: 154,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  multimediaImage10: {
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
  unsplashHatkchPiQMIcon7: {
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
  badge30: {
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
  badge31: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge32: {
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
    display: "none",
    backgroundColor: "transparent",
  },
  imageIcon6: {
    position: "relative",
    borderRadius: 50,
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle10: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title20: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  subtitle14: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow15: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  author12: {
    flexDirection: "column",
    paddingLeft: 38,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title21: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  subtitle15: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow16: {
    alignSelf: "stretch",
    width: 100,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  detail2: {
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  info2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#414249",
    textAlign: "right",
  },
  content4: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  chevron2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  controlFrame2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textFrame2: {
    width: 160,
    height: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonFrame2: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "none",
  },
  content5: {
    width: 154,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  footballIcon: {
    position: "relative",
    width: 96,
    height: 89,
    flexShrink: 0,
  },
  title22: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle16: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow17: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  multimediaImage11: {
    position: "absolute",
    marginTop: -12.71,
    marginLeft: -11.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashS2XSvVyUxpoIcon: {
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
  badge33: {
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
  badge34: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge35: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#ff6937",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image4: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title23: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle17: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow18: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author14: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  multimediaImage12: {
    position: "absolute",
    marginTop: -12.71,
    marginLeft: -11.71,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  unsplashrdHrrFA1KKgIcon: {
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
  badge36: {
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
  badge37: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  badge38: {
    position: "absolute",
    top: 55,
    left: 55,
    borderRadius: 12,
    backgroundColor: "#fff",
    width: 24,
    height: 24,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image5: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 79,
    height: 79,
    flexShrink: 0,
  },
  imageCircle12: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title24: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle18: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow19: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  author15: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  activeBeacons: {
    position: "absolute",
    width: "96.15%",
    top: 283,
    right: "3.85%",
    left: "0%",
    height: 169,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 25,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title25: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  title26: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  action4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#5aedff",
    textAlign: "right",
    display: "none",
  },
  action5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  container3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sectionHeader2: {
    position: "absolute",
    width: "93.85%",
    top: 203,
    right: "6.15%",
    left: "0%",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
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
  cardTips: {
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
  groupView1: {
    position: "absolute",
    height: "3.2%",
    width: "41.28%",
    top: "26.78%",
    right: "6.41%",
    bottom: "70.02%",
    left: "52.31%",
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  avatarCn: {
    position: "absolute",
    left: -2424,
    top: -649,
    width: 41,
    height: 41,
  },
  basketballIcon: {
    position: "absolute",
    top: 350,
    left: 293,
    width: 27,
    height: 27,
  },
  tennisIcon: {
    position: "absolute",
    top: 553,
    left: 106,
    width: 29,
    height: 29,
  },
  tennisIcon1: {
    position: "absolute",
    top: 758,
    left: 285,
    width: 30,
    height: 30,
  },
  basketballIcon1: {
    position: "absolute",
    top: 759,
    left: 175,
    width: 27,
    height: 27,
  },
  footballIcon1: {
    position: "absolute",
    top: 760,
    left: 69,
    width: 28,
    height: 28,
  },
  icon2: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  avatarCn1: {
    position: "relative",
    width: 41,
    height: 41,
  },
  frameView: {
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
    top: 46,
    left: 0,
    width: 89,
    height: 73,
  },
  secondMenuBeacons: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SecondMenuBeacons;
