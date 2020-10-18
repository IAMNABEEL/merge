// import React, { useState } from 'react';
// import {
//     View,
// 	TextInput,
// 	Text,
// 	Modal,
// } from 'react-native';
// import { Button } from 'native-base';


// export default function OTP({ navigation }) {

//     const [modal, isVisible] = useState(false);
//     const [verificationId, setVerificationId] = React.useState();
// 	const [verificationCode, setVerificationCode] = React.useState();

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
// }