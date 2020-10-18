// import React, { useState } from 'react';
// import {
// 	StyleSheet,
// 	View,
// 	Dimensions,
// 	TextInput,
// 	Text,
// 	TouchableWithoutFeedback,
// 	Keyboard,
// 	KeyboardAvoidingView,
// 	Modal,
// 	Platform
// } from 'react-native';
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// import * as firebase from 'firebase';
// import { Button } from 'native-base';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyAveLc4eR0R3e5OpF0auXRhs-pHs9tJmQc',
// 	authDomain: 'sharedcab-5335d.firebaseapp.com',
// 	databaseURL: 'https://sharedcab-5335d.firebaseio.com',
// 	projectId: 'sharedcab-5335d',
// 	storageBucket: 'sharedcab-5335d.appspot.com',
// 	messagingSenderId: '948773941129',
// 	appId: '1:948773941129:web:c14e3d3baa822be9a47b58',
// 	measurementId: 'G-F3Q725G1E6',
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;

// export default function RegisterScreen({ navigation }) {
//     const recaptchaVerifier = React.useRef(null);
//     const [modal, isVisible] = useState(false);
// 	const [phoneNumber, setPhoneNumber] = React.useState();
// 	const [verificationId, setVerificationId] = React.useState();
// 	const [verificationCode, setVerificationCode] = React.useState();
// 	const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
// 	const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
// 	  ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
//       : undefined);
      
//       return (
//         <KeyboardAvoidingView style={styles.body} behavior="height">
//              <FirebaseRecaptchaVerifierModal
//       style={{ margin: 0, left: 0, top: 0, right: 0, bottom: 0 }}
//         ref={recaptchaVerifier}
//         firebaseConfig={firebaseConfig}
//       />
//       	<TouchableWithoutFeedback
// 				onPress={() => {
// 					Keyboard.dismiss();
// 				}}
// 			>
//   <View style={styles.body}>
// <Modal animationType={'slide'} transparent={false} visible={modal}>
//     <View style={{marginTop:40}}>
// 	<Text style={{ marginTop: 20 }}>Enter Verification code</Text>
//       <TextInput
//         style={{ marginVertical: 10, fontSize: 17 }}
//         editable={!!verificationId}
//         placeholder="123456"
//         onChangeText={setVerificationCode}
//       />
//       <Button
//         title="Confirm Verification Code"
//         disabled={!verificationId}
//         onPress={async () => {
//           try {
//             const credential = firebase.auth.PhoneAuthProvider.credential(
//               verificationId,
//               verificationCode
//             );
//             await firebase.auth().signInWithCredential(credential);
//             showMessage({ text: "Phone authentication successful 👍" });
//           } catch (err) {
//             showMessage({ text: `Error: ${err.message}`, color: "red" });
// 			isVisible(modal);
// 			navigation.navigate('onBoarding');	
//           }
//         }}
//       ><Text>Verify</Text></Button>
// 	</View>
// </Modal>
// <View style={styles.loginData}>
// 						<Text style={styles.heading}>
// 							<B>Register </B>
// 							with your personal mobile number
// 						</Text>
// 						<View style={styles.numberField}>
// 							<TextInput
// 							placeholder="+923000000000"
// 							autoCompleteType="tel"
// 							keyboardType="phone-pad"
// 							textContentType="telephoneNumber"
// 							onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
// 							style={styles.phoneNumber}
// 							></TextInput>
// 						</View>
// 						<Text onPress={() => alert("Don't have access?")} style={styles.access}>
// 							Don't have access to phone?
// 						</Text>
						
//     <Button
//     onPress={async () => {

//           try {
//             const phoneProvider = new firebase.auth.PhoneAuthProvider();
//             const verificationId = await phoneProvider.verifyPhoneNumber(
//               phoneNumber,
//               recaptchaVerifier.current
//             );

//             setVerificationId(verificationId);
//             console.log(verificationId);
//             showMessage({
//               text: "Verification code has been sent to your phone.",
//             });
//             isVisible(!modal);

//           } catch (err) {
//             showMessage({ text: `Error: ${err.message}`, color: "red" });
//           }
//     }
//      }
// 				style={styles.nextButton}
// 				block
// 				warning
// 			>
// 			<Text style={{ fontSize: 22 }}>Get OTP</Text>
// 				</Button>
// 					</View>
// 					<View style={styles.bottom}>
// 						<Text style={styles.signIn}>
// 							Happy to see you again{' '}
// 							<Text onPress={() => navigation.navigate('App')} style={styles.signInNow}>
// 								Sign In
// 							</Text>
// 						</Text>
// 					</View>
// 				</View>
// 			</TouchableWithoutFeedback>
// 		</KeyboardAvoidingView>
//       )
// }

// const styles = StyleSheet.create({ 
// 	body: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'space-between',
// 	},

// 	image: {
// 		alignSelf: 'center',
// 		width: windowWidth,
// 		height: windowHeight / 2,
// 	},

// 	loginData: {
// 		marginLeft: windowWidth / 20,
// 		marginRight: windowWidth / 20,
// 		marginTop: windowWidth / 10,
// 		height: windowHeight / 2.5,
// 		backgroundColor: '#fff',
// 		borderRadius: 10,
// 	},
// 	heading: {
// 		fontSize: windowWidth / 13,
// 		padding: 15,
// 	},

// 	numberField: {
// 		flexDirection: 'row',
// 		marginLeft: windowWidth / 25,
// 		marginRight: windowWidth / 25,
// 	},

// 	phoneNumber: {
// 		flex: 5,
// 		padding: 8,
// 		paddingHorizontal: 20,
// 		borderRadius: 20,
// 		borderWidth: 0.5,
// 		borderColor: '#FF9E09',
// 		fontSize: windowWidth / 20,
// 		width: windowWidth,
// 	},
// 	access: {
// 		padding: 10,
// 		paddingHorizontal: 25,
// 		color: '#3167F6',
// 	},
// 	bottom: {
// 		flex: 1,
// 		justifyContent: 'flex-end',
// 		marginBottom: 0,
// 	},
// 	signIn: {
// 		position: 'absolute',
// 		bottom: 20,
// 		alignSelf: 'center',
// 		fontSize: 16,
// 	},
// 	signInNow: {
// 		color: 'red',
// 	},
// 	nextButton: {
// 		marginTop: windowWidth / 10,
// 		width: windowWidth / 1.3,
// 		alignSelf: 'center',
// 	},
// 	borderStyleBase: {
// 		width: 30,
// 		height: 45,
// 	},

// 	borderStyleHighLighted: {
// 		borderColor: '#03DAC6',
// 	},

// 	underlineStyleBase: {
// 		width: 30,
// 		height: 45,
// 		borderWidth: 0,
// 		borderBottomWidth: 1,
// 	},

// 	underlineStyleHighLighted: {
// 		borderColor: '#03DAC6',
// 	},
// 	otpBoxesContainer: {
// 		flexDirection: 'row'
// 	},
// 	otpBox: {
// 		fontWeight: '500',
// 		alignSelf: 'center',
// 		fontSize: 20,
// 		padding: 10,
// 		marginRight: 10,
// 		borderWidth: 1,
// 		backgroundColor: '#efefef',
// 		height: 45,
// 		width: '20%',
// 		borderRadius: 10,
// 		borderWidth: 0.5,
// 		borderColor: 'grey',
// 		textAlign: 'center',
// 	}
	
// });
