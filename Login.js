import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";


const sendText = async (phoneNumber) => {
  console.log("PhoneNumber: ",phoneNumber);
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
  const LoginResponseText = await LoginResponse.text();//converts the promise to a string by using await
  console.log("Login Response",LoginResponseText);

}

const getToken = async({phoneNumber,oneTimePassword}) => {//This code is not complet 
 console.log("phoneNumber",phoneNumber);
 console.log("OTP",oneTimePassword);
 const LoginResponse=await fetch() 
  method: "POST",

  
}
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);
  return (
    <SafeAreaView style={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="8015551212"
      />
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
        >
        <Text>Send Text</Text>
        </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry= {true}
      />
        <TouchableOpacity
        style={styles.button2}
        onPress={()=>{sendText(phoneNumber)}}
        >
        <Text>Log In</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
marginTop: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#C0FFC3",
    padding: 10
},
button2: {
  alignItems: "center",
  backgroundColor: "#1E7D7D",
  padding: 10
},
});
export default Login;