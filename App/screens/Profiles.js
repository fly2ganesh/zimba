
import React, { useState, useEffect } from "react";

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
import { Card } from "../components/Card";
import dhangarGrooms from "../data/api/dhangarGrooms";

const styles = {
  profilesWrapper: {
    padding: 10
  }
}

export default () => {
  let profiles = [];
  const [data, setData] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    fetchGroomData();
  }, []);

  const fetchGroomData = () => {
    const api = new dhangarGrooms();
    api.getGroomProfiles().then(response => setData(response));
  }

  for (let i = 0; i < data.length; i++) {
    profiles.push(<Card key={i} props={data[i]} />)
  }

  //    if(data.length > 0){   
  //      setScrollEnabled(true) 
  //    }
  return (
    <ScrollView >
      <View style={styles.profilesWrapper}>
        <SafeAreaView>
            {profiles}
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}