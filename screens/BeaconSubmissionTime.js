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

const BeaconSubmissionTime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beaconSubmissionTime}>
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
        <Pressable style={styles.selection}>
          <LinearGradient
            style={styles.bg}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Text style={styles.cinemaTheater}>Location</Text>
          <Text style={styles.entertainment}>Venue</Text>
          <Text style={styles.text}>Time</Text>
          <Text style={styles.text1}>Date</Text>
        </Pressable>
        <View style={styles.sport1}>
          <LinearGradient
            style={styles.rectangleCopy2}
            locations={[0, 1]}
            colors={["#0061c8", "#5aedff"]}
          />
          <Image
            style={styles.basketballIcon}
            resizeMode="cover"
            source={require("../assets/basketball2.png")}
          />
          <Text style={styles.sport}>Sport</Text>
        </View>
        <View style={styles.location1}>
          <LinearGradient
            style={styles.rectangleCopy3}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.locationAndMapMap}
            resizeMode="cover"
            source={require("../assets/location-and-map--map.png")}
          />
          <Image
            style={styles.fillIcon}
            resizeMode="cover"
            source={require("../assets/fill.png")}
          />
          <Text style={styles.location}>Location</Text>
        </View>
        <View style={styles.timer1}>
          <LinearGradient
            style={styles.rectangleCopy4}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.timeLine1Icon}
            resizeMode="cover"
            source={require("../assets/timeline-11.png")}
          />
          <Image
            style={styles.userVoiceFillIcon}
            resizeMode="cover"
            source={require("../assets/fill.png")}
          />
          <Text style={styles.timer}>Time</Text>
        </View>
        <View style={styles.player}>
          <LinearGradient
            style={styles.rectangleCopy5}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.placeholderIcon}
            resizeMode="cover"
            source={require("../assets/placeholder.png")}
          />
          <View style={styles.sensor1}>
            <Text style={styles.sensor}>Players</Text>
          </View>
        </View>
        <Text style={styles.basketball}>Basketball</Text>
        <Image
          style={styles.notReadyBeacon2}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon21.png")}
        />
        <Image
          style={styles.notReadyBeacon1}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon11.png")}
        />
        <View style={styles.ofPlayers}>
          <View style={styles.master1Line}>
            <View style={styles.helpersTopHelper}>
              <View style={styles.container}>
                <Text style={styles.inputTitle}>Players</Text>
              </View>
            </View>
            <View style={[styles.input, styles.mt8]}>
              <View style={styles.content}>
                <View style={styles.iconsLeft}>
                  <Image
                    style={styles.playersIcon}
                    resizeMode="cover"
                    source={require("../assets/players-icon1.png")}
                  />
                </View>
                <View style={[styles.textContainer, styles.ml15]}>
                  <Image
                    style={styles.inputElementsIcon}
                    resizeMode="cover"
                    source={require("../assets/input-elements.png")}
                  />
                  <Image
                    style={styles.inputElementsIcon1}
                    resizeMode="cover"
                    source={require("../assets/input-elements.png")}
                  />
                  <Text style={styles.text2}>0</Text>
                </View>
                <View style={[styles.iconsRight, styles.ml15]}>
                  <View style={styles.placeholder}>
                    <Image
                      style={styles.wrapperIcon}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                  <View style={[styles.placeholder1, styles.ml20]}>
                    <Image
                      style={styles.wrapperIcon1}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.head}>
        <Text style={styles.kitchen}>BeaconBuddy</Text>
        <View style={styles.more}>
          <LinearGradient
            style={styles.rectangle1}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
          <LinearGradient
            style={styles.rectangle2}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.frameView} />
        </View>
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MenuNotFound")}
        >
          <View style={styles.frameView1}>
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={require("../assets/back.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.more1}>
        <LinearGradient
          style={styles.rectangle3}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.pathIcon1}
          resizeMode="cover"
          source={require("../assets/path2.png")}
        />
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
      </View>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.modalPage}>
        <View style={styles.elementsAddons}>
          <View style={styles.swipeIndicator} />
        </View>
        <View style={styles.navigationBars}>
          <View style={styles.container1}>
            <View style={styles.elementsTextBoxNavBar}>
              <Text style={styles.title}>Edit Details</Text>
            </View>
          </View>
        </View>
        <View style={styles.month}>
          <View style={styles.divider}>
            <View style={styles.line} />
          </View>
          <View style={styles.divider1}>
            <View style={styles.line1} />
          </View>
          <View style={styles.sectionHeader}>
            <View style={styles.container2}>
              <Text style={styles.title1}>Select day</Text>
            </View>
          </View>
        </View>
        <View style={styles.month3}>
          <View style={styles.monthPicker}>
            <View style={styles.month1}>
              <View style={styles.monthV1}>
                <View style={styles.elementsDatePicker}>
                  <Text style={styles.feb}>February</Text>
                </View>
                <View style={styles.elementsDatePicker1}>
                  <Text style={styles.text3}>2022</Text>
                </View>
                <Image
                  style={styles.arrowsDownArrow}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow2.png")}
                />
              </View>
              <View style={styles.monthV2}>
                <Image
                  style={styles.arrowsLeftArrow}
                  resizeMode="cover"
                  source={require("../assets/arrows--left-arrow.png")}
                />
                <View style={styles.monthYear}>
                  <View style={styles.elementsDatePicker2}>
                    <Text style={styles.feb1}>December</Text>
                  </View>
                  <View style={styles.elementsDatePicker3}>
                    <Text style={styles.text4}>2022</Text>
                  </View>
                </View>
                <Image
                  style={styles.arrowsRightArrow}
                  resizeMode="cover"
                  source={require("../assets/arrows--right-arrow.png")}
                />
              </View>
              <View style={styles.days}>
                <View style={styles.elementsDatePicker4}>
                  <Text style={styles.mo}>Mon</Text>
                </View>
                <View style={styles.elementsDatePicker5}>
                  <Text style={styles.mo1}>Tue</Text>
                </View>
                <View style={styles.elementsDatePicker6}>
                  <Text style={styles.mo2}>Wen</Text>
                </View>
                <View style={styles.elementsDatePicker7}>
                  <Text style={styles.mo3}>Thu</Text>
                </View>
                <View style={styles.elementsDatePicker8}>
                  <Text style={styles.mo4}>Fri</Text>
                </View>
                <View style={styles.elementsDatePicker9}>
                  <Text style={styles.mo5}>Sat</Text>
                </View>
                <View style={styles.elementsDatePicker10}>
                  <Text style={styles.mo6}>Sun</Text>
                </View>
              </View>
              <View style={styles.week1}>
                <View style={styles.elementsDatePicker11}>
                  <Text style={styles.text5}>27</Text>
                </View>
                <View style={styles.elementsDatePicker12}>
                  <Text style={styles.text6}>28</Text>
                </View>
                <View style={styles.elementsDatePicker13}>
                  <Text style={styles.text7}>29</Text>
                </View>
                <View style={styles.elementsDatePicker14}>
                  <Text style={styles.text8}>30</Text>
                </View>
                <View style={styles.elementsDatePicker15}>
                  <Text style={styles.text9}>31</Text>
                </View>
                <View style={styles.elementsDatePicker16}>
                  <Text style={styles.text10}>1</Text>
                </View>
                <View style={styles.elementsDatePicker17}>
                  <Text style={styles.text11}>2</Text>
                </View>
              </View>
              <View style={styles.week2}>
                <View style={styles.elementsDatePicker18}>
                  <Text style={styles.text12}>3</Text>
                </View>
                <View style={styles.elementsDatePicker19}>
                  <Text style={styles.text13}>4</Text>
                </View>
                <View style={styles.elementsDatePicker20}>
                  <Text style={styles.text14}>5</Text>
                </View>
                <View style={styles.elementsDatePicker21}>
                  <Text style={styles.text15}>6</Text>
                </View>
                <View style={styles.elementsDatePicker22}>
                  <Text style={styles.text16}>7</Text>
                </View>
                <View style={styles.elementsDatePicker23}>
                  <Text style={styles.text17}>8</Text>
                </View>
                <View style={styles.elementsDatePicker24}>
                  <Text style={styles.text18}>9</Text>
                </View>
              </View>
              <View style={styles.week3}>
                <View style={styles.elementsDatePicker25}>
                  <Text style={styles.text19}>10</Text>
                </View>
                <View style={styles.elementsDatePicker26}>
                  <Text style={styles.text20}>11</Text>
                </View>
                <View style={styles.elementsDatePicker27}>
                  <Text style={styles.text21}>12</Text>
                </View>
                <View style={styles.elementsDatePicker28}>
                  <Text style={styles.text22}>13</Text>
                </View>
                <View style={styles.elementsDatePicker29}>
                  <Text style={styles.text23}>14</Text>
                </View>
                <View style={styles.elementsDatePicker30}>
                  <Text style={styles.text24}>15</Text>
                </View>
                <View style={styles.elementsDatePicker31}>
                  <Text style={styles.text25}>16</Text>
                </View>
              </View>
              <View style={styles.week4}>
                <View style={styles.elementsDatePicker32}>
                  <Text style={styles.text26}>17</Text>
                </View>
                <View style={styles.elementsDatePicker33}>
                  <Text style={styles.text27}>18</Text>
                </View>
                <View style={styles.elementsDatePicker34}>
                  <Text style={styles.text28}>19</Text>
                </View>
                <View style={styles.elementsDatePicker35}>
                  <Text style={styles.text29}>20</Text>
                </View>
                <View style={styles.elementsDatePicker36}>
                  <Text style={styles.text30}>21</Text>
                </View>
                <LinearGradient
                  style={styles.elementsDatePicker37}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <Text style={styles.text31}>22</Text>
                </LinearGradient>
                <View style={styles.elementsDatePicker38}>
                  <Text style={styles.text32}>23</Text>
                </View>
              </View>
              <View style={styles.week5}>
                <View style={styles.elementsDatePicker39}>
                  <Text style={styles.text33}>24</Text>
                </View>
                <View style={styles.elementsDatePicker40}>
                  <Text style={styles.text34}>25</Text>
                </View>
                <View style={styles.elementsDatePicker41}>
                  <Text style={styles.text35}>26</Text>
                </View>
                <View style={styles.elementsDatePicker42}>
                  <Text style={styles.text36}>27</Text>
                </View>
                <View style={styles.elementsDatePicker43}>
                  <Text style={styles.text37}>28</Text>
                </View>
                <View style={styles.elementsDatePicker44}>
                  <Text style={styles.text38}>29</Text>
                </View>
                <View style={styles.elementsDatePicker45}>
                  <Text style={styles.text39}>30</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.monthPicker1}>
            <View style={styles.month2}>
              <View style={styles.monthV11}>
                <View style={styles.elementsDatePicker46}>
                  <Text style={styles.feb2}>February</Text>
                </View>
                <View style={styles.elementsDatePicker47}>
                  <Text style={styles.text40}>2022</Text>
                </View>
                <Image
                  style={styles.arrowsDownArrow1}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
              </View>
              <View style={styles.monthV21}>
                <Image
                  style={styles.arrowsLeftArrow1}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
                <View style={styles.monthYear1}>
                  <View style={styles.elementsDatePicker48}>
                    <Text style={styles.feb3}>December</Text>
                  </View>
                  <View style={styles.elementsDatePicker49}>
                    <Text style={styles.text41}>2022</Text>
                  </View>
                </View>
                <Image
                  style={styles.arrowsRightArrow1}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
              </View>
              <View style={styles.days1}>
                <View style={styles.elementsDatePicker50}>
                  <Text style={styles.mo7}>Mon</Text>
                </View>
                <View style={styles.elementsDatePicker51}>
                  <Text style={styles.mo8}>Tue</Text>
                </View>
                <View style={styles.elementsDatePicker52}>
                  <Text style={styles.mo9}>Wen</Text>
                </View>
                <View style={styles.elementsDatePicker53}>
                  <Text style={styles.mo10}>Thu</Text>
                </View>
                <View style={styles.elementsDatePicker54}>
                  <Text style={styles.mo11}>Fri</Text>
                </View>
                <View style={styles.elementsDatePicker55}>
                  <Text style={styles.mo12}>Sat</Text>
                </View>
                <View style={styles.elementsDatePicker56}>
                  <Text style={styles.mo13}>Sun</Text>
                </View>
              </View>
              <View style={styles.week11}>
                <View style={styles.elementsDatePicker57}>
                  <Text style={styles.text42}>27</Text>
                </View>
                <View style={styles.elementsDatePicker58}>
                  <Text style={styles.text43}>28</Text>
                </View>
                <View style={styles.elementsDatePicker59}>
                  <Text style={styles.text44}>29</Text>
                </View>
                <View style={styles.elementsDatePicker60}>
                  <Text style={styles.text45}>30</Text>
                </View>
                <View style={styles.elementsDatePicker61}>
                  <Text style={styles.text46}>1</Text>
                </View>
                <View style={styles.elementsDatePicker62}>
                  <Text style={styles.text47}>2</Text>
                </View>
                <View style={styles.elementsDatePicker63}>
                  <Text style={styles.text48}>3</Text>
                </View>
              </View>
              <View style={styles.week21}>
                <View style={styles.elementsDatePicker64}>
                  <Text style={styles.text49}>4</Text>
                </View>
                <View style={styles.elementsDatePicker65}>
                  <Text style={styles.text50}>5</Text>
                </View>
                <View style={styles.elementsDatePicker66}>
                  <Text style={styles.text51}>6</Text>
                </View>
                <View style={styles.elementsDatePicker67}>
                  <Text style={styles.text52}>7</Text>
                </View>
                <View style={styles.elementsDatePicker68}>
                  <Text style={styles.text53}>8</Text>
                </View>
                <View style={styles.elementsDatePicker69}>
                  <Text style={styles.text54}>9</Text>
                </View>
                <View style={styles.elementsDatePicker70}>
                  <Text style={styles.text55}>10</Text>
                </View>
              </View>
              <View style={styles.week31}>
                <View style={styles.elementsDatePicker71}>
                  <Text style={styles.text56}>11</Text>
                </View>
                <View style={styles.elementsDatePicker72}>
                  <Text style={styles.text57}>12</Text>
                </View>
                <View style={styles.elementsDatePicker73}>
                  <Text style={styles.text58}>13</Text>
                </View>
                <View style={styles.elementsDatePicker74}>
                  <Text style={styles.text59}>14</Text>
                </View>
                <View style={styles.elementsDatePicker75}>
                  <Text style={styles.text60}>15</Text>
                </View>
                <View style={styles.elementsDatePicker76}>
                  <Text style={styles.text61}>16</Text>
                </View>
                <View style={styles.elementsDatePicker77}>
                  <Text style={styles.text62}>17</Text>
                </View>
              </View>
              <View style={styles.week41}>
                <View style={styles.elementsDatePicker78}>
                  <Text style={styles.text63}>18</Text>
                </View>
                <View style={styles.elementsDatePicker79}>
                  <Text style={styles.text64}>19</Text>
                </View>
                <View style={styles.elementsDatePicker80}>
                  <Text style={styles.text65}>20</Text>
                </View>
                <View style={styles.elementsDatePicker81}>
                  <Text style={styles.text66}>21</Text>
                </View>
                <View style={styles.elementsDatePicker82}>
                  <Text style={styles.text67}>22</Text>
                </View>
                <View style={styles.elementsDatePicker83}>
                  <Text style={styles.text68}>23</Text>
                </View>
                <View style={styles.elementsDatePicker84}>
                  <Text style={styles.text69}>24</Text>
                </View>
              </View>
              <View style={styles.week51}>
                <View style={styles.elementsDatePicker85}>
                  <Text style={styles.text70}>25</Text>
                </View>
                <View style={styles.elementsDatePicker86}>
                  <Text style={styles.text71}>26</Text>
                </View>
                <View style={styles.elementsDatePicker87}>
                  <Text style={styles.text72}>27</Text>
                </View>
                <View style={styles.elementsDatePicker88}>
                  <Text style={styles.text73}>28</Text>
                </View>
                <View style={styles.elementsDatePicker89}>
                  <Text style={styles.text74}>29</Text>
                </View>
                <View style={styles.elementsDatePicker90}>
                  <Text style={styles.text75}>30</Text>
                </View>
                <View style={styles.elementsDatePicker91}>
                  <Text style={styles.text76}>31</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.month5}>
          <View style={styles.sectionHeader1}>
            <View style={styles.container3}>
              <Text style={styles.title2}>Select Time</Text>
            </View>
          </View>
          <View style={styles.timePicker}>
            <View style={styles.content1}>
              <View style={styles.line2}>
                <View style={styles.elementsTimePicker}>
                  <Text style={styles.text77}>10:00AM</Text>
                </View>
                <View style={[styles.elementsTimePicker1, styles.ml10]}>
                  <Text style={styles.text78}>10:30AM</Text>
                </View>
                <View style={[styles.elementsTimePicker2, styles.ml10]}>
                  <Text style={styles.text79}>11:00AM</Text>
                </View>
                <View style={[styles.elementsTimePicker3, styles.ml10]}>
                  <Text style={styles.text80}>11:30AM</Text>
                </View>
                <View style={[styles.elementsTimePicker4, styles.ml10]}>
                  <Text style={styles.text81}>12:00PM</Text>
                </View>
              </View>
              <View style={[styles.line3, styles.mt10]}>
                <View style={styles.elementsTimePicker5}>
                  <Text style={styles.text82}>12:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker6, styles.ml10]}>
                  <Text style={styles.text83}>1:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker7, styles.ml10]}>
                  <Text style={styles.text84}>1:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker8, styles.ml10]}>
                  <Text style={styles.text85}>2:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker9, styles.ml10]}>
                  <Text style={styles.text86}>2:30PM</Text>
                </View>
              </View>
              <View style={[styles.line4, styles.mt10]}>
                <View style={styles.elementsTimePicker10}>
                  <Text style={styles.text87}>3:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker11, styles.ml10]}>
                  <Text style={styles.text88}>3:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker12, styles.ml10]}>
                  <Text style={styles.text89}>4:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker13, styles.ml10]}>
                  <Text style={styles.text90}>4:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker14, styles.ml10]}>
                  <Text style={styles.text91}>5:00PM</Text>
                </View>
              </View>
              <View style={[styles.line5, styles.mt10]}>
                <View style={styles.elementsTimePicker15}>
                  <Text style={styles.text92}>5:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker16, styles.ml10]}>
                  <Text style={styles.text93}>6:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker17, styles.ml10]}>
                  <Text style={styles.text94}>6:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker18, styles.ml10]}>
                  <Text style={styles.text95}>7:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker19, styles.ml10]}>
                  <Text style={styles.text96}>7:30PM</Text>
                </View>
              </View>
              <View style={[styles.line6, styles.mt10]}>
                <View style={styles.elementsTimePicker20}>
                  <Text style={styles.text97}>8:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker21, styles.ml10]}>
                  <Text style={styles.text98}>8:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker22, styles.ml10]}>
                  <Text style={styles.text99}>9:00PM</Text>
                </View>
                <View style={[styles.elementsTimePicker23, styles.ml10]}>
                  <Text style={styles.text100}>9:30PM</Text>
                </View>
                <View style={[styles.elementsTimePicker24, styles.ml10]}>
                  <Text style={styles.text101}>10:00PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <View style={styles.monthPicker2}>
            <View style={styles.month4}>
              <View style={styles.monthV12}>
                <View style={styles.elementsDatePicker92}>
                  <Text style={styles.feb4}>February</Text>
                </View>
                <View style={styles.elementsDatePicker93}>
                  <Text style={styles.text102}>2022</Text>
                </View>
                <Image
                  style={styles.arrowsDownArrow2}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
              </View>
              <View style={styles.monthV22}>
                <Image
                  style={styles.arrowsLeftArrow2}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
                <View style={styles.monthYear2}>
                  <View style={styles.elementsDatePicker94}>
                    <Text style={styles.feb5}>March</Text>
                  </View>
                  <View style={styles.elementsDatePicker95}>
                    <Text style={styles.text103}>2022</Text>
                  </View>
                </View>
                <Image
                  style={styles.arrowsRightArrow2}
                  resizeMode="cover"
                  source={require("../assets/arrows--down-arrow3.png")}
                />
              </View>
              <View style={styles.days2}>
                <View style={styles.elementsDatePicker96}>
                  <Text style={styles.mo14}>Mon</Text>
                </View>
                <View style={styles.elementsDatePicker97}>
                  <Text style={styles.mo15}>Tue</Text>
                </View>
                <View style={styles.elementsDatePicker98}>
                  <Text style={styles.mo16}>Wen</Text>
                </View>
                <View style={styles.elementsDatePicker99}>
                  <Text style={styles.mo17}>Thu</Text>
                </View>
                <View style={styles.elementsDatePicker100}>
                  <Text style={styles.mo18}>Fri</Text>
                </View>
                <View style={styles.elementsDatePicker101}>
                  <Text style={styles.mo19}>Sat</Text>
                </View>
                <View style={styles.elementsDatePicker102}>
                  <Text style={styles.mo20}>Sun</Text>
                </View>
              </View>
              <View style={styles.week12}>
                <View style={styles.elementsDatePicker103}>
                  <Text style={styles.text104}>27</Text>
                </View>
                <View style={styles.elementsDatePicker104}>
                  <Text style={styles.text105}>28</Text>
                </View>
                <View style={styles.elementsDatePicker105}>
                  <Text style={styles.text106}>29</Text>
                </View>
                <View style={styles.elementsDatePicker106}>
                  <Text style={styles.text107}>30</Text>
                </View>
                <View style={styles.elementsDatePicker107}>
                  <Text style={styles.text108}>31</Text>
                </View>
                <View style={styles.elementsDatePicker108}>
                  <Text style={styles.text109}>1</Text>
                </View>
                <View style={styles.elementsDatePicker109}>
                  <Text style={styles.text110}>2</Text>
                </View>
              </View>
              <View style={styles.week22}>
                <View style={styles.elementsDatePicker110}>
                  <Text style={styles.text111}>3</Text>
                </View>
                <View style={styles.elementsDatePicker111}>
                  <Text style={styles.text112}>4</Text>
                </View>
                <View style={styles.elementsDatePicker112}>
                  <Text style={styles.text113}>5</Text>
                </View>
                <View style={styles.elementsDatePicker113}>
                  <Text style={styles.text114}>6</Text>
                </View>
                <View style={styles.elementsDatePicker114}>
                  <Text style={styles.text115}>7</Text>
                </View>
                <View style={styles.elementsDatePicker115}>
                  <Text style={styles.text116}>8</Text>
                </View>
                <View style={styles.elementsDatePicker116}>
                  <Text style={styles.text117}>9</Text>
                </View>
              </View>
              <View style={styles.week32}>
                <View style={styles.elementsDatePicker117}>
                  <Text style={styles.text118}>10</Text>
                </View>
                <View style={styles.elementsDatePicker118}>
                  <Text style={styles.text119}>11</Text>
                </View>
                <View style={styles.elementsDatePicker119}>
                  <Text style={styles.text120}>12</Text>
                </View>
                <View style={styles.elementsDatePicker120}>
                  <Text style={styles.text121}>13</Text>
                </View>
                <View style={styles.elementsDatePicker121}>
                  <Text style={styles.text122}>14</Text>
                </View>
                <View style={styles.elementsDatePicker122}>
                  <Text style={styles.text123}>15</Text>
                </View>
                <View style={styles.elementsDatePicker123}>
                  <Text style={styles.text124}>16</Text>
                </View>
              </View>
              <View style={styles.week42}>
                <View style={styles.elementsDatePicker124}>
                  <Text style={styles.text125}>17</Text>
                </View>
                <View style={styles.elementsDatePicker125}>
                  <Text style={styles.text126}>18</Text>
                </View>
                <View style={styles.elementsDatePicker126}>
                  <Text style={styles.text127}>19</Text>
                </View>
                <View style={styles.elementsDatePicker127}>
                  <Text style={styles.text128}>20</Text>
                </View>
                <View style={styles.elementsDatePicker128}>
                  <Text style={styles.text129}>21</Text>
                </View>
                <View style={styles.elementsDatePicker129}>
                  <Text style={styles.text130}>22</Text>
                </View>
                <View style={styles.elementsDatePicker130}>
                  <Text style={styles.text131}>23</Text>
                </View>
              </View>
              <View style={styles.week52}>
                <View style={styles.elementsDatePicker131}>
                  <Text style={styles.text132}>24</Text>
                </View>
                <View style={styles.elementsDatePicker132}>
                  <Text style={styles.text133}>25</Text>
                </View>
                <View style={styles.elementsDatePicker133}>
                  <Text style={styles.text134}>26</Text>
                </View>
                <View style={styles.elementsDatePicker134}>
                  <Text style={styles.text135}>27</Text>
                </View>
                <View style={styles.elementsDatePicker135}>
                  <Text style={styles.text136}>28</Text>
                </View>
                <View style={styles.elementsDatePicker136}>
                  <Text style={styles.text137}>28</Text>
                </View>
                <View style={styles.elementsDatePicker137}>
                  <Text style={styles.text138}>28</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupsLarge}>
          <View style={styles.line7}>
            <View style={styles.components}>
              <View style={styles.master}>
                <View style={styles.placeholder2}>
                  <Image
                    style={styles.wrapperIcon2}
                    resizeMode="cover"
                    source={require("../assets/wrapper4.png")}
                  />
                </View>
                <Text style={[styles.label, styles.ml6]}>{`Dec 22  |  `}</Text>
                <View style={[styles.placeholder3, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon3}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.components1, styles.ml10]}>
              <View style={styles.master1}>
                <View style={styles.placeholder4}>
                  <Image
                    style={styles.wrapperIcon4}
                    resizeMode="cover"
                    source={require("../assets/wrapper14.png")}
                  />
                </View>
                <Text style={[styles.label1, styles.ml6]}>1</Text>
                <View style={[styles.placeholder5, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon5}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.components2, styles.ml10]}
              onPress={() => navigation.navigate("BeaconSubmissionPlayer")}
            >
              <View style={styles.master2}>
                <View style={styles.placeholder6}>
                  <Image
                    style={styles.wrapperIcon6}
                    resizeMode="cover"
                    source={require("../assets/wrapper11.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.ml6]}>4</Text>
                <View style={[styles.placeholder7, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon7}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.month7}>
        <View style={styles.monthPicker3}>
          <View style={styles.month6}>
            <View style={styles.monthV13}>
              <View style={styles.elementsDatePicker138}>
                <Text style={styles.feb6}>February</Text>
              </View>
              <View style={styles.elementsDatePicker139}>
                <Text style={styles.text139}>2022</Text>
              </View>
              <Image
                style={styles.arrowsDownArrow3}
                resizeMode="cover"
                source={require("../assets/arrows--down-arrow2.png")}
              />
            </View>
            <View style={styles.monthV23}>
              <Image
                style={styles.arrowsLeftArrow3}
                resizeMode="cover"
                source={require("../assets/arrows--left-arrow.png")}
              />
              <View style={styles.monthYear3}>
                <View style={styles.elementsDatePicker140}>
                  <Text style={styles.feb7}>December</Text>
                </View>
                <View style={styles.elementsDatePicker141}>
                  <Text style={styles.text140}>2022</Text>
                </View>
              </View>
              <Image
                style={styles.arrowsRightArrow3}
                resizeMode="cover"
                source={require("../assets/arrows--right-arrow.png")}
              />
            </View>
            <View style={styles.days3}>
              <View style={styles.elementsDatePicker142}>
                <Text style={styles.mo21}>Mon</Text>
              </View>
              <View style={styles.elementsDatePicker143}>
                <Text style={styles.mo22}>Tue</Text>
              </View>
              <View style={styles.elementsDatePicker144}>
                <Text style={styles.mo23}>Wen</Text>
              </View>
              <View style={styles.elementsDatePicker145}>
                <Text style={styles.mo24}>Thu</Text>
              </View>
              <View style={styles.elementsDatePicker146}>
                <Text style={styles.mo25}>Fri</Text>
              </View>
              <View style={styles.elementsDatePicker147}>
                <Text style={styles.mo26}>Sat</Text>
              </View>
              <View style={styles.elementsDatePicker148}>
                <Text style={styles.mo27}>Sun</Text>
              </View>
            </View>
            <View style={styles.week13}>
              <View style={styles.elementsDatePicker149}>
                <Text style={styles.text141}>27</Text>
              </View>
              <View style={styles.elementsDatePicker150}>
                <Text style={styles.text142}>28</Text>
              </View>
              <View style={styles.elementsDatePicker151}>
                <Text style={styles.text143}>29</Text>
              </View>
              <View style={styles.elementsDatePicker152}>
                <Text style={styles.text144}>30</Text>
              </View>
              <View style={styles.elementsDatePicker153}>
                <Text style={styles.text145}>1</Text>
              </View>
              <View style={styles.elementsDatePicker154}>
                <Text style={styles.text146}>2</Text>
              </View>
              <View style={styles.elementsDatePicker155}>
                <Text style={styles.text147}>3</Text>
              </View>
            </View>
            <View style={styles.week23}>
              <View style={styles.elementsDatePicker156}>
                <Text style={styles.text148}>4</Text>
              </View>
              <View style={styles.elementsDatePicker157}>
                <Text style={styles.text149}>5</Text>
              </View>
              <View style={styles.elementsDatePicker158}>
                <Text style={styles.text150}>6</Text>
              </View>
              <View style={styles.elementsDatePicker159}>
                <Text style={styles.text151}>7</Text>
              </View>
              <View style={styles.elementsDatePicker160}>
                <Text style={styles.text152}>8</Text>
              </View>
              <View style={styles.elementsDatePicker161}>
                <Text style={styles.text153}>9</Text>
              </View>
              <View style={styles.elementsDatePicker162}>
                <Text style={styles.text154}>10</Text>
              </View>
            </View>
            <View style={styles.week33}>
              <View style={styles.elementsDatePicker163}>
                <Text style={styles.text155}>11</Text>
              </View>
              <View style={styles.elementsDatePicker164}>
                <Text style={styles.text156}>12</Text>
              </View>
              <View style={styles.elementsDatePicker165}>
                <Text style={styles.text157}>13</Text>
              </View>
              <View style={styles.elementsDatePicker166}>
                <Text style={styles.text158}>14</Text>
              </View>
              <View style={styles.elementsDatePicker167}>
                <Text style={styles.text159}>15</Text>
              </View>
              <View style={styles.elementsDatePicker168}>
                <Text style={styles.text160}>16</Text>
              </View>
              <View style={styles.elementsDatePicker169}>
                <Text style={styles.text161}>17</Text>
              </View>
            </View>
            <View style={styles.week43}>
              <View style={styles.elementsDatePicker170}>
                <Text style={styles.text162}>18</Text>
              </View>
              <View style={styles.elementsDatePicker171}>
                <Text style={styles.text163}>19</Text>
              </View>
              <View style={styles.elementsDatePicker172}>
                <Text style={styles.text164}>20</Text>
              </View>
              <View style={styles.elementsDatePicker173}>
                <Text style={styles.text165}>21</Text>
              </View>
              <LinearGradient
                style={styles.elementsDatePicker174}
                locations={[0, 1]}
                colors={["#0061c8", "#5aedff"]}
              >
                <Text style={styles.text166}>22</Text>
              </LinearGradient>
              <View style={styles.elementsDatePicker175}>
                <Text style={styles.text167}>23</Text>
              </View>
              <View style={styles.elementsDatePicker176}>
                <Text style={styles.text168}>24</Text>
              </View>
            </View>
            <View style={styles.week53}>
              <View style={styles.elementsDatePicker177}>
                <Text style={styles.text169}>25</Text>
              </View>
              <View style={styles.elementsDatePicker178}>
                <Text style={styles.text170}>26</Text>
              </View>
              <View style={styles.elementsDatePicker179}>
                <Text style={styles.text171}>27</Text>
              </View>
              <View style={styles.elementsDatePicker180}>
                <Text style={styles.text172}>28</Text>
              </View>
              <View style={styles.elementsDatePicker181}>
                <Text style={styles.text173}>29</Text>
              </View>
              <View style={styles.elementsDatePicker182}>
                <Text style={styles.text174}>30</Text>
              </View>
              <View style={styles.elementsDatePicker183}>
                <Text style={styles.text175}>31</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  ml15: {
    marginLeft: 15,
  },
  mt8: {
    marginTop: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
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
  bg: {
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
  cinemaTheater: {
    position: "absolute",
    marginTop: -20.5,
    top: "50%",
    left: "5.74%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  entertainment: {
    position: "absolute",
    marginTop: 3.5,
    top: "50%",
    left: "5.44%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#43caf1",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    marginTop: 3.5,
    width: "43.5%",
    top: "50%",
    left: "50.15%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#848588",
    textAlign: "right",
  },
  text1: {
    position: "absolute",
    marginTop: -20.5,
    width: "43.5%",
    top: "50%",
    left: "50.15%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
  },
  selection: {
    position: "absolute",
    height: "11.02%",
    width: "84.87%",
    top: "83.29%",
    right: "7.44%",
    bottom: "5.69%",
    left: "7.69%",
  },
  rectangleCopy2: {
    position: "absolute",
    height: "69.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.69%",
    left: "0%",
    borderRadius: 20,
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
  basketballIcon: {
    position: "absolute",
    top: 18,
    left: 18,
    width: 36,
    height: 36,
  },
  sport: {
    position: "absolute",
    marginTop: 33.78,
    width: "60%",
    top: "50%",
    left: "19.29%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  sport1: {
    position: "absolute",
    height: "12.44%",
    width: "18.67%",
    top: "67.65%",
    right: "73.64%",
    bottom: "19.91%",
    left: "7.69%",
    display: "none",
  },
  rectangleCopy3: {
    position: "absolute",
    height: "69.96%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.04%",
    left: "0%",
    borderRadius: 20,
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
  locationAndMapMap: {
    position: "absolute",
    top: 24,
    left: 24,
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  fillIcon: {
    position: "absolute",
    height: "23.99%",
    width: "34.29%",
    top: "22.99%",
    right: "32.86%",
    bottom: "53.03%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  location: {
    position: "absolute",
    marginTop: 34,
    width: "96.15%",
    top: "50%",
    left: "3.63%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.74,
  },
  location1: {
    position: "absolute",
    height: "12.32%",
    width: "18.67%",
    top: "67.65%",
    right: "51.24%",
    bottom: "20.02%",
    left: "30.09%",
    display: "none",
  },
  rectangleCopy4: {
    position: "absolute",
    height: "69.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.69%",
    left: "0%",
    borderRadius: 20,
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
  timeLine1Icon: {
    position: "absolute",
    height: "23.76%",
    width: "34.29%",
    top: "22.77%",
    right: "32.86%",
    bottom: "53.47%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  userVoiceFillIcon: {
    position: "absolute",
    height: "23.76%",
    width: "34.29%",
    top: "22.77%",
    right: "32.86%",
    bottom: "53.47%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  timer: {
    position: "absolute",
    marginTop: 33.78,
    width: "60%",
    top: "50%",
    left: "20%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  timer1: {
    position: "absolute",
    height: "12.44%",
    width: "18.67%",
    top: "67.65%",
    right: "28.84%",
    bottom: "19.91%",
    left: "52.49%",
    display: "none",
  },
  rectangleCopy5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
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
  placeholderIcon: {
    position: "absolute",
    height: "35.73%",
    width: "35.71%",
    top: "31.61%",
    right: "32.69%",
    bottom: "32.65%",
    left: "31.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sensor: {
    position: "absolute",
    marginTop: -9.35,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  sensor1: {
    position: "absolute",
    marginTop: 49.89,
    width: "72.86%",
    top: "50%",
    right: "13.46%",
    left: "13.68%",
    height: 19,
    display: "none",
  },
  player: {
    position: "absolute",
    height: "8.62%",
    width: "18.67%",
    top: "72.39%",
    right: "73.64%",
    bottom: "18.99%",
    left: "7.69%",
    display: "none",
  },
  basketball: {
    position: "absolute",
    top: 120,
    left: 106,
    fontSize: 39,
    letterSpacing: -2,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 253,
    height: 41,
  },
  notReadyBeacon2: {
    position: "absolute",
    top: 168,
    left: 10,
    width: 372,
    height: 372,
    display: "none",
  },
  notReadyBeacon1: {
    position: "absolute",
    top: 169,
    left: 9,
    width: 372,
    height: 372,
  },
  inputTitle: {
    flex: 1,
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  helpersTopHelper: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  playersIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  iconsLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputElementsIcon: {
    position: "relative",
    width: 2,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  inputElementsIcon1: {
    position: "relative",
    width: 2,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 39,
  },
  textContainer: {
    width: 220,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },
  iconsRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  content: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#303239",
    width: 326,
    height: 36,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  master1Line: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ofPlayers: {
    position: "absolute",
    top: 644,
    left: 17,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
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
  rectangle1: {
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
  rectangle2: {
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
  rectangle3: {
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
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 18,
  },
  vectorIcon1: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 7,
    height: 18,
  },
  vectorIcon2: {
    position: "absolute",
    top: -1,
    left: 7,
    width: 20,
    height: 26,
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
  backgroundIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  swipeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#747b84",
    width: 40,
    height: 3,
    flexShrink: 0,
  },
  elementsAddons: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#303239",
    height: 20,
    flexDirection: "column",
    paddingHorizontal: 167,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxNavBar: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navigationBars: {
    position: "absolute",
    width: "100%",
    top: 20,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 33,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#23262b",
    height: 1,
    flexShrink: 0,
  },
  divider: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line1: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#23262b",
    height: 1,
    flexShrink: 0,
  },
  divider1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  container2: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sectionHeader: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  month: {
    position: "absolute",
    width: "100%",
    top: 50,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 64,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  feb: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker1: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsDownArrow: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  arrowsLeftArrow: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  feb1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker2: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker3: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  monthYear: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  arrowsRightArrow: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mo: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker4: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker5: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker6: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker7: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker8: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker9: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo6: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker10: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  days: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  text5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker11: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text6: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker12: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text7: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker13: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text8: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker14: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text9: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker15: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text10: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker16: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text11: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker17: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text12: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker18: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text13: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker19: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text14: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker20: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text15: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker21: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text16: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker22: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text17: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker23: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text18: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker24: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text19: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker25: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text20: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker26: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text21: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker27: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text22: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker28: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text23: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker29: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text24: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker30: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text25: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker31: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text26: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker32: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text27: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker33: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text28: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker34: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text29: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker35: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text30: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker36: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text31: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker37: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text32: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker38: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text33: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker39: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text34: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker40: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text35: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker41: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text36: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker42: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text37: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker43: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text38: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker44: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text39: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker45: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  month1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  monthPicker: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  feb2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker46: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text40: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker47: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsDownArrow1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV11: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  arrowsLeftArrow1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  feb3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker48: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text41: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker49: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  monthYear1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  arrowsRightArrow1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV21: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mo7: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker50: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo8: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker51: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo9: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker52: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo10: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker53: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo11: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker54: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo12: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker55: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo13: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker56: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  days1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  text42: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker57: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text43: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker58: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text44: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker59: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text45: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker60: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text46: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker61: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text47: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker62: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text48: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker63: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week11: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text49: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker64: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text50: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker65: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text51: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker66: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text52: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker67: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text53: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker68: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text54: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker69: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text55: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker70: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week21: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text56: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker71: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text57: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker72: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text58: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker73: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text59: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker74: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text60: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker75: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text61: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker76: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text62: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker77: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week31: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text63: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker78: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text64: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker79: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text65: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker80: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text66: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker81: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text67: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker82: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text68: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker83: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text69: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker84: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week41: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text70: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker85: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text71: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker86: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text72: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker87: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text73: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker88: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text74: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker89: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text75: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker90: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text76: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker91: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week51: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  month2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  monthPicker1: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  month3: {
    position: "absolute",
    width: "100%",
    top: 114,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 290,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 31,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  container3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sectionHeader1: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text77: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text78: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker1: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text79: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker2: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text80: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker3: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text81: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker4: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text82: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker5: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text83: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker6: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text84: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker7: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text85: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker8: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text86: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker9: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text87: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker10: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text88: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker11: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text89: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker12: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text90: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker13: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text91: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker14: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text92: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker15: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text93: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker16: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text94: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker17: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text95: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker18: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text96: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker19: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text97: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTimePicker20: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text98: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker21: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text99: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker22: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text100: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker23: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text101: {
    position: "relative",
    fontSize: 12,
    textDecoration: "line-through",
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTimePicker24: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  timePicker: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#5aedff",
    width: 39,
    height: 37,
    flexShrink: 0,
  },
  rectangleView1: {
    position: "relative",
    backgroundColor: "#5aedff",
    width: 39,
    height: 37,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "relative",
    backgroundColor: "#5aedff",
    width: 35,
    height: 37,
    flexShrink: 0,
  },
  rectangleView3: {
    position: "relative",
    width: 35,
    height: 33,
    flexShrink: 0,
  },
  feb4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker92: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text102: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker93: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsDownArrow2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV12: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  arrowsLeftArrow2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  feb5: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker94: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text103: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker95: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  monthYear2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  arrowsRightArrow2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  monthV22: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mo14: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker96: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo15: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker97: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo16: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker98: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo17: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker99: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo18: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker100: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo19: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker101: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo20: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker102: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  days2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  text104: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker103: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text105: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker104: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text106: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker105: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text107: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker106: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text108: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker107: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text109: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker108: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text110: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker109: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week12: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text111: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker110: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text112: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker111: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text113: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker112: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text114: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker113: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text115: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker114: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text116: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker115: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text117: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker116: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week22: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text118: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker117: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text119: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker118: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text120: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker119: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text121: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker120: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text122: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker121: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text123: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker122: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text124: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker123: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week32: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text125: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker124: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text126: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker125: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text127: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker126: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text128: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker127: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text129: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker128: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text130: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker129: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text131: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker130: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week42: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text132: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker131: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text133: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker132: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text134: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker133: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text135: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker134: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text136: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker135: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text137: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker136: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text138: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsDatePicker137: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week52: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  month4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  monthPicker2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  month5: {
    position: "absolute",
    width: "100%",
    top: 396,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 312,
    overflow: "hidden",
    flexDirection: "column",
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
    flex: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  components: {
    width: 217,
    flexShrink: 0,
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
  label1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master1: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#23262b",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    borderColor: "#23262b",
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
  line7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupsLarge: {
    position: "absolute",
    width: "100%",
    top: 51,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalPage: {
    position: "absolute",
    width: "100%",
    top: 148,
    right: "0%",
    left: "0%",
    height: 708,
  },
  feb6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker138: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text139: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker139: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsDownArrow3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV13: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  arrowsLeftArrow3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  feb7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker140: {
    height: 40,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text140: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker141: {
    width: 40,
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  monthYear3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  arrowsRightArrow3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthV23: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mo21: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker142: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo22: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker143: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo23: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker144: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo24: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker145: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo25: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker146: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo26: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker147: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  mo27: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "center",
  },
  elementsDatePicker148: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  days3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  text141: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker149: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text142: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker150: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text143: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker151: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text144: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "center",
  },
  elementsDatePicker152: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text145: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker153: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text146: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker154: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text147: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker155: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week13: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text148: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker156: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text149: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker157: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text150: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker158: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text151: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker159: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text152: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker160: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text153: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker161: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text154: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker162: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week23: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text155: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker163: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text156: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker164: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text157: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker165: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text158: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker166: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text159: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker167: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text160: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker168: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text161: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker169: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week33: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text162: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker170: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text163: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker171: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text164: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker172: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text165: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker173: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text166: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker174: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text167: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker175: {
    flex: 1,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text168: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker176: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week43: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text169: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker177: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text170: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker178: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text171: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker179: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text172: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker180: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text173: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker181: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text174: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker182: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text175: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsDatePicker183: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  week53: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  month6: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  monthPicker3: {
    width: 375,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  month7: {
    position: "absolute",
    width: "100%",
    top: 262,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 290,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 31,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  beaconSubmissionTime: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BeaconSubmissionTime;
