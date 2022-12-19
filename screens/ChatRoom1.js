import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ChatRoom1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatRoom}>
      <View style={styles.hello1}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
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
            <Text style={styles.time}>10:14</Text>
          </View>
        </View>
        <View style={styles.homeIndicator2}>
          <View style={styles.homeIndicator1}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
        <View style={styles.message1}>
          <View style={styles.masterMessage}>
            <View style={styles.content}>
              <View style={styles.message}>
                <View style={styles.avatar}>
                  <View style={styles.masterAvatar}>
                    <View style={styles.pxImage}>
                      <View style={styles.mainAvatar}>
                        <View style={styles.story} />
                        <View style={styles.selection} />
                        <View style={styles.background} />
                        <View style={styles.profileIcon}>
                          <Image
                            style={styles.usersAccount}
                            resizeMode="cover"
                            source={require("../assets/users--account.png")}
                          />
                        </View>
                        <View style={styles.name}>
                          <Text style={styles.aH}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon}
                          resizeMode="cover"
                          source={require("../assets/image6.png")}
                        />
                        <View style={styles.badgeBottom}>
                          <View style={styles.badgeLeft}>
                            <LinearGradient
                              style={styles.badge}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder}>
                                <Image
                                  style={styles.wrapperIcon}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper89.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight}>
                            <View style={styles.badge1}>
                              <View style={styles.placeholder1}>
                                <Image
                                  style={styles.wrapperIcon1}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper90.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop}>
                          <View style={styles.badge2} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow, styles.ml5]}>
                      <Text style={styles.title}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right.png")}
                    />
                  </View>
                </View>
                <View style={[styles.container, styles.ml4]}>
                  <View style={styles.text}>
                    <Text style={styles.hiIWantToBookSomeDeskI}>
                      Hello, Nice to meet you all!
                    </Text>
                  </View>
                  <View style={[styles.time1, styles.mt5]}>
                    <View style={styles.left}>
                      <View style={styles.elementsTimeread}>
                        <Image
                          style={styles.checkIcon}
                          resizeMode="cover"
                          source={require("../assets/16--check.png")}
                        />
                        <Text style={[styles.timestamp, styles.ml3]}>
                          Maria
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.right, styles.ml5]}>
                      <View style={styles.elementsTimeread1}>
                        <View style={styles.placeholder2}>
                          <Image
                            style={styles.wrapperIcon2}
                            resizeMode="cover"
                            source={require("../assets/wrapper91.png")}
                          />
                        </View>
                        <Text
                          style={[styles.timestamp1, styles.ml3]}
                        >{`9:30PM `}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.avatar1, styles.ml4]}>
                  <View style={styles.masterAvatar1}>
                    <View style={styles.pxImage1}>
                      <View style={styles.mainAvatar1}>
                        <View style={styles.story1} />
                        <View style={styles.selection1} />
                        <View style={styles.background1} />
                        <View style={styles.profileIcon1}>
                          <Image
                            style={styles.usersAccount1}
                            resizeMode="cover"
                            source={require("../assets/users--account.png")}
                          />
                        </View>
                        <View style={styles.name1}>
                          <Text style={styles.aH1}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon1}
                          resizeMode="cover"
                          source={require("../assets/image7.png")}
                        />
                        <View style={styles.badgeBottom1}>
                          <View style={styles.badgeLeft1}>
                            <LinearGradient
                              style={styles.badge3}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder3}>
                                <Image
                                  style={styles.wrapperIcon3}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper89.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight1}>
                            <View style={styles.badge4}>
                              <View style={styles.placeholder4}>
                                <Image
                                  style={styles.wrapperIcon4}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper90.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop1}>
                          <View style={styles.badge5} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow1, styles.ml5]}>
                      <Text style={styles.title1}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight1, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.content1}>
            <View style={styles.textInput}>
              <Text style={styles.hello} />
            </View>
            <View style={[styles.icon, styles.ml5]}>
              <Image
                style={styles.monochromeCommentMessage}
                resizeMode="cover"
                source={require("../assets/monochrome--comment-message.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator3} />
        </View>
        <View style={styles.message3}>
          <View style={styles.masterMessage1}>
            <View style={styles.content2}>
              <View style={styles.message2}>
                <View style={styles.avatar2}>
                  <View style={styles.masterAvatar2}>
                    <View style={styles.pxImage2}>
                      <View style={styles.mainAvatar2}>
                        <View style={styles.story2} />
                        <View style={styles.selection2} />
                        <View style={styles.background2} />
                        <View style={styles.profileIcon2}>
                          <Image
                            style={styles.usersAccount2}
                            resizeMode="cover"
                            source={require("../assets/users--account2.png")}
                          />
                        </View>
                        <View style={styles.name2}>
                          <Text style={styles.aH2}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon2}
                          resizeMode="cover"
                          source={require("../assets/image8.png")}
                        />
                        <View style={styles.badgeBottom2}>
                          <View style={styles.badgeLeft2}>
                            <LinearGradient
                              style={styles.badge6}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder5}>
                                <Image
                                  style={styles.wrapperIcon5}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper94.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight2}>
                            <View style={styles.badge7}>
                              <View style={styles.placeholder6}>
                                <Image
                                  style={styles.wrapperIcon6}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper95.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop2}>
                          <View style={styles.badge8} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow2, styles.ml5]}>
                      <Text style={styles.title2}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight2, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right2.png")}
                    />
                  </View>
                </View>
                <View style={[styles.container1, styles.ml4]}>
                  <View style={styles.text1}>
                    <Text style={styles.yesOfCourceWeHaveAHuge}>Hi!</Text>
                  </View>
                  <View style={[styles.time2, styles.mt5]}>
                    <View style={styles.left1}>
                      <View style={styles.elementsTimeread2}>
                        <Image
                          style={styles.checkIcon1}
                          resizeMode="cover"
                          source={require("../assets/16--check1.png")}
                        />
                        <Text
                          style={[styles.timestamp2, styles.ml3]}
                        >{`3:00PM `}</Text>
                      </View>
                    </View>
                    <View style={[styles.right1, styles.ml5]}>
                      <View style={styles.elementsTimeread3}>
                        <Image
                          style={styles.checkIcon2}
                          resizeMode="cover"
                          source={require("../assets/16--check.png")}
                        />
                        <Text
                          style={[styles.timestamp3, styles.ml3]}
                        >{`9:40PM `}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.avatar3, styles.ml4]}>
                  <View style={styles.masterAvatar3}>
                    <View style={styles.pxImage3}>
                      <View style={styles.mainAvatar3}>
                        <View style={styles.story3} />
                        <View style={styles.selection3} />
                        <View style={styles.background3} />
                        <View style={styles.profileIcon3}>
                          <Image
                            style={styles.usersAccount3}
                            resizeMode="cover"
                            source={require("../assets/users--account2.png")}
                          />
                        </View>
                        <View style={styles.name3}>
                          <Text style={styles.aH3}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon3}
                          resizeMode="cover"
                          source={require("../assets/image8.png")}
                        />
                        <View style={styles.badgeBottom3}>
                          <View style={styles.badgeLeft3}>
                            <LinearGradient
                              style={styles.badge9}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder7}>
                                <Image
                                  style={styles.wrapperIcon7}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper94.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight3}>
                            <View style={styles.badge10}>
                              <View style={styles.placeholder8}>
                                <Image
                                  style={styles.wrapperIcon8}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper95.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop3}>
                          <View style={styles.badge11} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow3, styles.ml5]}>
                      <Text style={styles.title3}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight3, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.icon1}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView} />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector-9.png")}
            />
          </View>
        </View>
        <View style={styles.message5}>
          <View style={styles.masterMessage2}>
            <View style={styles.content3}>
              <View style={styles.message4}>
                <View style={styles.avatar4}>
                  <View style={styles.masterAvatar4}>
                    <View style={styles.pxImage4}>
                      <View style={styles.mainAvatar4}>
                        <View style={styles.story4} />
                        <View style={styles.selection4} />
                        <View style={styles.background4} />
                        <View style={styles.profileIcon4}>
                          <Image
                            style={styles.usersAccount4}
                            resizeMode="cover"
                            source={require("../assets/users--account.png")}
                          />
                        </View>
                        <View style={styles.name4}>
                          <Text style={styles.aH4}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon4}
                          resizeMode="cover"
                          source={require("../assets/image10.png")}
                        />
                        <View style={styles.badgeBottom4}>
                          <View style={styles.badgeLeft4}>
                            <LinearGradient
                              style={styles.badge12}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder9}>
                                <Image
                                  style={styles.wrapperIcon9}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper89.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight4}>
                            <View style={styles.badge13}>
                              <View style={styles.placeholder10}>
                                <Image
                                  style={styles.wrapperIcon10}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper90.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop4}>
                          <View style={styles.badge14} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow4, styles.ml5]}>
                      <Text style={styles.title4}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight4, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right.png")}
                    />
                  </View>
                </View>
                <View style={[styles.container2, styles.ml4]}>
                  <View style={styles.text2}>
                    <Text style={styles.hiIWantToBookSomeDeskI1}>
                      I know right. And it is super user-friendly!
                    </Text>
                  </View>
                  <View style={[styles.time3, styles.mt5]}>
                    <View style={styles.left2}>
                      <View style={styles.elementsTimeread4}>
                        <Image
                          style={styles.checkIcon3}
                          resizeMode="cover"
                          source={require("../assets/16--check.png")}
                        />
                        <Text style={[styles.timestamp4, styles.ml3]}>
                          Elly
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.right2, styles.ml5]}>
                      <View style={styles.elementsTimeread5}>
                        <View style={styles.placeholder11}>
                          <Image
                            style={styles.wrapperIcon11}
                            resizeMode="cover"
                            source={require("../assets/wrapper91.png")}
                          />
                        </View>
                        <Text
                          style={[styles.timestamp5, styles.ml3]}
                        >{`10:14PM `}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.avatar5, styles.ml4]}>
                  <View style={styles.masterAvatar5}>
                    <View style={styles.pxImage5}>
                      <View style={styles.mainAvatar5}>
                        <View style={styles.story5} />
                        <View style={styles.selection5} />
                        <View style={styles.background5} />
                        <View style={styles.profileIcon5}>
                          <Image
                            style={styles.usersAccount5}
                            resizeMode="cover"
                            source={require("../assets/users--account.png")}
                          />
                        </View>
                        <View style={styles.name5}>
                          <Text style={styles.aH5}>AH</Text>
                        </View>
                        <Image
                          style={styles.imageIcon5}
                          resizeMode="cover"
                          source={require("../assets/image7.png")}
                        />
                        <View style={styles.badgeBottom5}>
                          <View style={styles.badgeLeft5}>
                            <LinearGradient
                              style={styles.badge15}
                              locations={[0, 0.5, 1]}
                              colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                            >
                              <View style={styles.placeholder12}>
                                <Image
                                  style={styles.wrapperIcon12}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper89.png")}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <View style={styles.badgeRight5}>
                            <View style={styles.badge16}>
                              <View style={styles.placeholder13}>
                                <Image
                                  style={styles.wrapperIcon13}
                                  resizeMode="cover"
                                  source={require("../assets/wrapper90.png")}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.badgeTop5}>
                          <View style={styles.badge17} />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.elementsTextBoxTableRow5, styles.ml5]}>
                      <Text style={styles.title5}>Title</Text>
                    </View>
                    <Image
                      style={[styles.arrowsDownArrowRight5, styles.ml5]}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow-right.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.message7}>
        <View style={styles.masterMessage3}>
          <View style={styles.content4}>
            <View style={styles.message6}>
              <View style={styles.avatar6}>
                <View style={styles.masterAvatar6}>
                  <View style={styles.pxImage6}>
                    <View style={styles.mainAvatar6}>
                      <View style={styles.story6} />
                      <View style={styles.selection6} />
                      <View style={styles.background6} />
                      <View style={styles.profileIcon6}>
                        <Image
                          style={styles.usersAccount6}
                          resizeMode="cover"
                          source={require("../assets/users--account.png")}
                        />
                      </View>
                      <View style={styles.name6}>
                        <Text style={styles.aH6}>AH</Text>
                      </View>
                      <Image
                        style={styles.imageIcon6}
                        resizeMode="cover"
                        source={require("../assets/image10.png")}
                      />
                      <View style={styles.badgeBottom6}>
                        <View style={styles.badgeLeft6}>
                          <LinearGradient
                            style={styles.badge18}
                            locations={[0, 0.5, 1]}
                            colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                          >
                            <View style={styles.placeholder14}>
                              <Image
                                style={styles.wrapperIcon14}
                                resizeMode="cover"
                                source={require("../assets/wrapper89.png")}
                              />
                            </View>
                          </LinearGradient>
                        </View>
                        <View style={styles.badgeRight6}>
                          <View style={styles.badge19}>
                            <View style={styles.placeholder15}>
                              <Image
                                style={styles.wrapperIcon15}
                                resizeMode="cover"
                                source={require("../assets/wrapper90.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.badgeTop6}>
                        <View style={styles.badge20} />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.elementsTextBoxTableRow6, styles.ml5]}>
                    <Text style={styles.title6}>Title</Text>
                  </View>
                  <Image
                    style={[styles.arrowsDownArrowRight6, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/arrows--down-arrow-right.png")}
                  />
                </View>
              </View>
              <View style={[styles.container3, styles.ml4]}>
                <View style={styles.text3}>
                  <Text style={styles.hiIWantToBookSomeDeskI2}>
                    Hello, this new app is such as a cool way to meet other
                    players!
                  </Text>
                </View>
                <View style={[styles.time4, styles.mt5]}>
                  <View style={styles.left3}>
                    <View style={styles.elementsTimeread6}>
                      <Image
                        style={styles.checkIcon4}
                        resizeMode="cover"
                        source={require("../assets/16--check.png")}
                      />
                      <Text style={[styles.timestamp6, styles.ml3]}>Elly</Text>
                    </View>
                  </View>
                  <View style={[styles.right3, styles.ml5]}>
                    <View style={styles.elementsTimeread7}>
                      <View style={styles.placeholder16}>
                        <Image
                          style={styles.wrapperIcon16}
                          resizeMode="cover"
                          source={require("../assets/wrapper91.png")}
                        />
                      </View>
                      <Text
                        style={[styles.timestamp7, styles.ml3]}
                      >{`10:13PM `}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.avatar7, styles.ml4]}>
                <View style={styles.masterAvatar7}>
                  <View style={styles.pxImage7}>
                    <View style={styles.mainAvatar7}>
                      <View style={styles.story7} />
                      <View style={styles.selection7} />
                      <View style={styles.background7} />
                      <View style={styles.profileIcon7}>
                        <Image
                          style={styles.usersAccount7}
                          resizeMode="cover"
                          source={require("../assets/users--account.png")}
                        />
                      </View>
                      <View style={styles.name7}>
                        <Text style={styles.aH7}>AH</Text>
                      </View>
                      <Image
                        style={styles.imageIcon7}
                        resizeMode="cover"
                        source={require("../assets/image7.png")}
                      />
                      <View style={styles.badgeBottom7}>
                        <View style={styles.badgeLeft7}>
                          <LinearGradient
                            style={styles.badge21}
                            locations={[0, 0.5, 1]}
                            colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                          >
                            <View style={styles.placeholder17}>
                              <Image
                                style={styles.wrapperIcon17}
                                resizeMode="cover"
                                source={require("../assets/wrapper89.png")}
                              />
                            </View>
                          </LinearGradient>
                        </View>
                        <View style={styles.badgeRight7}>
                          <View style={styles.badge22}>
                            <View style={styles.placeholder18}>
                              <Image
                                style={styles.wrapperIcon18}
                                resizeMode="cover"
                                source={require("../assets/wrapper90.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.badgeTop7}>
                        <View style={styles.badge23} />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.elementsTextBoxTableRow7, styles.ml5]}>
                    <Text style={styles.title7}>Title</Text>
                  </View>
                  <Image
                    style={[styles.arrowsDownArrowRight7, styles.ml5]}
                    resizeMode="cover"
                    source={require("../assets/arrows--down-arrow-right.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupView1}>
        <Text style={styles.kitchen}>Fatima</Text>
        <Pressable
          style={styles.back}
          onPress={() =>
            navigation.navigate("ActiveReceiverRosterCancellation")
          }
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
      <View style={styles.icon2}>
        <Image
          style={styles.monochromeCommentMessage1}
          resizeMode="cover"
          source={require("../assets/monochrome--comment-message.png")}
        />
      </View>
      <View style={styles.voice1}>
        <View style={styles.avatar9}>
          <View style={styles.avatar8}>
            <View style={styles.masterAvatar8}>
              <View style={styles.pxImage8}>
                <View style={styles.mainAvatar8}>
                  <View style={styles.story8} />
                  <View style={styles.selection8} />
                  <View style={styles.background8} />
                  <View style={styles.profileIcon8}>
                    <Image
                      style={styles.usersAccount8}
                      resizeMode="cover"
                      source={require("../assets/users--account6.png")}
                    />
                  </View>
                  <View style={styles.name8}>
                    <Text style={styles.aH8}>AH</Text>
                  </View>
                  <Image
                    style={styles.imageIcon8}
                    resizeMode="cover"
                    source={require("../assets/image12.png")}
                  />
                  <View style={styles.badgeBottom8}>
                    <View style={styles.badgeLeft8}>
                      <LinearGradient
                        style={styles.badge25}
                        locations={[0, 0.5, 1]}
                        colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                      >
                        <Text style={styles.badge24}>Live</Text>
                      </LinearGradient>
                    </View>
                    <View style={styles.badgeRight8}>
                      <View style={styles.badge26}>
                        <View style={styles.placeholder19}>
                          <Image
                            style={styles.wrapperIcon19}
                            resizeMode="cover"
                            source={require("../assets/wrapper90.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.badgeTop8}>
                    <View style={styles.badge27}>
                      <Text style={styles.text4}>12</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.elementsTextBoxTableRow8, styles.ml6]}>
                <Text style={styles.title8}>Title</Text>
                <Text style={styles.subtitle}>Subtitle</Text>
              </View>
              <Image
                style={[styles.arrowsDownArrowRight8, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/arrows--down-arrow-right.png")}
              />
            </View>
          </View>
        </View>
        <LinearGradient
          style={[styles.message8, styles.ml5]}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        >
          <View style={styles.content5}>
            <View style={styles.audio}>
              <View style={styles.icon3}>
                <View style={styles.iconPlay}>
                  <Image
                    style={styles.groupIcon}
                    resizeMode="cover"
                    source={require("../assets/group-154.png")}
                  />
                </View>
              </View>
              <View style={styles.voice}>
                <LinearGradient
                  style={styles.waves}
                  locations={[0, 0.5, 0.5]}
                  colors={["#4141e7", "#4141e7", "#a5abb3"]}
                >
                  <View style={styles.shape} />
                  <View style={styles.shape1} />
                  <View style={styles.shape2} />
                  <View style={styles.shape3} />
                  <View style={styles.shape4} />
                  <View style={styles.shape5} />
                  <View style={styles.shape6} />
                  <View style={styles.shape7} />
                  <View style={styles.shape8} />
                  <View style={styles.shape9} />
                  <View style={styles.shape10} />
                  <View style={styles.shape11} />
                  <View style={styles.shape12} />
                  <View style={styles.shape13} />
                  <View style={styles.shape14} />
                  <View style={styles.shape15} />
                  <View style={styles.shape16} />
                  <View style={styles.shape17} />
                  <View style={styles.shape18} />
                  <View style={styles.shape19} />
                  <View style={styles.shape20} />
                  <View style={styles.shape21} />
                  <View style={styles.shape22} />
                  <View style={styles.shape23} />
                  <View style={styles.shape24} />
                  <View style={styles.shape25} />
                  <View style={styles.shape26} />
                  <View style={styles.shape27} />
                  <View style={styles.shape28} />
                  <View style={styles.shape29} />
                  <View style={styles.shape30} />
                  <View style={styles.shape31} />
                  <View style={styles.shape32} />
                  <View style={styles.shape33} />
                  <View style={styles.shape34} />
                  <View style={styles.shape35} />
                  <View style={styles.shape36} />
                  <View style={styles.shape37} />
                  <View style={styles.shape38} />
                  <View style={styles.shape39} />
                  <View style={styles.shape40} />
                  <View style={styles.shape41} />
                  <View style={styles.shape42} />
                  <View style={styles.shape43} />
                  <View style={styles.shape44} />
                  <View style={styles.shape45} />
                  <View style={styles.shape46} />
                  <View style={styles.shape47} />
                  <View style={styles.shape48} />
                  <View style={styles.shape49} />
                  <View style={styles.shape50} />
                  <View style={styles.shape51} />
                  <View style={styles.shape52} />
                  <View style={styles.shape53} />
                  <View style={styles.shape54} />
                  <View style={styles.shape55} />
                  <View style={styles.shape56} />
                  <View style={styles.shape57} />
                  <View style={styles.shape58} />
                  <View style={styles.shape59} />
                  <View style={styles.shape60} />
                </LinearGradient>
              </View>
            </View>
            <View style={styles.time5}>
              <View style={styles.left4}>
                <View style={styles.elementsTimeread8}>
                  <View style={styles.placeholder20}>
                    <Image
                      style={styles.wrapperIcon20}
                      resizeMode="cover"
                      source={require("../assets/wrapper104.png")}
                    />
                  </View>
                  <Text
                    style={[styles.timestamp8, styles.ml3]}
                  >{`9:42PM `}</Text>
                </View>
              </View>
              <View style={[styles.right4, styles.ml5]} />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  ml3: {
    marginLeft: 3,
  },
  mt5: {
    marginTop: 5,
  },
  ml4: {
    marginLeft: 4,
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
  homeIndicator: {
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
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 34,
  },
  story: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
  badge1: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge2: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hiIWantToBookSomeDeskI: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  text: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  checkIcon: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  timestamp: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  left: {
    flex: 1,
    flexDirection: "row",
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
    alignItems: "center",
    justifyContent: "center",
  },
  timestamp1: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  time1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#414249",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  story1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background1: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon1: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name1: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon1: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
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
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft1: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge4: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight1: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom1: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge5: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop1: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar1: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight1: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  message: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  masterMessage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  message1: {
    position: "absolute",
    width: "100%",
    top: 157,
    right: "0%",
    left: "0%",
    height: 75,
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hello: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 15,
    lineHeight: 21,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  textInput: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#414249",
    flexDirection: "column",
    padding: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  monochromeCommentMessage: {
    position: "relative",
    width: 23,
    height: 23,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#414249",
    width: 34,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  content1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  input: {
    position: "absolute",
    width: "81.79%",
    right: "18.21%",
    bottom: 34,
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 53,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  story2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background2: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon2: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name2: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon2: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
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
  badge6: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft2: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge7: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight2: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom2: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge8: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop2: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar2: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight2: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  yesOfCourceWeHaveAHuge: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  text1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  checkIcon1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  timestamp2: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTimeread2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  left1: {
    width: 112,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  checkIcon2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  timestamp3: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTimeread3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  time2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container1: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "rgba(9, 16, 29, 0.8)",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  story3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background3: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon3: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH3: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name3: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon3: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  badge9: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft3: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge10: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight3: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom3: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge11: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop3: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar3: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight3: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  message2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    display: "none",
  },
  content2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  masterMessage1: {
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  message3: {
    position: "absolute",
    width: "100%",
    top: 235,
    right: "0%",
    left: "0%",
    height: 75,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 3,
    borderRadius: 4,
    backgroundColor: "#5aedff",
    width: 7,
    height: 13,
  },
  vectorIcon: {
    position: "absolute",
    top: 7,
    left: -1,
    width: 15,
    height: 14,
  },
  groupView: {
    position: "relative",
    width: 13,
    height: 21,
    flexShrink: 0,
  },
  icon1: {
    position: "absolute",
    top: 762,
    left: 316,
    borderRadius: 15,
    backgroundColor: "#414249",
    width: 34,
    height: 44,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  story4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background4: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount4: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon4: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH4: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name4: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon4: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  badge12: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft4: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
  badge13: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight4: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom4: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge14: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop4: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar4: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight4: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  hiIWantToBookSomeDeskI1: {
    flex: 1,
    position: "relative",
    fontSize: 15,
    lineHeight: 21,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  text2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  checkIcon3: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  timestamp4: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  left2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    alignItems: "center",
    justifyContent: "center",
  },
  timestamp5: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  time3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container2: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#414249",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 248,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  story5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background5: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount5: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon5: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH5: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name5: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon5: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
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
  badge15: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft5: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
  badge16: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight5: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom5: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge17: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop5: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar5: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title5: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight5: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  message4: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  content3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  masterMessage2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  message5: {
    position: "absolute",
    width: "96.15%",
    top: 433,
    right: "3.08%",
    left: "0.77%",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  hello1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  story6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background6: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount6: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon6: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH6: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name6: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon6: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
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
  badge18: {
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft6: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
  badge19: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight6: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom6: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge20: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop6: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar6: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title6: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight6: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hiIWantToBookSomeDeskI2: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  text3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  checkIcon4: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  timestamp6: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  left3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapperIcon16: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder16: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  timestamp7: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "right",
  },
  elementsTimeread7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  time4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container3: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#414249",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 248,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  story7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background7: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount7: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon7: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH7: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  name7: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 24,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon7: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    borderRadius: 40,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  wrapperIcon17: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder17: {
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
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft7: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  wrapperIcon18: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder18: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge22: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight7: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom7: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  badge23: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTop7: {
    position: "absolute",
    right: 0,
    bottom: 12,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  mainAvatar7: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  pxImage7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title7: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  elementsTextBoxTableRow7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight7: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  message6: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  content4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  masterMessage3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  message7: {
    position: "absolute",
    width: "96.15%",
    top: 334,
    right: "3.85%",
    left: "0%",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  groupView1: {
    position: "absolute",
    top: 55,
    left: 23,
    width: 247,
    height: 44,
  },
  monochromeCommentMessage1: {
    position: "relative",
    width: 23,
    height: 23,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon2: {
    position: "absolute",
    top: 763,
    left: 352,
    borderRadius: 15,
    backgroundColor: "#414249",
    width: 34,
    height: 43,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  story8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    display: "none",
  },
  selection8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    display: "none",
  },
  background8: {
    position: "absolute",
    height: "80%",
    width: "80%",
    top: "10%",
    right: "10%",
    bottom: "10%",
    left: "10%",
    borderRadius: 40,
    backgroundColor: "#dadee3",
  },
  usersAccount8: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon8: {
    position: "absolute",
    top: 8,
    left: 4,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  aH8: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  name8: {
    position: "absolute",
    top: 9,
    left: 4,
    width: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  imageIcon8: {
    position: "absolute",
    height: "80%",
    width: "80%",
    top: "10%",
    right: "10%",
    bottom: "10%",
    left: "10%",
    borderRadius: 40,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  badge24: {
    flex: 1,
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  badge25: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 28,
    height: 14,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  badgeLeft8: {
    flex: 1,
    borderRadius: 15,
    height: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  wrapperIcon19: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder19: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge26: {
    borderRadius: 20,
    backgroundColor: "#11bb8d",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 14,
    height: 14,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight8: {
    borderRadius: 15,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  badgeBottom8: {
    position: "absolute",
    top: 20,
    left: 0,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  text4: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  badge27: {
    borderRadius: 20,
    backgroundColor: "#e24949",
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTop8: {
    position: "absolute",
    right: 0,
    bottom: 20,
    borderRadius: 15,
    width: 20,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  mainAvatar8: {
    position: "relative",
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  pxImage8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title8: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#09101d",
    textAlign: "left",
  },
  subtitle: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Archivo",
    color: "#414249",
    textAlign: "left",
  },
  elementsTextBoxTableRow8: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "none",
  },
  arrowsDownArrowRight8: {
    position: "relative",
    borderRadius: 10,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  masterAvatar8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  avatar9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  groupIcon: {
    position: "relative",
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  iconPlay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon3: {
    borderRadius: 30,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  shape: {
    position: "absolute",
    height: "4.26%",
    marginLeft: -81.5,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape1: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -35.62,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape2: {
    position: "absolute",
    height: "9.57%",
    marginLeft: 10.24,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape3: {
    position: "absolute",
    height: "4.26%",
    marginLeft: -78.63,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape4: {
    position: "absolute",
    height: "51.06%",
    marginLeft: -32.74,
    top: "45.9%",
    bottom: "3.04%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape5: {
    position: "absolute",
    height: "20.21%",
    marginLeft: 13.13,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape6: {
    position: "absolute",
    height: "4.26%",
    marginLeft: -75.76,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape7: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -29.89,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape8: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 15.99,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape9: {
    position: "absolute",
    height: "4.26%",
    marginLeft: -72.89,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape10: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -27.01,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape11: {
    position: "absolute",
    height: "20.21%",
    marginLeft: 18.86,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape12: {
    position: "absolute",
    height: "4.26%",
    marginLeft: -70.02,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape13: {
    position: "absolute",
    height: "21.28%",
    marginLeft: -24.15,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape14: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 21.73,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape15: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -67.15,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape16: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -21.29,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape17: {
    position: "absolute",
    height: "51.06%",
    marginLeft: 24.59,
    top: "45.9%",
    bottom: "3.04%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape18: {
    position: "absolute",
    height: "20.21%",
    marginLeft: -64.28,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape19: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -18.42,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape20: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 27.46,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape21: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -61.42,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape22: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -15.55,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape23: {
    position: "absolute",
    height: "21.28%",
    marginLeft: 30.33,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape24: {
    position: "absolute",
    height: "51.06%",
    marginLeft: 56.12,
    top: "45.9%",
    bottom: "3.04%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape25: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -58.56,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape26: {
    position: "absolute",
    height: "78.72%",
    marginLeft: -12.68,
    top: "32.07%",
    bottom: "-10.79%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape27: {
    position: "absolute",
    height: "20.21%",
    marginLeft: 33.19,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape28: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 59.01,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape29: {
    position: "absolute",
    height: "20.21%",
    marginLeft: -55.68,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape30: {
    position: "absolute",
    height: "100%",
    marginLeft: -9.81,
    top: "21.43%",
    bottom: "-21.43%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape31: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 36.07,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape32: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 61.86,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape33: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -52.83,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape34: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -6.96,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape35: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 38.93,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape36: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 64.72,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape37: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -49.95,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape38: {
    position: "absolute",
    height: "68.09%",
    marginLeft: -4.08,
    top: "37.39%",
    bottom: "-5.47%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape39: {
    position: "absolute",
    height: "51.06%",
    marginLeft: 41.79,
    top: "45.9%",
    bottom: "3.04%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape40: {
    position: "absolute",
    height: "21.28%",
    marginLeft: 67.6,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape41: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -47.09,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape42: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -1.21,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape43: {
    position: "absolute",
    height: "20.21%",
    marginLeft: 44.66,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape44: {
    position: "absolute",
    height: "21.28%",
    marginLeft: 70.45,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape45: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 81.93,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape46: {
    position: "absolute",
    height: "36.17%",
    marginLeft: -44.22,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape47: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 1.66,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape48: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 47.52,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape49: {
    position: "absolute",
    height: "21.28%",
    marginLeft: 73.34,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape50: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 84.81,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape51: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -41.37,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape52: {
    position: "absolute",
    height: "78.72%",
    marginLeft: 4.52,
    top: "32.07%",
    bottom: "-10.79%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape53: {
    position: "absolute",
    height: "21.28%",
    marginLeft: 50.4,
    top: "60.79%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape54: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 76.19,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape55: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 87.67,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape56: {
    position: "absolute",
    height: "9.57%",
    marginLeft: -38.48,
    top: "67.17%",
    bottom: "23.25%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape57: {
    position: "absolute",
    height: "20.21%",
    marginLeft: 7.4,
    top: "61.85%",
    bottom: "17.93%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape58: {
    position: "absolute",
    height: "36.17%",
    marginLeft: 53.26,
    top: "53.34%",
    bottom: "10.49%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape59: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 79.07,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  shape60: {
    position: "absolute",
    height: "4.26%",
    marginLeft: 90.54,
    top: "69.3%",
    bottom: "26.44%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#50555c",
    width: 1,
  },
  waves: {
    flex: 1,
    position: "relative",
    height: 35,
    backgroundColor: "transparent",
  },
  voice: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  audio: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIcon20: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder20: {
    borderRadius: 100,
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  timestamp8: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontFamily: "Archivo",
    color: "#fdfdfd",
    textAlign: "right",
  },
  elementsTimeread8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  left4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right4: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    display: "none",
  },
  time5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content5: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  message8: {
    alignSelf: "stretch",
    borderRadius: 15,
    width: 243,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  voice1: {
    position: "absolute",
    top: 235,
    left: 118,
    width: 263,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  chatRoom: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ChatRoom1;
