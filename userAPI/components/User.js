import React from "react";
import {Text, StyleSheet, Image} from "react-native";
import {Card, CardItem, H1} from "native-base";
import moment from "moment";

const User = ({details}) => {
  // console.log(details)
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          source={{
            uri: details.picture?.large,
            width: 150,
            height: 250,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Text
          style={{
            color: "#eeeeee",
            fontSize: 25,
            textAlign: "center",
          }}>
          {details.name?.title} {details.name?.first} {details.name?.last}
        </Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.cell}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.email}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.location?.street?.name}</Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text
          style={{
            color: "#fbd46d",
          }}>
          Registered on :{"  "}
        </Text>
        <Text style={styles.text}>
          {moment(details.registered.date).format("DD-MM-YYYY")}
        </Text>
      </CardItem>
    </Card>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#383CC1",
    borderColor: "#4f8a8b",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardItem: {
    backgroundColor: "#383CC1",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#fbd46d",
    marginTop: -50,
  },
  text: {
    color: "#eeeeee",
  },
});
