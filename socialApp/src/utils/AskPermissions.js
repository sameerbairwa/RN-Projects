import {PermissionsAndroid, ToastAndroid} from 'react-native'

export const requestPermission = async () =>{

    try {
        const granted =  await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

        ])   
        console.log(granted) 
        
        if(
            granted['PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE'] === 'denied' ||
            granted['PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE'] === 'denied'
        ){
            ToastAndroid.show('We cannot process without permissions', ToastAndroid.LONG)
            requestPermission()
        }

    } catch (error) {
        console.error(error)
    }
}

// if (Platform.OS === 'android') {
//     PermissionsAndroid.requestMultiple(
//       [PermissionsAndroid.PERMISSIONS.CAMERA, 
//       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
//       ).then((result) => {
//         console.log('result', result);
//       });
//   }