import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  CheckBox,
  Title,
  H1,
  Fab,
  Subtitle,
  Container,
  Text,
  Spinner,
} from "native-base";
import Snackbar from "react-native-snackbar";

import {useIsFocused} from "@react-navigation/native";

const Home = ({navigation, route}) => {
  const [listOfSeasons, setListOfSeasons] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();
  const getList = async () => {
    setLoading(true);

    const storedValue = await AsyncStorage.getItem("@season_list");
    // console.log(storedValue);
    if (!storedValue) {
      setListOfSeasons([]);
    } else {
      const list = JSON.parse(storedValue);
      setListOfSeasons(list);
    }

    setLoading(false);
  };

  const deleteSeason = async (id) => {
    //
    const newList = await listOfSeasons.filter((list) => list.id !== id);
    await AsyncStorage.setItem("@season_list", JSON.stringify(newList));
    setListOfSeasons(newList);
  };

  const markComplete = async (id) => {
    //
    const newArray = listOfSeasons.map((list) => {
      if (list.id === id) {
        list.isWatched = !list.isWatched;
      }
      return list;
    });
    await AsyncStorage.setItem("@season_list", JSON.stringify(newArray));
    setListOfSeasons(newArray);
  };
  Snackbar.dismiss();

  useEffect(() => {
    getList();
  }, [isFocused]);

  if (loading) {
    return (
      <Container style={styles.container}>
        <Spinner color="#00b7c2" />
      </Container>
    );
  }

  return (
    <Container style={styles.MainContainer}>
      <Container style={styles.container}>
        {listOfSeasons.length == 0 ? (
          <Container style={styles.container}>
            <H1 style={styles.heading}>
              Watchlist is empty. please add season
            </H1>
          </Container>
        ) : (
          <ScrollView bounces="true" contentContainerStyle={styles.ScrollView}>
            <H1 style={styles.heading}>Next series to watch</H1>
            <List>
              {listOfSeasons.map((season) => (
                <ListItem key={season.id} style={styles.listItem} noBorder>
                  <Left>
                    <Button
                      style={styles.actionButton}
                      small
                      danger
                      onPress={() => {
                        deleteSeason(season.id);
                      }}>
                      <Icon name="trash" active></Icon>
                    </Button>
                    <Button
                      style={styles.actionButton}
                      small
                      onPress={() => {
                        navigation.navigate("Edit", {season});
                      }}>
                      <Icon name="edit" type="Feather" active></Icon>
                    </Button>
                  </Left>
                  <Body>
                    <Title style={styles.seasonName}>{season.name}</Title>
                    <Text numberOfLines={2} style={{fontSize: 12}} note>
                      {season.totalNoSeason} Season to watch
                    </Text>
                  </Body>
                  <CheckBox
                    style={styles.CheckBox}
                    checked={season.isWatched}
                    onPress={() => {
                      markComplete(season.id);
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </ScrollView>
        )}
      </Container>
      <Fab
        style={{backgroundColor: "#5067FF"}}
        position="bottomRight"
        onPress={() => {
          navigation.navigate("Add");
        }}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: "#1b262c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#1b262c",
    flex: 1,
    maxHeight: "95%",
  },
  MainContainer: {backgroundColor: "#1b262c"},
  heading: {
    textAlign: "center",
    color: "#eee",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: "#fdcb9e",
    textAlign: "justify",
    fontSize: 18,
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
  // CheckBox: {
  //   maxWidth: 15,
  //   maxHeight: 15,
  // },
});
