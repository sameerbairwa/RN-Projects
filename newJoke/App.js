import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from "react-native";
import {Text, Spinner, Container, Content, Button} from "native-base";
import Joke from "./components/Joke";
import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get("https://api.chucknorris.io/jokes/random");
      const details = data;
      // console.log(details);

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
        <Content style={{marginTop: "60%"}}>
          <Spinner color="white" size="large" />
        </Content>
      </Container>
    );
  } else {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View>
            <Joke details={details} />
          </View>
          <View>
            <Button
              rounded
              style={styles.button}
              onPress={() => fetchDetails()}>
              <Text style={{color: "#FFF"}}>New Joke</Text>
            </Button>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#2827CC",
  },
});

export default App;
