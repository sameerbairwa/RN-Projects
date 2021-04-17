import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
  console.log(data);
  const {name, instaUserName, bio, email, password, country, image} = data;

  auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log('User creation was sucess');
      database()
      .ref('/users/' + data.user.uid)
      .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: data.user.uid
      }).then(()=> console.log("data set success"))
      Snackbar.show({
          text:'Account created',
          textColor:'white',
          backgroundColor:'#1b262c'
      })
    })
    .catch((error) => {
      console.log(error);
    //   const err = error;
      Snackbar.show({
        text: "signup failed",
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signIn = ({data, navigation}) => async (dispatch) => {
    console.log(data);
    const {email, password} = data

    auth()
        .signInWithEmailAndPassword(email,password)
            .then(() => {
                console.log("Sign in sucess");
                Snackbar.show({
                    text:'account sign in',
                    textColor:'white',
                    backgroundColor:'#1b262c'
                })
                navigation.navigate("Home")
            })
            .catch((error) => {
                console.log(error)
                Snackbar.show({
                    text:'Sign Failed',
                    textColor:'white',
                    backgroundColor:'red'
                })
            })
}

export const signOut = () => async (dispatch) =>{
    auth()
     .signOut()
     .then(()=>{
        // console.log(error)
        Snackbar.show({
            text:'SignOut sucess',
            textColor:'White',
            backgroundColor:'#1b262c'
        })
     })
     .catch((error) => {
        console.log(error)
        Snackbar.show({
            text:'SignOut Failed',
            textColor:'White',
            backgroundColor:'red'
        })
     })
}

