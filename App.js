import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      email: "",
      passWordAgain: "",
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginText}>Sign Up</Text>
        <View style={styles.inputsView}>
          {/* <Text>helo please enter your email:</Text> */}
          <TextInput
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="userName"
            value={this.state.userName}
            onChangeText={(userName) => {
              this.setState({ userName });
            }}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <TextInput
            placeholder="password"
            style={styles.inputText}
            autoCapitalize="none"
            secureTextEntry={true}
            value={this.state.passWord}
            onChangeText={(passWord) => {
              this.setState({ passWord });
            }}
          />
          <TextInput
            placeholder="passWordAgain"
            style={styles.inputText}
            autoCapitalize="none"
            secureTextEntry={true}
            value={this.state.passWordAgain}
            onChangeText={(passWordAgain) => {
              this.setState({ passWordAgain });
            }}
          />

          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.containerdernier}>
          <Text style={{ marginLeft: 30 }}>you already have an acount?</Text>
          <Text style={{ color: "#659BDF", marginLeft: 18 }}>Log In</Text>
        </View>
      </SafeAreaView>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>helo please enter your email:</Text>
//       <TextInput
//         autoCapitalize="none"
//         style={styles.inputText}
//         placeholder="email"
//         value="good"
//         onChangeText={(Text) => {
//           console.log(hello);
//         }}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    marginTop: 50,
  },
  inputText: {
    // backgroundColor: "green",
    borderWidth: 4,
    marginLeft: 30,
    margin: 18,
    borderColor: "lightblue",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 5,
    paddingVertical: 12,
    width: 250,
    alignSelf: "center",
  },
  inputsView: {
    marginTop: 20,
  },
  loginText: {
    fontSize: 27,
    marginLeft: 88,
    color: "lightblue",
    marginTop: 30,
  },
  forgot: {
    marginLeft: 188,
    fontSize: 14,
    color: "blue",
  },
  containerButton: {
    marginHorizontal: 30,
    backgroundColor: "blue",
    width: 250,
    height: 50,
    marginLeft: 70,
    marginTop: 50,
    borderRadius: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    // justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    color: "white",
    fontSize: 19,
  },
  containerdernier: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 45,
  },
});
export default App;
