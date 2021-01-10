import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
    ProfileDetailWrapper: {
    marginVertical: 20
  },
  detailTitleWrapper: {
    marginRight: 10,
    borderBottomColor: colors.theme,
    borderBottomWidth: 0.5,
  },
  detailTitle: {
    fontSize: 20,
    paddingBottom: 5
  }
});

export const Detail = ({ details, title }) => {
  let textRow = []
  for (const [key, value] of Object.entries(details)) {
   // console.log(`${key}: ${value}`);
    textRow.push(
     <View key={key}>
      <Text style={styles.detailTitle}>{key} : </Text>
      <Text style={styles.detailValue}>{value} </Text>
    </View>
    )
  }
  // details.map(detail => textRow.push(
  //   <View style={styles.detailTitleWrapper}>
  //   <Text style={styles.detailTitle}>{detail.title} : </Text>
  //   <Text style={styles.detailValue}>{detail.value} </Text>
  //   </View>
  // ))
  return (
    <View style={styles.ProfileDetailWrapper}>
      <View style={styles.detailTitleWrapper}>
       <Text> {title}</Text>
      </View>
      {textRow}
    </View>
  );
};
