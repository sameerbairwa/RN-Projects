/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from "react-native";

import Axios from "axios";
import {Button, Header, Title} from "native-base";
import User from "./components/User";

const App = () => {
  const [details, setDetails] = useState(null);
  const [username, setUsername] = useState("");
  const url = `https://api.github.com/users/${username}`;

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(url);
      const details = data;
      console.log(details.name);

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header>
          <Title>Github User</Title>
        </Header>
        <View style={styles.input}>
          <View style={styles.inputText}>
            <TextInput
              value={username}
              placeholder="Github Username"
              onChangeText={(text) => setUsername(text)}
            />
            {/* {console.log(username)} */}
          </View>
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text style={{color: "#FFF", fontWeight: "bold"}}>SUBMIT</Text>
          </Button>
        </View>
        <View>
          <User details={details} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
    marginHorizontal: 5,
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  inputText: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,

    borderColor: "gray",
    width: "70%",
    height: 45,
    alignSelf: "auto",
  },
  button: {
    alignItems: "center",
    padding: 10,
    color: "#383CC1",
  },
});

export default App;
