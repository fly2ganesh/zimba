import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, ColorPropType } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 0.5,
    marginTop: 10,
    borderColor: colors.theme,
  },
  cardBody: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  cardImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: colors.theme,
    marginRight: 20
  },
  cardTitle: {
    fontSize: 18
  },
  cardBodyTextWrapper: {
    display: "flex",
    flex: 1,
  },
  cardBodyRow: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  cardBodyRowIcon: {
    height: 20,
    width: 20,
  },
  cardBodyRowDetail: {
    paddingLeft: 5,
    color: colors.blue
  }
});

const footerStyle = {
  cardFooterBlocks: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderColor: colors.theme,
  },
  cardFooterBlock: {
    borderRightWidth: 0.5,
    borderColor: colors.theme,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
  },
  cardFooterBlockIcon: {
    width: 25,
    height: 25,
  },
  cardFooterBlockTitle: {
    fontSize: 10,
    color: colors.textLight
  }
}

export const Card = ({ props }) => {
  let userProfilePhoto = '../assets/images/icons/scale.png';
  if (props.user_picture) {
    userProfilePhoto = 'http://8354129d88f5.ngrok.io' + props.user_picture;
  }
  console.log(userProfilePhoto);

  return (
    <View>
      <View style={styles.cardWrapper}>
        <View style={styles.cardBody}>
          <Image
            source={props.user_picture ? { uri: `${userProfilePhoto}` } : require("../assets/images/male-profile-picture.jpg")}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardBodyTextWrapper}>
            <View style={styles.cardBodyRow}>
              <Text style={styles.cardTitle}>
                {props.field_first_name}
              </Text>
            </View>
            <View style={styles.cardBodyRow}>
              <Image style={styles.cardBodyRowIcon}
                source={require("../assets/images/icons/scale.png")}
              />
              <Text style={styles.cardBodyRowDetail}>
                Radhaswami
                    </Text>
            </View>
            <View style={styles.cardBodyRow}>
              <Image style={styles.cardBodyRowIcon}
                source={require("../assets/images/icons/id_card.png")}
              />
              <Text style={styles.cardBodyRowDetail}>
                {props.field_occupation ? props.field_occupation : 'Not working'}
              </Text>
            </View>
            <View style={styles.cardBodyRow}>
              <Image style={styles.cardBodyRowIcon}
                source={require("../assets/images/icons/location.png")}
              />
              <Text style={styles.cardBodyRowDetail}>
                {props.field_work_location}
              </Text>
            </View>
            <View style={styles.cardBodyRow}>
              <Image style={styles.cardBodyRowIcon}
                source={require("../assets/images/icons/subcast.png")}
              />
              <Text style={styles.cardBodyRowDetail}>
                {props.field_sub_caste}
              </Text>
            </View>
          </View>
        </View>
        {/* Card Footer */}
        <View style={footerStyle.cardFooter}>
          <View style={footerStyle.cardFooterBlocks} >
            <View style={footerStyle.cardFooterBlock} >
              <TouchableOpacity>
                <Image style={footerStyle.cardFooterBlockIcon}
                  source={require("../assets/images/icons/profile.png")}
                />
                <Text style={footerStyle.cardFooterBlockTitle}>
                  Profile
                   </Text>
              </TouchableOpacity>
            </View>

            <View style={footerStyle.cardFooterBlock} >
              <Image style={footerStyle.cardFooterBlockIcon}
                source={require("../assets/images/icons/message.png")}
              />
              <Text style={footerStyle.cardFooterBlockTitle}>
                Message
                   </Text>
            </View>

            <View style={footerStyle.cardFooterBlock} >
              <Image style={footerStyle.cardFooterBlockIcon}
                source={require("../assets/images/icons/shortlist.png")}
              />
              <Text style={footerStyle.cardFooterBlockTitle}>
                Shortlist
                   </Text>
            </View>

            <View style={footerStyle.cardFooterBlock} >
              <Image style={footerStyle.cardFooterBlockIcon}
                source={require("../assets/images/icons/heart.png")}
              />
              <Text style={footerStyle.cardFooterBlockTitle}>
                Interested
                   </Text>
            </View>

            <View style={footerStyle.cardFooterBlock} >
              <Image style={footerStyle.cardFooterBlockIcon}
                source={require("../assets/images/icons/call.png")}
              />
              <Text style={footerStyle.cardFooterBlockTitle}>
                Call
                   </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
