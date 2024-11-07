import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LoadingBar from "./loadingBar";

export default function ProblemTwo() {
  const [loadingBarAmount, setLoadingBarAmount] = useState(0);
  const [loadingBars, setLoadingBars] = useState<number[]>([]);
  const addBar = () => {
    return (<LoadingBar />)
  }
  const onPressAddBar = () => {
    setLoadingBarAmount(loadingBarAmount + 1);
    setLoadingBars([...loadingBars, loadingBarAmount]);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onPressAddBar}>
        <Text>
          Add Bar
        </Text>
      </TouchableOpacity>
      {loadingBars.map(() => addBar())}
    </View>
  )
}