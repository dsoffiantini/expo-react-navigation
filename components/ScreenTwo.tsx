import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

function ScreenTwo() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Hello Screen Two!</Text>
      <Button onPress={() => navigate("One")}>Screen One</Button>
    </View>
  );
}

export default ScreenTwo;
