/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Axios from "axios";
import {Button, Container, Content, Header, Spinner} from "native-base";
import User from "./components/User";

// const key = "somerandom keywith123"
// const URL = `https://randomuser.me/api/${key}/params`;

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get("https://randomuser.me/api/");
      const details = data.results[0];
      console.log(details.name.first);

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#222831",
        }}>
        <Content style={{marginTop: "50%"}}>
          <Spinner color="blue" size="large" />
        </Content>
      </Container>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar visible="true" /> */}
        <View>
          <User details={details} />
        </View>
        <View>
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text style={{color: "#FFF"}}>New User</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831",
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#2827CC",
  },
});

export default App;
