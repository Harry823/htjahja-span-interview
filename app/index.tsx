import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    if (isLoading && loadingProgress !== 100) {
      setTimeout(() => {
        setLoadingProgress(loadingProgress + 25);
      }, 500)
    }
    if (loadingProgress === 100) {
      setIsLoading(false);
    }
  }, [isLoading, loadingProgress])
  const onPressLoadingButton = () => {
    setIsLoading(true);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <TouchableOpacity onPress={onPressLoadingButton}>
      <Text>Start Count</Text>
    </TouchableOpacity>
    <View style={{height: 10, width: `${loadingProgress}%`, backgroundColor: 'blue', marginHorizontal: 10}} />
    </View>
  );
}
