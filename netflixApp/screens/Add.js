import React, {useState} from "react";
import {Text, StyleSheet} from "react-native";
import {Container, Form, Item, Input, Button, H1} from "native-base";

import AsyncStorage from "@react-native-community/async-storage";
import {ScrollView} from "react-native-gesture-handler";
import shortid from "shortid";
import Snackbar from "react-native-snackbar";

const Add = ({navigation, prop}) => {
  const [name, setName] = useState("");
  const [totalNoSeason, setTotalNoSeason] = useState("");
  const addToList = async () => {
    try {
      if (!name || !totalNoSeason) {
        // return alert("Please add both fields");
        //TODO: all snackbar here
        return Snackbar.show({
          text: "Please add both fields ",
          duration: Snackbar.LENGTH_INDEFINITE,
          // backgroundColor: "white",
          textColor: "red",
          action: {
            text: "OK",
            textColor: "green",

            onPress: () => {
              /* Do something. */
            },
          },
        });
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name: name,
        totalNoSeason: totalNoSeason,
        isWatched: false,
      };

      const storedValue = await AsyncStorage.getItem("@season_list");

      const prevList = await JSON.parse(storedValue);
      //   console.log(prevList);
      if (!prevList) {
        const newList = [seasonToAdd];
        await AsyncStorage.setItem("@season_list", JSON.stringify(newList));
        // console.log(newList);
      } else {
        prevList.push(seasonToAdd);
        await AsyncStorage.setItem("@season_list", JSON.stringify(prevList));
        // console.log(prevList);
      }

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add to watch List </H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Season Name"
              style={{color: "#eee"}}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Total no of season"
              style={{color: "#eee"}}
              value={totalNoSeason}
              onChangeText={(text) => setTotalNoSeason(text)}
              keyboardType="decimal-pad"
            />
          </Item>
        </Form>
        <Button rounded block onPress={addToList}>
          <Text style={{color: "#eee"}}>Add</Text>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b262c",
    flex: 1,
    justifyContent: "flex-start",
  },
  heading: {
    textAlign: "center",
    color: "#eee",
    marginHorizontal: 5,
    marginTop: 40,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
