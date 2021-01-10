
import React, { useState, useEffect } from "react";
import dhangarGrooms from "../data/api/dhangarGrooms";
import colors from "../constants/colors";
import { Detail} from "../components/Detail";
import { Button } from "../components/Button";

import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";


const styles = {
  profileWrapper: {
    padding: 10,
  },
  profileImageWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: colors.theme,
  },
  profileTitle: {
    fontSize: 22
  },
  ageGenderHeightWrapper: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  age: {
    borderRightWidth: 0.5,
    borderColor: colors.theme,
    paddingLeft: 20,
    paddingRight: 20,
  },
  gender:{
    borderRightWidth: 0.5,
    borderColor: colors.theme,
    paddingLeft: 20,
    paddingRight: 20,
  },
  height: {
    paddingLeft: 20,
    paddingRight: 20,
  }
}

export default () => {
  const [data, setData] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    const api = new dhangarGrooms();
    api.getProfile(707).then(response => setData(response[0]));
  }

  let userProfilePhoto = '../assets/images/icons/scale.png';
  if (data.user_picture != undefined) {
    userProfilePhoto = 'http://fe2759d8ed9d.ngrok.io' + data.user_picture;
  }


  let details = {
    Created_for :"self",
    Mother_toungh : "Marathi", 
    Languages_known : "Marathi",
    Physical_status : "Normal",
    Marital_status : "Unmarried", 
  };

  return (
    <ScrollView >
      <View style={styles.profileWrapper}>
        <SafeAreaView>
          {/* Profile image and title */}
          <View>
            <View style={styles.profileImageWrapper}>
              <Image
                source={data.user_picture ? { uri: `${userProfilePhoto}` } : require("../assets/images/male-profile-picture.jpg")}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <Text style={styles.profileTitle}>{data.field_first_name}</Text>
            </View>

            {/* Age, gender & height */}
            <View style={styles.ageGenderHeightWrapper}>
              <View style={styles.age}>
              <Text>{data.field_age? data.field_age : '-'}</Text>
              </View>
              <View style={styles.gender}>
              <Text>{data.field_gender? data.field_gender : '-'}</Text>
              </View>
              <View style={styles.height}>
                <Text>{data.field_height? data.field_height : '-'}</Text>
              </View>
            </View>
            {/* Basic details  */}
            <Detail details={details} title="Basic details"/>
            {/* Family details  */}
            <Detail details={details}/>
            {/* Life style  */}
            <Detail details={details}/>
            {/* Education & Proffetional details  */}

          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}