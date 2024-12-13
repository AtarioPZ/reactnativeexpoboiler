import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView className="w-full bg-amber-100">
        <View className="w-full h-[100vh] justify-center items-center">
          <Text className="font-bold text-4xl">Hello</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default HomeScreen;
