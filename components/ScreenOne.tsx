import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

function ScreenOne() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Hello Screen One!</Text>
      <Button onPress={() => navigate("Two")}>Screen Two</Button>
    </View>
  );
}

export default ScreenOne;
