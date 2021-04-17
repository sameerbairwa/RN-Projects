import React from "react";
import {Text, StyleSheet, Image} from "react-native";
import {Card, CardItem, H1, Container, Content, Spinner} from "native-base";
import moment from "moment";

const User = ({details}) => {
  // console.log(details)
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
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            source={{
              uri: details.avatar_url,
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
            {details.name}
          </Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>
            {" "}
            Number of Public Repos: {details.public_repos}
          </Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>{details.html_url}</Text>
        </CardItem>

        <CardItem bordered style={styles.cardItem}>
          <Text
            style={{
              color: "#fbd46d",
            }}>
            Created At:{"  "}
          </Text>
          <Text style={styles.text}>
            {moment(details.created_at).format("DD-MM-YYYY")}
          </Text>
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={styles.text}> Followers: {details.followers}</Text>
        </CardItem>
      </Card>
    );
  }
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
    marginTop: 150,
    alignSelf: "center",
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
