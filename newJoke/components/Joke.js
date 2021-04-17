import React from "react";
import {StyleSheet, View, Image} from "react-native";

import {Text, Card, CardItem, Container, Content} from "native-base";

const Joke = ({details}) => {
  console.log(details.value);
  return (
    <View style={styles.container}>
      <Card>
        <CardItem cardBody>
          <Image source={{uri: details.icon_url, width: 50, height: 50}} />
        </CardItem>
        <CardItem>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontStyle: "italic",
            }}>
            {details.value}
          </Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default Joke;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    minWidth: "90%",
    minHeight: "30%",
    backgroundColor: "#383CC1",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    padding: 5,
  },
});
