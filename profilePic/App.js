import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { RNCamera, FaceDetector } from "react-native-camera";

const PendingView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, color: "red" }}>Loading..</Text>
    </View>
  );
};

const App = () => {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = { quality: 0.9, base64: false };
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        {image ? (
          <View style={styles.preview}>
            <Text style={styles.camtext}>Here is your new profile pic</Text>

            <Image
              style={styles.clicked}
              source={{ uri: image, width: "100%", height: "80%" }}
            />
            <Button
              title="Click new Image"
              onPress={() => {
                setImage(null);
              }}
            ></Button>
          </View>
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "Longer text to use camera",
              buttonPositive: "OK",
              buttonNegative: "Cancel",
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio",
              message: "Longer text to use audio",
              buttonPositive: "OK",
              buttonNegative: "Cancel",
            }}
          >
            {({ camera, status }) => {
              if (status !== "READY") {
                return <PendingView />;
              }
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={styles.capture}
                    onPress={() => takePicture(camera)}
                  >
                    {/* <Text>SNAP</Text> */}
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0a79df",
  },
  preview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    // backgroundColor: "rgba(255, 165, 0, 0.5)",
    padding: 20,
    alignSelf: "auto",
    marginBottom: 80,
    borderRadius: 100,
    width: 60,
    height: 60,
    borderWidth: 5,
    borderColor: "white",
  },
  camtext: {
    backgroundColor: "#3498DB",
    color: "#FFFFFF",
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 25,
  },
  clicked: {
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: 100,
  },
});

export default App;
