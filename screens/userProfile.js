import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Item, Input, Form, Label, } from 'native-base';

export default function UserProfile({item}) {

    return(
        <Form style={{flex:1}}>
			<TouchableOpacity onPress={()=> pickImage()}>
				<Image source={{uri:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}} style={styles.avatar}></Image>
			</TouchableOpacity>
				<Item stackedLabel>
					<Label>Name</Label>
					<Input disabled value={item.username} />
				</Item>
				<Item stackedLabel>
					<Label>Email</Label>
					<Input disabled value={item.email} />
				</Item>
				<Item stackedLabel>
					<Label>Mobile</Label>
					<Input disabled value={item.mobile} />
				</Item>
				<Item stackedLabel>
					<Label>City</Label>
					<Input disabled value={item.city} />
				</Item>
				<TouchableOpacity style={styles.button} onPress={() => {console.log('testing')}}>
					<Text style={{color:'#fff', fontWeight:"500", fontSize:18}}>Edit</Text>
				</TouchableOpacity>
			</Form>
            
    );
}

const styles = StyleSheet.create({
    button:{
        marginHorizontal:120,
        backgroundColor:'#FF9E09',
        borderRadius:4,
        top:8,
        padding: 15,
        alignItems:"center",
    },
    avatar:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:'#ccc',
        justifyContent:"center",
        alignItems:"center",
        marginLeft:130,
        top:10,
    }
  });


