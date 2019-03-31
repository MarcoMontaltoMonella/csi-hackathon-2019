import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { DangerZone } from "expo";
const { Lottie } = DangerZone;
import RocketLottieFile from "../assets/lottiefiles/rocket";
import Layout from "../constants/Layout";

export default class InboxScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  state = {
    animation: null
  };

  componentWillMount() {
    this._playAnimation();
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = RocketLottieFile;
    this.setState({ animation: result }, this._playAnimation);
  };

  render() {
    return (
      <SafeAreaView style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: Layout.window.width,
              height: Layout.window.height,
              backgroundColor: "#091925"
            }}
            source={this.state.animation}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#ff0"
  },
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
});
