import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Item, Input, Form, Label, } from 'native-base';
import * as firebase from 'firebase';
import USERPROFILE from './userProfile';


export default function ProfileScreen() {

	const [username, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [city, setCity] = useState();
	const [data, setData] = useState();
	const [userImage, setUserImage] = useState('https://lh3.googleusercontent.com/proxy/sBI13_O-jfc02iMWzDohP89KLwUtgJpKDHYRBxTDdR1ahJhmyWhQXDjnzcLbfDzviM30xCaVqHJNzk1a2R2zXfM9BYIOtQHdw2XjHn8fnFz086CVqg');


	useEffect(() => {
		fetchPosts();

	},[]);

	fetchPosts = async() => {
		try{
			return firebase.database().ref('users/').on('value', datasnap => {
			let getData = datasnap.val();
				if(getData)
				{
					let dataRecieved = Object.values(getData);
					setData(dataRecieved);
				}
				else{
					return null;
				}
				})
		}
		catch(e)
		{
			console.error(e);
		}
	};

	writeUserData = ( username, email, city, mobile) => {
		firebase.database().ref('users/').push({
			username: username,
			email: email,
			mobile : mobile,
			city: city,
		}).then((data) => console.log('Data set.', data)).catch((error)=>{
			console.log('error', error);
		});

	}


	if(data){

  return (
	<View>
	<View style={styles.header}>
		<Text style={styles.headerTitle}>Your Profile</Text>
	</View>
	<FlatList
	data={data}
	keyExtractor={(item, index) => 'key' + index}
	renderItem={({item}) => {
		return <USERPROFILE item = {item}/>
	}}
	>
</FlatList>
</View>

    
  );

	}
 else{
 	return (
		<View>
		<View style={styles.header}>
			<Text style={styles.headerTitle}>Create your Profile</Text>
		</View>
		<Form>	
		<TouchableOpacity onPress={()=> pickImage()}>
				<Image source={{uri:userImage}} style={styles.avatar}></Image>
			</TouchableOpacity>			
            <Item stackedLabel>
            	<Label style={styles.label}>Username</Label>
            	<Input onChangeText={setName} value={username} />
            </Item>
            <Item stackedLabel>
            	<Label style={styles.label}>Email</Label>
            	<Input onChangeText={setEmail} value={email} />
            </Item>
			<Item stackedLabel>
            	<Label style={styles.label}>Mobile</Label>
            	<Input onChangeText={setMobile} value={mobile} />
            </Item>
            <Item stackedLabel>
            	<Label style={styles.label}>City</Label>
            	<Input onChangeText={setCity} value={city} />
            </Item>
			<TouchableOpacity style={styles.button} onPress={() => {writeUserData(username, email, city, mobile)}}>
				<Text style={{color:'#fff', fontWeight:"500", fontSize:18}}>Save</Text>
			</TouchableOpacity>
        </Form>
    </View>
 		
 	  );
 }
}

const styles = StyleSheet.create({
  header: {
		paddingTop: 80,
		paddingBottom: 20,
		backgroundColor: '#fff',
		borderBottomWidth: 0,
		borderBottomColor: '#EBECF4',
		shadowColor: '#454D65',
		shadowOffset: { height: 5 },
		shadowRadius: 15,
		flexDirection:"row",
		shadowOpacity: 0.2,
		zIndex: 10,
	},

	headerTitle: {
		fontSize: 50,
		color:'#FF9E09',
		fontWeight: "bold",
		marginLeft:20,

	},
	button:{
		marginHorizontal:128,
		backgroundColor:'#FF9E09', 
		borderRadius:4,
		top:20,
		height:40,
		alignItems:"center",
		justifyContent:"center",
	  },
	avatar:{
		height:100,
		width:100,
		borderRadius:50,
		backgroundColor:'#ccc',
		alignSelf: 'center',
	},

	label:{
		fontWeight:"bold"
	}
});
